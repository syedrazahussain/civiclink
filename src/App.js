import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import UserLoginPage from './pages/UserLoginPage'
import AdminLoginPage from './pages/AdminLoginPage'
import WorkerLoginPage from './pages/WorkerLoginPage'
import UserPage from './pages/UserPage'
import UserComplaint from './pages/UserComplaint'
import RegisterUser from './pages/RegisterUser'
import AdminPage from './pages/AdminPage'
import CreateContract from './pages/CreateContract'
import ContractorPage from './pages/ContractorPage'
import MyComplaints from './pages/MyComplaints'
import Navbar from './Components/Navbar'
import ProtectedRoute from './Components/ProtectedRoute'
import PublicRoute from './Components/PublicRoute'
import RegisterAdmin from './pages/RegisterAdmin'
import ViewComplaints from './pages/ViewComplaints'
import AllUsersData from './pages/AllUsersData'
import UpdateContractList from './pages/UpdateContractList'
import Updateformcontract from './pages/Updateformcontract'
import Myworkscontractor from './pages/Myworkscontractor'
import Reportwork from './pages/Reportwork'
import MyProfille from './pages/MyProfille'




const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>

        <Route path='/' element={
          <PublicRoute><Home /></PublicRoute>} />
        <Route path='/userloginpage' element={
          <PublicRoute><UserLoginPage /></PublicRoute>} />
        <Route path='/adminloginpage' element={<AdminLoginPage />} />
        <Route path='/workerloginpage' element={<WorkerLoginPage />} />
        <Route path='/userpage' element={
          <ProtectedRoute><UserPage /></ProtectedRoute>
        } />
        <Route path='/usercomplaint' element={<UserComplaint />} />
        <Route path='/registeruser' element={
          <PublicRoute><RegisterUser /></PublicRoute>} />
        <Route path='/adminpage' element={<AdminPage />} />
        <Route path='/createcontract' element={<CreateContract />} />
        <Route path='/contractorpage' element={<ContractorPage />} />
        <Route path='/mycomplaints' element={<MyComplaints />} />
        <Route path='/registeradmin' element={<RegisterAdmin />} />
        <Route path='/viewcomplaints' element={<ViewComplaints />} />
        <Route path='/allusersdata' element={<AllUsersData />} />
        <Route path='/updatecontractlist' element={<UpdateContractList />} />
        <Route path='/updateformcontract' element={<Updateformcontract />} />
        <Route path="/updateformcontract/:contractorId" element={<Updateformcontract />} />
        <Route path='/myworkscontractor' element={<Myworkscontractor />} />
        <Route path='/reportwork' element={<Reportwork />} />
        <Route path='/myprofile' element={<MyProfille />} />

        
        



      </Routes>

    </div>
  )
}

export default App
