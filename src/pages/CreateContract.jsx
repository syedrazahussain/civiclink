import React, { useState } from 'react'
import '../pages/createcontract.css'
import axios from 'axios';
import message from 'antd/es/message'; 

const CreateContract = () => {
    const [name, setname] = useState('');
    const [mobile, setmobile] = useState('');
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
    const [city, setcity] = useState('');
    const [area, setarea] = useState('');
    const [department, setdepartment] = useState('')
    const [landmark, setlandmark] = useState('');
    const [messageText, setmessage] = useState('');

    const handleform = (e) => {
        e.preventDefault();
        const data = {
            name,
            mobile,
            email,
            password,
            city,
            area,
            department,
            landmark,
            message: messageText
        };
    
        axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/admin/createcontractor`, data)
            .then(result => {
                console.log('Contractor created successfully:', result);
                message.success("Contractor created successfully")
                setname('');
                setmobile('');
                setcity('');
                setarea('');
                setlandmark('');
                setmessage('');
                setemail('');
                setdepartment('');
                setpassword('');
            })
            .catch(err => {
                console.log('Error while creating contractor:', err);
                message.error("contractor is not created")
            });
    };
    

    return (
        <div>
            <div className="complaint-form-container">
                <div className="complaint-heading">
                    <h1>Create Contractor</h1>
                </div>

                <div className="form">
                    <form method='POST' onSubmit={handleform}>
                        <div className="input-field1">
                            <label>Contractor Name</label>
                            <input type="text" onChange={(e) => setname(e.target.value)} value={name} name="name" />
                        </div>

                        <div className="input-field1">
                            <label>Contractor Mobile</label>
                            <input type="text" onChange={(e) => setmobile(e.target.value)} value={mobile} name="mobile" />
                        </div>

                        <div className="input-field1">
                            <label>Contractor Email</label>
                            <input type="text" onChange={(e) => setemail(e.target.value)} value={email} name="email" />
                        </div>

                        <div className="input-field1">
                            <label>Set Password:</label>
                            <input type="text" onChange={(e) => setpassword(e.target.value)} value={password} name="password" />
                        </div>

                        <div className="input-field1">
                            <label>City</label>
                            <input type="text" onChange={(e) => setcity(e.target.value)} value={city} name="city" />
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
                            <label>Department</label>
                            <select onChange={(e) => setdepartment(e.target.value)} value={department} name="department" >
                                <option>Select Department</option>
                                <option>Public works Department (PWD)</option>
                                <option>Drainage Department</option>
                                <option>Electrical Department</option>
                                <option>Garbage Waste Management Department</option>
                                <option>Water Supply Department</option>
                            </select>
                        </div>

                        <div className="input-field1">
                            <label>Message</label>
                            <textarea onChange={(e) => setmessage(e.target.value)} value={messageText} name="message"></textarea>
                        </div>

                        <div className="btn">
                            <button type='submit'>Submit</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateContract