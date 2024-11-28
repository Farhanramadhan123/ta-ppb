import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = ({ news }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 5; // Number of news items per page

  // Filter news based on the search query
  const filteredNews = news.filter(
    (item) =>
      (item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase())) ||
      (item.description && item.description.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  // Calculate indices for slicing the filtered news array
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentNews = filteredNews.slice(startIndex, endIndex);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset to the first page when search changes
  };

  return (
    <div className="home-page-container">
      <div className="welcome-section">
        <h1 className="welcome-title">Welcome to Epic Games News</h1>
        <p className="welcome-message">
          Stay updated with the latest news and announcements in the world of Epic Games!
        </p>
        <div className="buttons-container">
          <Link to="/about" className="home-page-button about-button">About</Link>
          <Link to="/profile" className="home-page-button profile-button">Profile</Link>
        </div>
      </div>

      {/* Search Bar */}
      <div className="search-section">
        <input
          type="text"
          placeholder="Search news..."
          value={searchQuery}
          onChange={handleSearch}
          className="search-input"
        />
      </div>

      <div className="news-list">
        <h2 className="news-list-title">Latest News</h2>
        {currentNews.length > 0 ? (
          currentNews.map((item, index) => (
            <div key={index} className="news-item">
              {/* Display Image if URL is available */}
              {item._images_ && item._images_.length > 0 && (
                <img
                  src={item._images_[0]} // Assuming the first image in _images_ array
                  alt={item.title || 'News Image'}
                  className="news-item-image"
                />
              )}
              <div className="news-item-content">
                <h3 className="news-item-title">{item.title || 'Untitled'}</h3>
                <p className="news-item-description">{item.description || 'No description available.'}</p>
                <Link to={`/news/${index}`} className="news-item-link">Read More</Link>
              </div>
            </div>
          ))
        ) : (
          <p className="no-news-message">
            {searchQuery ? 'No results found for your search.' : 'No news available at the moment.'}
          </p>
        )}

        {/* Pagination Controls */}
        {filteredNews.length > itemsPerPage && (
          <div className="pagination-controls">
            <button
              onClick={goToPreviousPage}
              disabled={currentPage === 1}
              className="pagination-button prev-button"
            >
              Previous
            </button>
            <span className="pagination-info">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="pagination-button next-button"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
