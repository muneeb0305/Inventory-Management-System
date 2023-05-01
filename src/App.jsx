import React, { useEffect, useState } from 'react'
import Admin from './Admin/SideBarRoutes'
import Customer from './Customer/SideBarRoutes'
import Layout from './Login/Layout'

function App() {
  const [Token, setToken] = useState()
  const [Role, setRole] = useState()
  useEffect(() => {
    setToken(JSON.parse(localStorage.getItem('token')))
    setRole(JSON.parse(localStorage.getItem('User')))
  }, [Token, Role])

  if (Token) {
    if (Role === "Admin") {
      return <Admin />
    }
    else {
      return <Customer />

    }
  }
  else if (!Token) {
    return (
      <Layout/>
    );
  }
}

export default App