import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './updatecontractlist.css';

const UpdateContractList = () => {
  const [fetchcontractor, setfetchcontractor] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/admin/fetchcontractor`)
      .then((response) => {
        setfetchcontractor(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleUpdate = (contractorId) => {
    navigate(`/updateformcontract/${contractorId}`);
  };

  return (
    <div className="mainupdatecontractlistcontainer">
      {fetchcontractor.length === 0 ? (
        <p className="no-data">No Contractors found.</p>
      ) : (
        <>
          {/* Desktop Table */}
          <div className="contract-table-view">
            <table>
              <thead>
                <tr>
                  <th>Contract Id</th>
                  <th>Name</th>
                  <th>Mobile</th>
                  <th>Email</th>
                  <th>City</th>
                  <th>Area</th>
                  <th>Department</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {fetchcontractor.map((contractor) => (
                  <tr key={contractor._id}>
                    <td>{contractor._id}</td>
                    <td>{contractor.name}</td>
                    <td>{contractor.mobile}</td>
                    <td>{contractor.email}</td>
                    <td>{contractor.city}</td>
                    <td>{contractor.area}</td>
                    <td>{contractor.department}</td>
                    <td>
                      <button onClick={() => handleUpdate(contractor._id)}>
                        Update
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
          <div className="contract-card-view">
            {fetchcontractor.map((contractor) => (
              <div className="contract-card" key={contractor._id}>
                <p><strong>ID:</strong> {contractor._id}</p>
                <p><strong>Name:</strong> {contractor.name}</p>
                <p><strong>Mobile:</strong> {contractor.mobile}</p>
                <p><strong>Email:</strong> {contractor.email}</p>
                <p><strong>City:</strong> {contractor.city}</p>
                <p><strong>Area:</strong> {contractor.area}</p>
                <p><strong>Department:</strong> {contractor.department}</p>
                <button onClick={() => handleUpdate(contractor._id)}>
                  Update
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default UpdateContractList;
