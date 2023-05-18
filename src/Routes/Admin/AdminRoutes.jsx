import React from 'react';
import SideBar from '../../components/Sidebar/SideBar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../../Pages/Dashboard';
import Navbar from '../../components/Navbar/Navbar';
import OrderDetails from '../../Pages/OrderDetails';
import SaleDetails from '../../Pages/SaleDetails';
import Inventory from '../../Pages/Inventory';
import Additem from '../../Pages/Additem';
import ViewItem from '../../Pages/ViewItem';
import OrderForm from '../../Pages/OrderForm';
import { adminMenu } from '../../data/Menu';

const routes = [
  { 
    path: '/', 
    element: <Dashboard /> 
  },
  { 
    path: '/Order_Details', 
    element: <OrderDetails /> 
  },
  { 
    path: 'Order_Details/update_order/:id', 
    element: <OrderForm /> 
  },
  { 
    path: 'update_order/:id', 
    element: <OrderForm /> 
  },
  { 
    path: '/Sale_Details', 
    element: <SaleDetails /> 
  },
  { 
    path: '/Inventory', 
    element: <Inventory /> 
  },
  { 
    path: '/Inventory/Add_Item', 
    element: <Additem /> 
  },
  { 
    path: '/Inventory/update_Item/:id', 
    element: <Additem /> 
  },
  { 
    path: '/Inventory/:id', 
    element: <ViewItem /> 
  },
];

function AdminRoutes() {
  return (
    <>
      <SideBar Menus={adminMenu}>
        <Navbar />
        <Routes>
          {routes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
        </Routes>
      </SideBar>
    </>
  );
}

export default AdminRoutes;
