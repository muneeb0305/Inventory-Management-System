import React from 'react'
import SideBar from './SideBar'
import { Routes, Route } from "react-router-dom";
import Dashboard from '../../Pages/Dashboard'
import Navbar from '../Navbar/Navbar';
import OrderDetails from '../../Pages/OrderDetails';
import SaleDetails from '../../Pages/SaleDetails';
import RecentOrderData from '../../data/RecentOrderData';
import SaleByCityData from '../../data/SaleByCityData';
import Inventory from '../../Pages/Inventory';
import Additem from '../../Pages/Additem';
import ViewItem from '../../Pages/ViewItem';
function SideBarRoutes() {
  return (
    <>
      <SideBar>
        <Navbar />
        <Routes>
          <Route path="/Dashboard" element={<Dashboard tableData={RecentOrderData} />} />
          <Route path="/Order_Details" element={<OrderDetails />} />
          <Route path="/Sale_Details" element={<SaleDetails tableData={SaleByCityData} />} />
          <Route path="/Inventory" element={<Inventory />} />
          <Route path="/Inventory/Add_Item" element={<Additem />} />
          <Route path="/Inventory/update_Item/:id" element={<Additem />} />
          <Route path="/Inventory/:id" element={<ViewItem />} />
        </Routes>
      </SideBar>
    </>
  )
}
export default SideBarRoutes