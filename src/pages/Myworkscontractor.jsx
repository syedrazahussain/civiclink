import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './myworkscontractor.css';

const Myworkscontractor = () => {
    const [getmywork, setgetmywork] = useState([]);
    const [selectedWork, setSelectedWork] = useState(null); // Track the selected work for the modal
    const [selectedStatus, setSelectedStatus] = useState(''); // Track the selected status in the modal
    const email = localStorage.getItem('userEmail');

    useEffect(() => {
        if (email) {
            axios.get(`${process.env.REACT_APP_API_BASE_URL}/api/v1/contract/getmywork?email=${email}`)
                .then(response => {
                    const filteredWorks = response.data.filter(work => work.status !== 'approved');
                    setgetmywork(filteredWorks);
                })
                .catch(err => console.log(err));
        }
    }, [email]);
    

    // Open the modal and set the selected work
    const openModal = (work) => {
        setSelectedWork(work);
        setSelectedStatus(work.status || ''); // Default to the current status of the work
    };

    // Close the modal
    const closeModal = () => {
        setSelectedWork(null);
        setSelectedStatus('');
    };

    // Handle the status change
    const handleStatusChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    const handleApproveStatus = () => {
        if (selectedWork) {
            // Update the status in the backend
            axios.put(`${process.env.REACT_APP_API_BASE_URL}/api/v1/contract/updateStatus/${selectedWork._id}`, { status: selectedStatus })
                .then((response) => {
                    // Update local state with new status
                    setgetmywork(getmywork.map(work => 
                        work._id === selectedWork._id ? { ...work, status: selectedStatus } : work
                    ));
    
                    // If the status is 'approved', hide the card by removing it from the list
                    if (selectedStatus === 'approved') {
                        setgetmywork(getmywork.filter(work => work._id !== selectedWork._id));
                    }
    
                    closeModal(); // Close the modal after updating
                })
                .catch(err => console.log(err));
        }
    };
    

    return (
        <div className="main-works-container">
            <div className="works-container">
                {getmywork.length > 0 ? (
                    getmywork.map((work, index) => (
                        <div key={index} className="card" onClick={() => openModal(work)}>
                            <div className="card-header">
                                <h3>{work.department}</h3>
                                <p className="status"><strong>Status:</strong> {work.status || 'Pending'}</p>
                            </div>
                            <div className="card-body">
                                <p><strong>City:</strong> {work.city}</p>
                                <p><strong>Area:</strong> {work.area}</p>
                                <p><strong>Landmark:</strong> {work.landmark}</p>
                                <p><strong>Message:</strong> {work.message}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No work available</p>
                )}
            </div>

            {/* Modal */}
            {selectedWork && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Approve Status</h2>
                        <div>
                            <label htmlFor="status">Select Status:</label>
                            <select id="status" value={selectedStatus} onChange={handleStatusChange}>
                                <option value="pending">Pending</option>
                                <option value="approved">Approved</option>
                                <option value="in-progress">In Progress</option>
                            </select>
                        </div>
                        <div className="modal-actions">
                            <button onClick={handleApproveStatus}>Approve</button>
                            <button onClick={closeModal}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Myworkscontractor;
