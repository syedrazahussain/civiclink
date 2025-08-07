import React, { useState } from 'react'
import '../pages/userloginpage.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {message} from "antd";

const UserLoginPage = () => {

    const navigate = useNavigate();

    const [name, setname] = useState()
    const [email, setemail] = useState()
    const [phone, setphone] = useState()
    const [password, setpassword] = useState()
    const [confirmpassword, setconfirmpassword] = useState()
   const handleForm =async(e) =>{
        e.preventDefault()
        // axios.post('http://localhost:5013/registeruser',{name,email,phone,password,confirmpassword        })
        // .then(result => {console.log(result)
        //     navigate('/UserLoginPage')
        // })
        // .catch(err => console.log(err))
        // console.log('Form Data:', {
        //     name,
        //     email,
        //     phone,
        //     password,
        //     confirmpassword
        // });

        try {
            const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/user/register`,{name,email,phone,password,confirmpassword})
            if(res.data.success){
                message.success('Register Successfully')
                navigate('/userloginpage')

            }else{
                message.error(res.data.message);
            }
        } catch (error) {
            console.log(error)
            message.error('something wents wrong')
            
        }


    };
    return (
        <div>
            <div className="Login-container">

                <div className="login">
                    <div className="login-logo">
                        <img src="./assets/login.png" height={100} width={100} />

                    </div>
                    <div className="login-type">
                        <p>User </p>
                    </div>
                    <form onSubmit={handleForm}>
                        <div className="input-field">
                            <div className="input-content">
                                <label>Name:</label>
                                <input type="text" name='name' onChange={(e) => setname(e.target.value)} />
                            </div>


                        </div>

                        <div className="input-field">
                            <div className="input-content">
                                <label>Email:</label>
                                <input type="text"  name='email' onChange={(e) => setemail(e.target.value)} />
                            </div>


                        </div>

                        <div className="input-field">
                            <div className="input-content">
                                <label>Phone:</label>
                                <input type="text" name='phone' onChange={(e) => setphone(e.target.value)} />
                            </div>


                        </div>


                        <div className="input-field">
                            <div className="input-content">
                                <label>Password:</label>
                                <input type="text" name='password' onChange={(e) => setpassword(e.target.value)}/>
                            </div>
                        </div>

                        <div className="input-field">
                            <div className="input-content">
                                <label>Confirm Password:</label>
                                <input type="text" name='confirmpassword' onChange={(e) => setconfirmpassword(e.target.value)}/>
                            </div>
                        </div>


                        <div className="login-btn">
                            <button type='submit'>Register</button>
                        </div>
                    </form>
                    <div className="signup">
                        <p> I have account <Link to="/UserLoginPage">Login </Link> </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default UserLoginPage