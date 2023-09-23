import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom'


export default function Layout(increaseCount) {
  console.log(increaseCount);
  return (
    <div>
      <Navbar  increaseCount/>
      <Outlet />
      <Footer />
    </div>
  )
}

