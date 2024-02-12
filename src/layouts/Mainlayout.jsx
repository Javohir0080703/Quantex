import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const MainLayout = () => {
  const location = useLocation()
  let home = location.pathname === '/balance'
  let information = location.pathname === '/information'
  const allpages = [information, home].some(Boolean);
  
  return (
    <>
      {!allpages && <Header />}
      <main>
        <Outlet />
      </main>
      {!allpages && <Footer />}
    </>
  )
}

export default MainLayout