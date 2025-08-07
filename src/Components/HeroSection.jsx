import React from 'react';
import { useNavigate } from 'react-router-dom';
import './herosection.css';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className="hero-section">
      <div className="hero-banner">
        <img
          src="/assets/hero-section.banner.png"
          alt="Hero"
          className="hero-image"
        />
        <div className="hero-text">
          <h1>Welcome to CivicLink</h1>
          <p>Connecting users, administrators, and contractors in one unified platform.</p>
          <div className="button-group">
            <button onClick={() => navigate('/UserLoginPage')}>User Login</button>
            <button onClick={() => navigate('/AdminLoginPage')}>Admin Login</button>
            <button onClick={() => navigate('/WorkerLoginPage')}>Contractor Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
