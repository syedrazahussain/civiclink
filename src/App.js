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

        {/* Public routes */}
        <Route path='/' element={
          <PublicRoute><Home /></PublicRoute>} />
        <Route path='/userloginpage' element={
          <PublicRoute tokenKey="token" redirectTo="/userpage"><UserLoginPage /></PublicRoute>} />
        <Route path='/adminloginpage' element={
          <PublicRoute tokenKey="admintoken" redirectTo="/adminpage"><AdminLoginPage /></PublicRoute>} />
        <Route path='/workerloginpage' element={
          <PublicRoute tokenKey="contracttoken" redirectTo="/contractorpage"><WorkerLoginPage /></PublicRoute>} />
        <Route path='/registeruser' element={
          <PublicRoute tokenKey="token"><RegisterUser /></PublicRoute>} />
        <Route path='/registeradmin' element={
          <PublicRoute tokenKey="admintoken"><RegisterAdmin /></PublicRoute>} />

        {/* User protected routes */}
        <Route path='/userpage' element={
          <ProtectedRoute tokenKey="token" redirectTo="/userloginpage"><UserPage /></ProtectedRoute>} />
        <Route path='/usercomplaint' element={
          <ProtectedRoute tokenKey="token" redirectTo="/userloginpage"><UserComplaint /></ProtectedRoute>} />
        <Route path='/mycomplaints' element={
          <ProtectedRoute tokenKey="token" redirectTo="/userloginpage"><MyComplaints /></ProtectedRoute>} />
        <Route path='/myprofile' element={
          <ProtectedRoute tokenKey="token" redirectTo="/userloginpage"><MyProfille /></ProtectedRoute>} />

        {/* Admin protected routes */}
        <Route path='/adminpage' element={
          <ProtectedRoute tokenKey="admintoken" redirectTo="/adminloginpage"><AdminPage /></ProtectedRoute>} />
        <Route path='/createcontract' element={
          <ProtectedRoute tokenKey="admintoken" redirectTo="/adminloginpage"><CreateContract /></ProtectedRoute>} />
        <Route path='/viewcomplaints' element={
          <ProtectedRoute tokenKey="admintoken" redirectTo="/adminloginpage"><ViewComplaints /></ProtectedRoute>} />
        <Route path='/allusersdata' element={
          <ProtectedRoute tokenKey="admintoken" redirectTo="/adminloginpage"><AllUsersData /></ProtectedRoute>} />
        <Route path='/updatecontractlist' element={
          <ProtectedRoute tokenKey="admintoken" redirectTo="/adminloginpage"><UpdateContractList /></ProtectedRoute>} />
           <Route path='/reportwork' element={
          <ProtectedRoute tokenKey="admintoken" redirectTo="/adminloginpage"><Reportwork /></ProtectedRoute>} />
          <Route path='/updateformcontract' element={
          <ProtectedRoute tokenKey="admintoken" redirectTo="/adminloginpage"><Updateformcontract /></ProtectedRoute>} />
          <Route path="/updateformcontract/:contractorId" element={
          <ProtectedRoute tokenKey="admintoken" redirectTo="/adminloginpage"><Updateformcontract /></ProtectedRoute>} />

        {/* Contractor protected routes */}
        <Route path='/contractorpage' element={
          <ProtectedRoute tokenKey="contracttoken" redirectTo="/workerloginpage"><ContractorPage /></ProtectedRoute>} />
        <Route path='/myworkscontractor' element={
          <ProtectedRoute tokenKey="contracttoken" redirectTo="/workerloginpage"><Myworkscontractor /></ProtectedRoute>} />
        
        

      </Routes>
    </div>
  )
}

export default App
