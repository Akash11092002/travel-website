import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="landing-container">
      <h1>Welcome to the Travel Website</h1>
      <p>Your adventure begins here. Explore the world with us.</p>
      <button onClick={() => window.location.href='/about'}>Learn More</button>
    </div>
  );
}

export default Home;
