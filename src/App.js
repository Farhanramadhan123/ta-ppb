import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import NewsDetail from './NewsDetail';
import AboutPage from './AboutPage';
import Navbar from './Navbar';
import Profile from './Profile';
import Top5Games from './Top5Games'; // Import the new Top5Games component
import './App.css';

const options = {
  method: 'GET',
  url: 'https://epic-games-store.p.rapidapi.com/getNews/locale/en/limit/30',
  headers: {
    'x-rapidapi-key': '5e93e58f7cmsh7a6bb1335f6c664p18b435jsn1dd953d3451f',
    'x-rapidapi-host': 'epic-games-store.p.rapidapi.com',
  },
};

function App() {
  const [news, setNews] = useState([]);
  const [top5Games, setTop5Games] = useState([]); // State for top 5 games

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setNews(response.data);

        // Get top 5 games
        const top5 = response.data.slice(0, 5); // Assuming the first 5 items are top games
        setTop5Games(top5);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<HomePage news={news} />} />
            <Route path="/news/:id" element={<NewsDetail news={news} />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/top5games" element={<Top5Games top5Games={top5Games} />} /> {/* Add Top 5 Games route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
