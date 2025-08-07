import React, { useState } from 'react'
import '../pages/userloginpage.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import message from 'antd/es/message'; 

const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleForm = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/admin/adminlogin`, { email, password })
      console.log('Login Response', res.data);
      if (res.data.success) {
        // Store the token in localStorage
        localStorage.setItem('admintoken', res.data.admintoken);

        message.success('Admin Login Successfully');
        navigate('/adminpage');
      } else {
        message.error(res.data.message);
      }

    } catch (error) {
      console.log(error)
      message.error('Something went Wrong');

    }
  };
  return (
    <div>
      <div className="Login-container">

        <div className="login">
          <div className="login-logo">
            <img src="./assets/admin.png" height={100} width={100} />

          </div>
          <div className="login-type">
            <p>Admin </p>
          </div>
          <form onSubmit={handleForm}>

            <div className="input-field">
              <div className="input-content">
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>


            </div>
            <div className="input-field">
              <div className="input-content">
                <label>Password:</label>
                <input type="text" value={password}
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
            </div>

            <div className="signup">
              <p>
                Don't have an account? <Link to="/RegisterAdmin">Register</Link>
              </p>
            </div>
            <div className="login-btn">
              <button>Log in</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default AdminLoginPage;