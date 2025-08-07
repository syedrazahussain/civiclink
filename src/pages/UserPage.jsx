import React from 'react'
import '../pages/userpage.css'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';


const UserPage = () => {
    const navigate =useNavigate();
    const getuserdata = async() =>{
        try {
            const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/user/getUserData`,{},{
                headers:{
                    Authorization: " Bearer " + localStorage.getItem('token')
                }
            })
        } catch (error) {
            console.log(error)
            
        }
    }

    useEffect(() =>{
        getuserdata()
    },[])
    return (
        <div>
            <div className="user-container">
                <div className="user-heading">
                    <h1>User Home</h1>
                </div>

                <div className="cards-container">
                   <div className="card" onClick={()=>navigate('/usercomplaint')}>
                        <img src="./assets/new-complaint.png" height={100} width={100} />
                        <p>New Complaint</p>
                    </div>

                    <div className="card" onClick={()=>navigate('/mycomplaints')}>
                    <img src="./assets/mycomplaints.png" height={100} width={100} />
                        <p>My Complaints</p>
                    </div>

                    <div className="card" onClick={()=>navigate('/myprofile')}>
                    <img src="./assets/myprofile.png" height={100} width={100} />
                        <p>My Profile</p>
                    </div>

                </div>
            </div>

            <div className="user-footer">
                <div className="home" onClick={()=>{navigate('/')}}>
                    <p>Home</p>
                    
                </div>

                <div className="logout"onClick={()=>{
                    localStorage.removeItem('token');
                    localStorage.removeItem('Email');
                    navigate('/')

                }}>
                    <p>Logout</p>
                </div>
            </div>

        </div>
    )
}

export default UserPage
