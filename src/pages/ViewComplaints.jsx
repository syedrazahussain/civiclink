import React, { useEffect, useState } from 'react';
import '../pages/viewcomplaints.css';
import axios from 'axios';
import {message} from 'antd';

const ViewComplaints = () => {
    const [viewcomplaints, setviewcomplaints] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedComplaint, setSelectedComplaint] = useState(null);
    const [selectedOption, setSelectedOption] = useState('');
    const [messageInput, setMessageInput] = useState('');

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_BASE_URL}/viewcomplaints`)
            .then(response => {
                setviewcomplaints(response.data);
            })
            .catch(err => console.log(err));
    }, []);

    const openModal = (complaint) => {
        setSelectedComplaint(complaint);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedComplaint(null);
        setSelectedOption('');
        setMessageInput('');
    };

    const handleOkClick = async () => {
        // Handle OK button click logic here (you could send data to backend)
        console.log('Selected Option:', selectedOption);
        console.log('Message Input:', messageInput);
    
        if (!selectedOption) {
            message.error('Please select a status!');
            return;
        }
    
        try {
            // Assuming `selectedComplaint._id` contains the ID of the complaint you want to update
            const res = await axios.put(`${process.env.REACT_APP_API_BASE_URL}/updatestatus/${selectedComplaint._id}`, {
                status: selectedOption,  // Send the selected status to the backend
                message: messageInput    // Send the message input (optional, depends on your backend logic)
            });
    
            if (res.data.success) {
                // Update the local state to reflect the change
                setviewcomplaints((prevComplaints) => {
                    // If status is "Resolved", remove the complaint from the list
                    if (selectedOption === 'Resolved') {
                        return prevComplaints.filter((complaint) => complaint._id !== selectedComplaint._id);
                    }
    
                    // Otherwise, just update the status and message of the selected complaint
                    return prevComplaints.map((complaint) =>
                        complaint._id === selectedComplaint._id
                            ? { ...complaint, status: selectedOption, message: messageInput }
                            : complaint
                    );
                });
    
                message.success('Updated Successfully');
            } else {
                message.error(res.data.message);
            }
        } catch (error) {
            console.log(error);
            message.error('Something went wrong');
        }
    
        // Close modal after clicking OK
        closeModal();
    };
    
    

    const handleCancelClick = () => {
        // Close the modal without making any changes
        closeModal();
    };

    return (
        <div className="main-container-complaints">
        <div className="cards-container">
    {viewcomplaints.length === 0 ? (
        <p>No complaints found for this user.</p>
    ) : (
        viewcomplaints
            .filter((complaint) => complaint.status !== 'Resolved') // Filter out resolved complaints
            .map((complaint, index) => (
                <div key={index} className="card" onClick={() => openModal(complaint)}>
                    <div className="status">
                        <p><strong>Status:</strong> {complaint.status}</p>
                    </div>
                    <img
                        src={`${process.env.REACT_APP_API_BASE_URL}/Images/${complaint.image}`}
                        alt="complaint"
                        className="complaint-image"
                    />
                    <div className="complaint-details">
                        <p><strong>Name:</strong> {complaint.name}</p>
                        <p><strong>Mobile:</strong> {complaint.mobile}</p>
                        <p><strong>City:</strong> {complaint.city}</p>
                        <p><strong>Area:</strong> {complaint.area}</p>
                        <p><strong>Message:</strong> {complaint.message}</p>
                    </div>
                </div>
            ))
    )}
</div>


            {/* Modal for viewing and updating complaint */}
            {isModalOpen && selectedComplaint && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Complaint Details</h2>
                        <p><strong>Name:</strong> {selectedComplaint.name}</p>
                        <p><strong>Mobile:</strong> {selectedComplaint.mobile}</p>
                        <p><strong>City:</strong> {selectedComplaint.city}</p>
                        <p><strong>Area:</strong> {selectedComplaint.area}</p>
                        <p><strong>Message:</strong> {selectedComplaint.message}</p>

                        <div className="modal-inputs">
                            <label htmlFor="selectOption">Select Status:</label>
                            <select
                                id="selectOption"
                                name="select"
                                value={selectedOption}
                                onChange={(e) => setSelectedOption(e.target.value)}
                            >
                                <option value="">--Select--</option>
                                <option  value="Resolved">Resolved</option>
                                <option value="Pending">Pending</option>
                                <option value="In Progress">In Progress</option>
                            </select>

                            <label htmlFor="messageInput">Message:</label>
                            <textarea
                                id="messageInput"
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                                placeholder="Add a message..."
                            ></textarea>
                        </div>

                        <div className="modal-buttons">
                            <button onClick={handleOkClick}>OK</button>
                            <button onClick={handleCancelClick}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ViewComplaints;
