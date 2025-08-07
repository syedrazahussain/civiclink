import React, { useEffect, useState } from 'react';
import './myprofile.css';
import axios from 'axios';

const MyProfile = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [getprofile, setGetProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    
    if (!userId) {
      setError('User is not logged in!');
      setLoading(false);
      return;
    }

    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/user/getmyprofiledetails/${userId}`)
      .then((res) => {
        if (res.data && res.data.length > 0) {
          const profileData = res.data[0];
          setGetProfile(profileData);
          setName(profileData.name || '');
          setEmail(profileData.email || '');
          setMobile(profileData.phone || '');
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching profile:', err);
        setError('Failed to load profile data.');
        setLoading(false);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const userId = localStorage.getItem('userId');

    if (!userId) {
      setError('User is not logged in!');
      return;
    }

    // Send updated data to the backend
    axios
      .put(`${process.env.REACT_APP_API_BASE_URL}/api/v1/user/updateprofile/${userId}`, {
        name,
        email,
        phone: mobile, // Update the "phone" field with the "mobile" input value
      })
      .then((res) => {
        if (res.data.success) {
          setSuccessMessage('Profile updated successfully!');
          setGetProfile(res.data.data); // Update the profile data with the response
        } else {
          setError(res.data.message);
        }
      })
      .catch((err) => {
        setError('Failed to update profile data.');
      });
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="main-profile-container">
      <div className="profile-container">
        <form onSubmit={handleSubmit}>
          <div className="profile-heading">
            <h1>My Profile</h1>
          </div>
          {successMessage && <div className="success-message">{successMessage}</div>}
          <div className="inputs">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="inputs">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          <div className="inputs">
            <label htmlFor="mobile">Mobile:</label>
            <input
              type="text"
              value={mobile}
              name="mobile"
              onChange={(e) => setMobile(e.target.value)}
              placeholder="Enter your mobile number"
            />
          </div>
          <div className="submit-btn">
            <button type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
