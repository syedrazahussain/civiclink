import React from 'react'
import '../pages/contractorpage.css'
import { useNavigate } from 'react-router-dom'


const ContractorPage = () => {

    const navigate = useNavigate();
    return (
        <div>

            <div className="contractor-container">
                <div className="contractor-heading">
                    <h1>Contractor Home</h1>
                </div>

                <div className="contractor-cards-container">
                    <div className="contractor-card" onClick={()=> navigate('/Myworkscontractor')}>
                        <img src="./assets/work.png" height={100} width={100}/>
                        <p>My Contract Works</p>
                    </div>
                </div>
            </div>

             <div className="user-footer">
                <div className="home" onClick={()=>{navigate('/')}}>
                    <p>Home</p>
                    
                </div>

                <div className="logout"onClick={()=>{
                    localStorage.removeItem('contracttoken');
                    localStorage.removeItem('userEmail');
                    localStorage.removeItem('userId');
                    navigate('/')

                }}>
                    <p>Logout</p>
                </div>
            </div>
        </div>
    )
}

export default ContractorPage