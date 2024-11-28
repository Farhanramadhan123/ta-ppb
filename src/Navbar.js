import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/top5games" className="navbar-link">Top 5 Games</Link> {/* Move Top 5 Games link after Home */}
        <Link to="/about" className="navbar-link">About</Link> {/* Keep About link at the end */}
      </div>
    </div>
  );
};

export default Navbar;
