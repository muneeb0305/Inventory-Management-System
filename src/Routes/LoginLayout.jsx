import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from '../Pages/Login'
import Registration from '../Pages/Registrations'

export default function Layout() {

  return (
      <Routes>
        <Route path="/*" element={<LoginPage />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Routes>
  )
}
