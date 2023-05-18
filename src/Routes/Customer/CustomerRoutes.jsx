import React from 'react'
import SideBar from '../../components/Sidebar/SideBar'
import { Routes, Route } from "react-router-dom";
import Navbar from '../../components/Navbar/Navbar';
import CustomerDashboard from '../../Pages/CustomerDashboard';
import ViewOrderTable from '../../components/Table/ViewOrdersTable';
import { customerMenu } from '../../data/Menu';

function CustomerRoutes() {

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
      <SideBar Menus={customerMenu}>
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
export default CustomerRoutes