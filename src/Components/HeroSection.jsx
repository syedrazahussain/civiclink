import React from 'react';
import { useNavigate } from 'react-router-dom';
import './herosection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-banner-wrapper">
      <div className="hero-banner">
        {/* Overlay */}
        <div className="hero-overlay"></div>

        {/* Text Content */}
        <div className="hero-content">
          <div className="hero-text">
            <h1>CivicLink: Connecting Citizens to a Better City</h1>
            <p>
              Seamlessly report and track civic issues like:
              <br />
              <strong>🕳️ Potholes</strong>, <strong>🚱 Water Leakage</strong>, <strong>💡 Streetlight Failure</strong>,
              <strong>🗑️ Garbage Overflow</strong>, <strong>🚧 Broken Footpaths</strong>,
              <strong>📢 Noise Pollution</strong>, <strong>🚦 Traffic Signal Issues</strong>,
              <strong>⚡ Power Outages</strong>, <strong>🏗️ Illegal Construction</strong>, and more.
            </p>
          </div>

          
          <div className="all-btn">
            <button onClick={() => navigate('/UserLoginPage')}>User Login</button>
            <button onClick={() => navigate('/AdminLoginPage')}>Admin Login</button>
            <button onClick={() => navigate('/WorkerLoginPage')}>Contractor Login</button>
          </div>
        </div>

        {/* Background Image */}
        <img
          src="/assets/hero-section.banner.png"
          alt="Smart City Banner"
          className="hero-image"
        />
      </div>
    </div>
  );
};

export default HeroSection;
