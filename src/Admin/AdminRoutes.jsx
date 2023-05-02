import React from 'react'
import SideBar from './SideBar'
import { Routes, Route } from "react-router-dom";
import Dashboard from '../Pages/Dashboard'
import Navbar from '../components/Navbar/Navbar';
import OrderDetails from '../Pages/OrderDetails';
import SaleDetails from '../Pages/SaleDetails';
import Inventory from '../Pages/Inventory';
import Additem from '../Pages/Additem';
import ViewItem from '../Pages/ViewItem';
import OrderForm from '../Pages/OrderForm';
function SideBarRoutes() {
  return (
    <>
      <SideBar>
        <Navbar />
        <Routes >
          <Route path="/" element={<Dashboard/>} />
          <Route path="/Order_Details" element={<OrderDetails />} />
          <Route path="/Order_Details/update_order/:id" element={<OrderForm />} />
          <Route path="/Sale_Details" element={<SaleDetails/>} />
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