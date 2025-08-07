import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import '../pages/mycomplaints.css';

const MyComplaints = () => {
  const [complaints, setComplaints] = useState([]);
  const token = localStorage.getItem('token');
  const userId = token ? jwtDecode(token).id : null;

  useEffect(() => {
    if (userId) {
      axios.get(`${process.env.REACT_APP_API_BASE_URL}/getcomplaints`)
        .then(response => {
          const filteredComplaints = response.data.filter(complaint => complaint.userId === userId);
          setComplaints(filteredComplaints);
        })
        .catch(err => console.log(err));
    } else {
      console.log('No userId found in the token');
    }
  }, [userId]);

  return (
    <div className="main-complaint-container">
      {complaints.length === 0 ? (
        <p className="no-data">No complaints found for this user.</p>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="complaint-table-view">
            <table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>City</th>
                  <th>Area</th>
                  <th>Problem Raised</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {complaints.map(complaint => (
                  <tr key={complaint._id}>
                    <td>
                      <img
                        src={`${process.env.REACT_APP_API_BASE_URL}/Images/${complaint.image}`}
                        alt="complaint"
                        className="complaint-image"
                      />
                    </td>
                    <td>{complaint.city}</td>
                    <td>{complaint.area}</td>
                    <td>{complaint.message}</td>
                    <td>{complaint.status}</td>
                    <td><button>Action</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="complaint-card-view">
            {complaints.map(complaint => (
              <div className="complaint-card" key={complaint._id}>
                <img
                  src={`${process.env.REACT_APP_API_BASE_URL}/Images/${complaint.image}`}
                  alt="complaint"
                  className="complaint-image"
                />
                <p><strong>City:</strong> {complaint.city}</p>
                <p><strong>Area:</strong> {complaint.area}</p>
                <p><strong>Problem:</strong> {complaint.message}</p>
                <p><strong>Status:</strong> {complaint.status}</p>
                <button>Action</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default MyComplaints;
