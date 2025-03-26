import React from 'react';
import './home.css';


  import { useNavigate } from 'react-router-dom';  // Import useNavigate hook

const Home = () => {
  const navigate = useNavigate();  // Create a navigate function

  const handleExploreClick = () => {
    navigate('/explore');  // Navigate to the explore page
  };
  return (
    <div className='myhome'>
    <div className="home">
      <h1>Welcome to RiverInsights !</h1>
      <p>Discover the beauty and importance of our rivers.</p>
      <p>Explore the rivers of Maharashtra like Godavari, Krishna, and Tapi.</p>
      <div id='bt'>
      <button onClick={handleExploreClick}> Explore </button>
      </div>  
    </div>
    </div>
    
  );
};

export default Home;