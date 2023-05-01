import React from 'react'
import SideBar from './SideBar'
import { Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import CustomerDashboard from '../Pages/CustomerDashboard';
function SideBarRoutes() {
  return (
    <>
      <SideBar>
        <Navbar />
        <Routes>
          <Route path="/" element={<CustomerDashboard/>} />
        </Routes>
      </SideBar>
    </>
  )
}
export default SideBarRoutes