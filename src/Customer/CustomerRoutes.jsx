import React from 'react'
import SideBar from './SideBar'
import { Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import CustomerDashboard from '../Pages/CustomerDashboard';
import ViewOrderTable from '../components/Table/ViewOrdersTable';
function SideBarRoutes() {
  return (
    <>
      <SideBar>
        <Navbar />
        <Routes>
          <Route path="/" element={<CustomerDashboard/>} />
          <Route path="/view_orders" element={<ViewOrderTable/>} />
        </Routes>
      </SideBar>
    </>
  )
}
export default SideBarRoutes