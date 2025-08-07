import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate =useNavigate();
  return (
    <div>

        <div className="hero-container">
            <div className="banner">
                <img src="./assets/hero-section.banner.png" height={400} width={1200} />
            </div>
        </div>

        <div className="all-btn">
            <button onClick={()=>navigate('UserLoginPage')}>User Login</button>
            <button onClick={()=>navigate('AdminLoginPage')}>Admin Login</button>
            <button onClick={()=>navigate('WorkerLoginPage')}>Contractor Login</button>
        </div>
    </div>
  )
}

export default HeroSection