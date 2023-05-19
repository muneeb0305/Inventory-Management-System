import React from 'react';
import SideBar from '../components/Sidebar/SideBar';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';
import Navbar from '../components/Navbar/Navbar';
import OrderDetails from '../Pages/OrderDetails';
import SaleDetails from '../Pages/SaleDetails';
import Inventory from '../Pages/Inventory';
import Additem from '../Pages/Additem';
import ViewItem from '../Pages/ViewItem';
import OrderForm from '../Pages/OrderForm';
import { adminMenu, customerMenu } from '../data/Menu';
import CustomerDashboard from '../Pages/CustomerDashboard';
import ViewOrderTable from '../components/Table/ViewOrdersTable';

const routes = [
  {
    path: '/',
    element: <Dashboard />,
    isAdmin: true
  },
  {
    path: '/Order_Details',
    element: <OrderDetails />,
    isAdmin: true
  },
  {
    path: 'Order_Details/update_order/:id',
    element: <OrderForm />,
    isAdmin: true
  },
  {
    path: 'update_order/:id',
    element: <OrderForm />,
    isAdmin: true
  },
  {
    path: '/Sale_Details',
    element: <SaleDetails />,
    isAdmin: true
  },
  {
    path: '/Inventory',
    element: <Inventory />,
    isAdmin: true
  },
  {
    path: '/Inventory/Add_Item',
    element: <Additem />,
    isAdmin: true
  },
  {
    path: '/Inventory/update_Item/:id',
    element: <Additem />,
    isAdmin: true
  },
  {
    path: '/Inventory/:id',
    element: <ViewItem />,
    isAdmin: true
  },
  {
    path: '/',
    element: <CustomerDashboard />,
    isAdmin: false
  },
  {
    path: '/view_orders',
    element: <ViewOrderTable />,
    isAdmin: false
  },
];

function AppRoutes({ role }) {
  return (
    <>
      <SideBar Menus={role === 'Admin' ? adminMenu : customerMenu}>
          <Navbar />
        <Routes>
          {
            routes.map((route, index) => {
              if (role === 'Admin' && route.isAdmin) {
                return (
                  <Route key={index} path={route.path} element={route.element} />
                );
              } else if (role !== 'Admin' && !route.isAdmin) {
                return (
                  <Route key={index} path={route.path} element={route.element} />
                );
              }
              return null;
            })
          }
        </Routes>
      </SideBar>
    </>
  );
}

export default AppRoutes;
