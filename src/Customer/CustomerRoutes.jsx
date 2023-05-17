import React from 'react'
import SideBar from './SideBar'
import { Routes, Route } from "react-router-dom";
import Navbar from '../components/Navbar/Navbar';
import CustomerDashboard from '../Pages/CustomerDashboard';
import ViewOrderTable from '../components/Table/ViewOrdersTable';

function SideBarRoutes() {

  const routes = [
    {
      path: '/',
      element: <CustomerDashboard />
    },
    {
      path: '/view_orders',
      element: <ViewOrderTable />
    },
  ]
  
  return (
    <>
      <SideBar>
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </SideBar>
    </>
  )
}
export default SideBarRoutes