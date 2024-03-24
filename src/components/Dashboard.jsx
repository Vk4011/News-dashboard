import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [topNews, setTopNews] = useState([]);
  const [error, setError] = useState(null);


  const fetchTopHeadlines = async () => {
    const apiKey = 'pub_406615e90dde567e2cdb1182b8b007d0a8e3b';
    const url = `https://newsdata.io/api/1/news?apikey=${apiKey}&q=${searchQuery}`;

    try {
      const response = await axios.get(url);
      setTopNews(response.data.results);
    } catch (error) {
      setError(error.response.data.message); 
    }
  };

  
  useEffect(() => {
    
    fetchTopHeadlines();
  }, []);


  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    fetchTopHeadlines();
  };

  return (
    <div className="max-w-5xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold mb-6">News Dashboard</h2>
      <form onSubmit={handleSearchSubmit} className="mb-6">
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search for news (e.g., SpaceX)"
            value={searchQuery}
            onChange={handleSearchChange}
            className="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:border-blue-500"
          />
          <button type="submit" className="bg-blue-500 text-white px-6 py-2 rounded-r-md">Search</button>
        </div>
      </form>
      {error && <div className="text-red-500 mb-6">Error: {error}</div>} 

      <div>
        <h3 className="text-xl font-semibold mb-4">Top News:</h3>
        <ul>
          {topNews.map((news, index) => (
            <li key={index} className="mb-6">
              <a href={news.link} target="_blank" rel="noopener noreferrer" className="text-lg font-medium text-blue-700">{news.title}</a>
              <img src={news.image_url} alt={news.title} className="mt-2 w-full h-auto rounded-lg" style={{ borderColor: '#3182ce' }} />
              <p className="text-gray-600 mt-2">{news.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
