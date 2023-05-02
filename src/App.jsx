import React from 'react'
import AdminRoutes from './Admin/AdminRoutes'
import Customer from './Customer/CustomerRoutes'
import Layout from './Login/Layout'

function App() {
  const token = JSON.parse(localStorage.getItem('token'));
  const userRole = JSON.parse(localStorage.getItem('User'));

  if (token && userRole === 'Admin') {
    return <AdminRoutes />;
  } else if (token && userRole === 'Customer') {
    return <Customer />;
  } else {
    return <Layout />;
  }
}

export default App