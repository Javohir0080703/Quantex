import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import balanceimg from '../img/balance.svg'
import information from '../img/information.svg'
import logout from '../img/logout.svg'
import Dashboard from '../img/Dashboard.png'
import infohover from '../img/info-circle.png'
const BalanceHeader = () => {
    const location = useLocation()
    const balance = location.pathname === '/balance'
    const informationLocation = location.pathname === '/information'
    return (
        <section className=''>
    <div className='pl-8 pt-[46px] bg-[#081219] h-full w-full max-w-[264px] min-h-[100vh] fixed top-0 left-0'>
        <Link to="/" className={`text-white text-[22px] font-semibold`} >Quantex</Link>
          <Link to="/balance" className={`flex  items-center mt-[87px]`} >
            <img src={ `${balance ? balanceimg : Dashboard}` } alt="" />
            <p className={`${balance ? "text-white " : "text-[#747474]"} ml-6 text-[17px] font-medium`}>Balance</p>
          </Link>
          <Link to="/information" className={`flex  items-center mt-[33px] mb-[420px]`} >
            <img src={`${informationLocation ? infohover : information }`} alt="" />
            <p className={`${informationLocation ? "text-white " : "text-[#747474]"} ml-6 text-[17px] font-medium`}>Information</p>
          </Link>
          <Link to="/" className='flex items-center'>
           <img src={logout} alt="logout" />
           <p className='ml-6 text-[#747474] text-base font-medium'>Log out</p>
          </Link>
    </div>
        </section>
      )
}

export default BalanceHeader