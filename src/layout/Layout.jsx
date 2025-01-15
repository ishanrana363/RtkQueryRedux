import React from 'react'
import NavBar from '../components/navbar/NavBar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  )
}

export default Layout
