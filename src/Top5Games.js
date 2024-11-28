import React from 'react';
import { Link } from 'react-router-dom';
import './Top5Games.css';

const Top5Games = ({ top5Games }) => {
  return (
    <div className="top5-games-container">
      <h1 className="top5-games-title">Top 5 Games</h1>
      {top5Games.length > 0 ? (
        top5Games.map((game, index) => (
          <div key={index} className="game-item">
            {/* Display Image if URL is available */}
            {game._images_ && game._images_.length > 0 && (
              <img
                src={game._images_[0]} // Assuming the first image in _images_ array
                alt={game.title}
                className="game-item-image"
              />
            )}
            <div className="game-item-content">
              <h3 className="game-item-title">{game.title}</h3>
              <p className="game-item-description">{game.description}</p>
              <Link to={`/news/${index}`} className="game-item-link">Read More</Link>
            </div>
          </div>
        ))
      ) : (
        <p className="no-games-message">No top games available at the moment.</p>
      )}
    </div>
  );
};

export default Top5Games;
