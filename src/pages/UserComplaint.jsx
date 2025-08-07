import React, { useState, useEffect } from 'react';
import '../pages/usercomplaint.css';
import axios from 'axios';
import message from 'antd/es/message';

const UserComplaint = () => {
    const [name, setname] = useState('');
    const [mobile, setmobile] = useState('');
    const [city, setcity] = useState('');
    const [area, setarea] = useState('');
    const [file, setfile] = useState(null);
    const [landmark, setlandmark] = useState('');
    const [messageText, setmessage] = useState('');
    const [email, setemail] = useState('');

    // Auto-fill email from localStorage on component mount
    useEffect(() => {
        const storedEmail = localStorage.getItem('Email');
        if (storedEmail) {
            setemail(storedEmail);
        }
    }, []);

    const handleform = (e) => {
        e.preventDefault();

        const formdata = new FormData();
        formdata.append('name', name);
        formdata.append('mobile', mobile);
        formdata.append('city', city);
        formdata.append('area', area);
        formdata.append('landmark', landmark);
        formdata.append('message', messageText);
        formdata.append('email', email);

        if (file) {
            formdata.append('file', file);
        }

        axios.post(`${process.env.REACT_APP_API_BASE_URL}/usercomplaint`, formdata)
            .then(result => {
                console.log('Complaint submitted successfully:', result);
                message.success("Complaint Registered successfully");

                // Reset form fields
                setname('');
                setmobile('');
                setcity('');
                setarea('');
                setlandmark('');
                setmessage('');
                setfile(null);
                // setemail(''); // Don't reset if it's pre-filled from login
            })
            .catch(err => {
                console.log('Error submitting complaint:', err);
                message.error("Complaint not Registered");
            });
    };

    return (
        <div>
            <div className="complaint-form-container">
                <div className="complaint-heading">
                    <h1>User Complaint Form</h1>
                </div>

                <div className="form">
                    <form method="POST" onSubmit={handleform}>
                        <div className="input-field1">
                            <label>Name</label>
                            <input type="text" onChange={(e) => setname(e.target.value)} value={name} name="name" />
                        </div>

                        <div className="input-field1">
                            <label>Mobile</label>
                            <input type="text" onChange={(e) => setmobile(e.target.value)} value={mobile} name="mobile" />
                        </div>

                        <div className="input-field1">
                            <label>City</label>
                            <input type="text" onChange={(e) => setcity(e.target.value)} value={city} name="city" />
                        </div>

                        <div className="input-field1">
                            <label>Email</label>
                            <input type="text" value={email} readOnly name="email" />
                        </div>

                        <div className="input-field1">
                            <label>Area</label>
                            <input type="text" onChange={(e) => setarea(e.target.value)} value={area} name="area" />
                        </div>

                        <div className="input-field1">
                            <label>Landmark</label>
                            <input type="text" onChange={(e) => setlandmark(e.target.value)} value={landmark} name="landmark" />
                        </div>

                        <div className="input-field1">
                            <label>Please Upload Photos like roads, street light etc</label>
                            <input type="file" onChange={(e) => setfile(e.target.files[0])} />
                        </div>

                        <div className="input-field1">
                            <label>Mention Your Problem</label>
                            <textarea onChange={(e) => setmessage(e.target.value)} value={messageText} name="message"></textarea>
                        </div>

                        <div className="btn">
                            <button type="submit">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserComplaint;
