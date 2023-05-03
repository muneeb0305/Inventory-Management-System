import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './Login'
import Registration from './Registrations'

export default function Layout() {

  return (
    <div>
      <Routes>
        <Route path="/*" element={<LoginPage/>}></Route>
        <Route path="/registration" element={<Registration />}></Route>
      </Routes>
    </div>
  )
}