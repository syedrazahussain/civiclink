import React from 'react'
import '../pages/adminpage.css'
import { useNavigate } from 'react-router-dom'


const AdminPage = () => {
    const navigate = useNavigate()

  return (
    <div>
        
        <div className="admin-conatiner">
            <div className="admin-heading">
                <h1>Admin Home</h1>
            </div>

            <div className="admin-cards-container">
                <div className="admin-card" onClick={()=>navigate('/CreateContract')}>
                    <img src="./assets/createcontractor.png"  height={130}width={130}/>
                    <p>Create Contractor</p>
                </div>

                <div className="admin-card" onClick={()=>navigate('/UpdateContractList')} >
                    <img src="./assets/updatecontractor.png"  height={100}width={100}/>
                    <p>Update Contractor</p>
                </div>

                <div className="admin-card" onClick={()=>navigate('/ViewComplaints')}>
                    <img src="./assets/viewcomplaints.png"  height={100}width={100}/>
                    <p>View Complaints</p>
                </div>

                <div className="admin-card" onClick={()=>navigate('/Reportwork')}>
                    <img src="./assets/viewreports.png"  height={130}width={130}/>
                    <p>View Work Reports</p>
                </div>

                <div className="admin-card" onClick={()=>navigate('/AllUsersData')}>
                    <img src="./assets/userdata.png"  height={100}width={100}/>
                    <p>User Data</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AdminPage
