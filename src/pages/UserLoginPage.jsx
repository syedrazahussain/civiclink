import React, { useState } from 'react';
import '../pages/userloginpage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const UserLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/user/login`, { email, password });
      console.log('Login Response:', res.data);

      if (res.data.success) {
        // Store the token in localStorage
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('Email', res.data.email);

        localStorage.setItem('userId',res.data._id)
        
        
        
        message.success('Login Successfully');
        navigate('/userpage');
      } else {
        message.error(res.data.message);
      }

    } catch (error) {
      console.log(error)
      message.error('Something Went Wrong')

    }

  };

  return (
    <div>
      <div className="Login-container">
        <div className="login">
          <div className="login-logo">
            <img src="./assets/login.png" height={100} width={100} alt="login" />
          </div>
          <div className="login-type">
            <p>User</p>
          </div>
          <form onSubmit={handleForm}>
            <div className="input-field">
              <div className="input-content">
                <label>Email:</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            <div className="input-field">
              <div className="input-content">
                <label>Password:</label>
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            {error && <div className="error-message">{error}</div>}

            <div className="signup">
              <p>
                Don't have an account? <Link to="/RegisterUser">Register</Link>
              </p>
            </div>
            <div className="login-btn">
              <button type="submit">Log in</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserLoginPage;
