import React from 'react'
import { components } from '../styles.js'
import { Link } from 'react-router-dom'
import discord from '../img/Discord.png'
import telegram from '../img/Telegram.png'
import youtube from '../img/YouTube.png' 
import youtubex from '../img/YouTubex.png' 
const Footer = () => {
  return (
    <section className='bg-#051018 py-9 '>
        <div className={`${components.containerb} block sm:flex items-center justify-between space-y-5 sm:space-y-0`}>
             <Link className='text-white text-[22px] font-semibold text-center block' to="/">
             Quantex
             </Link>
             <p className='text-0.25 text-sm font-medium text-center'>© 2023 Quantex. All rights reserved</p>
             <div className='space-x-2 flex items-center mx-auto sm:mx-0 w-full max-w-[216px]'>
                  <img src={discord} alt="discord" />
                  <img src={telegram} alt="telegram" />
                  <img src={youtube} alt="youtube" />
                  <img src={youtubex} alt="youtubex" />
             </div>
        </div>
    </section>
  )
}

export default Footer