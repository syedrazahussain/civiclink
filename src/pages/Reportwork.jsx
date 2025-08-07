import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './reportwork.css';

const Reportwork = () => {
  const [getreport, setgetreport] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/admin/getreportwork`)
      .then((response) => {
        setgetreport(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="main-report-container">
      {getreport.length === 0 ? (
        <p className="no-data">No Report Found.</p>
      ) : (
        <>
          {/* Desktop Table View */}
          <div className="report-table-view">
            <table>
              <thead>
                <tr>
                  <th>Contractor Id</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Area</th>
                  <th>Landmark</th>
                  <th>Department</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {getreport.map((getrep) => (
                  <tr key={getrep._id}>
                    <td>{getrep._id}</td>
                    <td>{getrep.email}</td>
                    <td>{getrep.city}</td>
                    <td>{getrep.area}</td>
                    <td>{getrep.landmark}</td>
                    <td>{getrep.department}</td>
                    <td>{getrep.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="report-card-view">
            {getreport.map((getrep) => (
              <div className="report-card" key={getrep._id}>
                <p><strong>Contractor ID:</strong> {getrep._id}</p>
                <p><strong>Email:</strong> {getrep.email}</p>
                <p><strong>City:</strong> {getrep.city}</p>
                <p><strong>Area:</strong> {getrep.area}</p>
                <p><strong>Landmark:</strong> {getrep.landmark}</p>
                <p><strong>Department:</strong> {getrep.department}</p>
                <p><strong>Status:</strong> {getrep.status}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Reportwork;
