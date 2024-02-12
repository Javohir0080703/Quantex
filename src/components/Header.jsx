import React, { useState } from 'react'
import { components } from '../styles.js'
import home from '../img/home.png'
import archive from '../img/archive.svg'
import info from '../img/info-circle.svg'
import command from '../img/command.svg'
import sms from '../img/sms.svg'
import { Link } from 'react-router-dom'
import fleg from '../img/artwork.png'
import iks from '../img/2222.jpg'
const Header = () => {
  const [closeModal, setCloseModal] = useState(false)
  const handleopen = () => {
    setCloseModal(true)
  }
  const handleClose = () => {
    setCloseModal(false)
  }

  return (
    <header className='bg-tabb py-[15px] bg-#030D14'>
      <div className={`${components.containerb} max-w-[1240px] xl:max-w-[1440px] w-full`}>
        <div className='bg-header py-[31px] px-5 rounded-2xl flex items-center justify-between   '>
          <Link to="/" className='text-white text-[22px] font-semibold'>
            Quantex
          </Link>
          <nav className='tabletmax:block hidden'>
            <ul className='space-x-4 lg:space-x-8 flex items-center'>
              <li>
                <Link className='flex items-center ' to="/">
                  <img className='mr-2' src={home} alt="" />
                  <p className='text-white text-sm font-medium '>Home Page</p>
                </Link>
              </li>
              <li>
                <Link className='flex items-center ' to="/news">
                  <img className='mr-2' src={archive} alt="" />
                  <p className='text-white text-sm font-medium '>News</p>
                </Link>
              </li>
              <li>
                <Link className='flex items-center ' to="/about">
                  <img className='mr-2' src={info} alt="" />
                  <p className='text-white text-sm font-medium '>About Bot</p>
                </Link>
              </li>
              <li>
                <Link className='flex items-center ' to="/work">
                  <img className='mr-2' src={command} alt="" />
                  <p className='text-white text-sm font-medium '>How This Work</p>
                </Link>
              </li>
              <li>
                <Link className='flex items-center ' to="/contacts">
                  <img className='mr-2' src={sms} alt="" />
                  <p className='text-white text-sm font-medium '>Contacts</p>
                </Link>
              </li>
            </ul>
          </nav>

          <div className='tabletmax:block hidden'>
            <div className='  flex items-center space-x-2'>
              <button>
                <img className='p-[5px] rounded-lg bg-[#282626]' src={fleg} alt="" />
              </button>
              <Link to="/login" className='text-white text-sm font-medium py-3 px-6 rounded-lg bg-[#282626] border-[#282626] border hover:border-#56AB91 hover:border'>
                Log In
              </Link>
              <Link to="/signin" className='text-white text-sm font-medium  py-3 px-6 bg-#56AB91 rounded-lg border border-#357B66 hover:bg-[#357B66] hover:border hover:border-[#fff]/50 '>
                Open Free Account
              </Link>
            </div>
          </div>

          <button onClick={handleopen} className=' block tabletmax:hidden '>
            <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 16 16" fill="none">
              <path d="M1 8H13" stroke="#fff" stroke-width="1.8" />
              <path d="M1 12H13" stroke="#fff" stroke-width="1.8" />
              <path d="M1 4H13" stroke="#fff" stroke-width="1.8" />
            </svg>
          </button>
        </div>
      </div>

     {
      closeModal && (
        <div className='bg-#030D14 z-50 w-[100vw] h-[100vh]  fixed top-0 px-14 py-6 tabletmax:hidden '> 
        <div className='flex items-center justify-between mb-14'>
          <Link to="/" className='text-white text-[32px] font-semibold'>
            Quantex
          </Link>
          <button onClick={handleClose}>
            <img className='w-10 ' src={iks} alt="" />
          </button>
        </div>
        <div>
          <nav className='w-full max-w-[210px] mx-auto mb-10'>
            <ul className='space-y-7 '>
              <li className='w-full max-w-[170px] mx-auto' >
                <Link onClick={handleClose} className='flex items-center ' to="/">
                  <img className='mr-2 w-7' src={home} alt="" />
                  <p className='text-white text-2xl font-medium'>Home Page</p>
                </Link>
              </li>
              <li className='w-full max-w-[100px] mx-auto'>
                <Link onClick={handleClose} className='flex items-center ' to="/news">
                  <img className='mr-2 w-7' src={archive} alt="" />
                  <p className='text-white text-2xl font-medium'>News</p>
                </Link>
              </li>
              <li className='w-full max-w-[150px] mx-auto'>
                <Link onClick={handleClose} className='flex items-center ' to="/about">
                  <img className='mr-2 w-7' src={info} alt="" />
                  <p className='text-white text-2xl font-medium '>About Bot</p>
                </Link>
              </li>
              <li className='w-full max-w-[200px] mx-auto'>
                <Link onClick={handleClose} className='flex items-center ' to="/work">
                  <img className='mr-2 w-7' src={command} alt="" />
                  <p className='text-white text-2xl font-medium '>How This Work</p>
                </Link>
              </li>
              <li className='w-full max-w-[130px] mx-auto'>
                <Link onClick={handleClose} className='flex items-center ' to="/contacts">
                  <img className='mr-2 w-7' src={sms} alt="" />
                  <p className='text-white text-2xl font-medium '>Contacts</p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        <button onClick={closeModal} className='w-full max-w-[50px] mx-auto block mb-5'>
          <img className='p-[5px] rounded-lg bg-[#282626]' src={fleg} alt="" />
        </button> 
        <Link onClick={handleClose} to="/login" className='text-white mx-auto block text-center w-full mb-8 max-w-[120px] text-sm font-medium py-3 px-6 rounded-lg bg-[#282626] border-[#282626] border hover:border-#56AB91 hover:border'>
          Log In
        </Link>
        <Link onClick={handleClose} to="/signin" className='text-white mx-auto block text-center w-full max-w-[180px] text-sm font-medium  py-3 px-6 bg-#56AB91 rounded-lg border border-#357B66 hover:bg-[#357B66] hover:border hover:border-[#fff]/50 '>
          Open Free Account
        </Link>
        
      </div>
      )
     }
    </header>
  )
}

export default Header