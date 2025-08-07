import React, { useState } from 'react'
import '../pages/userloginpage.css'

import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';


const WorkerLoginPage = () => {
  const navigate= useNavigate();

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const formhandler = async (e) => {
    e.preventDefault();
    try {

      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/api/v1/contract/logincontractor`, { email, password })

      console.log("contractor login success", res.data);

      if (res.data.success) {
        localStorage.setItem('contracttoken', res.data.contracttoken)
        localStorage.setItem('userEmail', email);

        message.success("Contractor login successfully")
        navigate('/contractorpage')

      }
      else {
        message.error(res.data.message);
      }

    } catch (error) {
      console.log(error)
      message.error('Something went Wrong');

    }






  }


  return (
    <div>
      <div className="Login-container">

        <div className="login">
          <div className="login-logo">
            <img src="./assets/worker.png" height={100} width={100} />

          </div>
          <div className="login-type">
            <p>Contractor </p>
          </div>

          <form method="post" onSubmit={formhandler}>
            <div className="input-field">
              <div className="input-content">
                <label>Email:</label>
                <input type="text" name='email' value={email} onChange={(e) => setemail(e.target.value)} />
              </div>


            </div>
            <div className="input-field">
              <div className="input-content">
                <label>Password:</label>
                <input type="text" name='password' value={password} onChange={(e) => setpassword(e.target.value)} />
              </div>
            </div>
            <div className="login-btn">
              <button>Log in</button>
            </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default WorkerLoginPage