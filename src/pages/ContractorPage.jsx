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
        </div>
    )
}

export default ContractorPage