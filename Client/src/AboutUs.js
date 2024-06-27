import React from 'react';
import './About.css'; // Import the CSS file
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'

function AboutUs() {
  return (
    <div className="about-container"style={{ paddingTop: '60px', padding: '20px' }}>
      <div className="about-header">
        <h1>About Us</h1>
        <p>Discover more about our journey and what drives us to create unforgettable travel experiences.</p>
      </div>
      <div className="about-content">
        <div className="about-section">
          <img src={img1} alt="Our Journey" />
          <h2>Our Journey</h2>
          <p>We started with a simple mission: to make travel accessible and enjoyable for everyone. Over the years, we've grown into a community of explorers and adventurers.</p>
          <p>Our passion for travel and discovery drives us to offer the best experiences to our customers, whether it's a weekend getaway or a month-long adventure.</p>
        </div>
        <div className="about-section">
          <img src={img2} alt="Our Mission" />
          <h2>Our Mission</h2>
          <p>Our mission is to inspire people to explore the world and to provide the tools and resources to make it happen. We believe travel can change lives, and we're here to support that journey.</p>
          <p>We are committed to sustainability and responsible tourism, ensuring that our operations and activities positively impact the environment and the communities we visit.</p>
        </div>
      </div>
      <div className="mission-section">
        <h2>What We Stand For</h2>
        <p>We are dedicated to providing exceptional travel experiences that enrich and inspire. Our values are centered around customer satisfaction, integrity, and innovation.</p>
      </div>
      <div className="team-section">
        <h2>MySelf</h2>
            <h2>Akash Maurya</h2>
            <p>
                A dedicated web developer to develop the fast and interactive website .Main aim to create websites with easy user interface.
            </p>
        </div>
      </div>
    
  );
}

export default AboutUs;
