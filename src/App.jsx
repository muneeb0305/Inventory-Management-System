import React, { useEffect, useState } from 'react'
import Admin from './Admin/SideBarRoutes'
import Customer from './Customer/SideBarRoutes'
import Layout from './Login/Layout'

function App() {
  const token = JSON.parse(localStorage.getItem('token'));
  const userRole = JSON.parse(localStorage.getItem('User'));

  if (token && userRole === 'Admin') {
    return <Admin />;
  } else if (token && userRole === 'Customer') {
    return <Customer />;
  } else {
    return <Layout />;
  }
}

export default App