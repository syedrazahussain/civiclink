import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../pages/allusersdata.css';

const AllUsersData = () => {
  const [allusers, setallusers] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_BASE_URL}
/allusersdata`)
      .then(response => {
        setallusers(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="main-userdata-container">
      {allusers.length === 0 ? (
        <p className="no-data">No users found.</p>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="userdata-table-view">
            <table>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                </tr>
              </thead>
              <tbody>
                {allusers.map(alluser => (
                  <tr key={alluser._id}>
                    <td>{alluser._id}</td>
                    <td>{alluser.name}</td>
                    <td>{alluser.email}</td>
                    <td>{alluser.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="userdata-card-view">
            {allusers.map(alluser => (
              <div className="userdata-card" key={alluser._id}>
                <p><strong>ID:</strong> {alluser._id}</p>
                <p><strong>Name:</strong> {alluser.name}</p>
                <p><strong>Email:</strong> {alluser.email}</p>
                <p><strong>Phone:</strong> {alluser.phone}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default AllUsersData;
