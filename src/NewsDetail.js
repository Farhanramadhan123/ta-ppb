import React from 'react';
import { useParams } from 'react-router-dom';
import './NewsDetail.css';

const NewsDetail = ({ news }) => {
  const { id } = useParams();
  const selectedNews = news[id];

  if (!selectedNews) {
    return <h2>News not found</h2>;
  }

  const { title, description, _images_, content, author, lastModified, _id } = selectedNews;
  const imageUrl = _images_ && _images_.length > 0 ? _images_[0] : null;

  return (
    <div className="news-detail-container">
      <div className="news-detail-content">
        <h1 className="news-title">{title}</h1>
        <p className="news-meta">
          <strong>Author:</strong> {author} | <strong>Last Modified:</strong> {new Date(lastModified).toLocaleDateString()}
        </p>

        <div className="news-description">
          <h2>Description</h2>
          <p>{description}</p>
        </div>

        <div className="news-image-container">
          {imageUrl ? (
            <img src={imageUrl} alt={title} className="news-image" />
          ) : (
            <p className="no-image-text">No image available</p>
          )}
        </div>

        <div className="news-content" dangerouslySetInnerHTML={{ __html: content }}></div>

        <div className="news-id">
          <h3>News ID</h3>
          <p>{_id}</p>
        </div>
      </div>
    </div>
  );
};

export default NewsDetail;
