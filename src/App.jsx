import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import SideBarRoutes from './components/Sidebar/SideBarRoutes'

function App() {
  return (
    <>
    <Routes>
    <Route  path="/"  element={<Login/>}></Route>
    </Routes>
        <SideBarRoutes/> 

    </>
  )
}

export default App