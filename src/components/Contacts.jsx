import React from 'react'
import { components } from '../styles.js'
import email from '../img/mail.svg'
import brouzer from '../img/brauzer.svg'
import { Link } from 'react-router-dom'
const Contacts = () => {
  return (
    <section className='bg-#030D14 bg-contact-bg py-[208px] '>
        <div className={`${components.containerb}`}>
          <div className='flex items-center mb-[18px] w-full max-w-[200px] aaa:max-w-[355px]  mx-auto'>
            <img src={email} alt="" />
            <p className='text-white text-lg aaa:text-4xl ml-4'>info@quantex.com</p>
           </div>
           <div className='flex items-center w-full aaa:max-w-[260px] max-w-[170px] mx-auto mb-[18px] '>
            <img src={brouzer} alt="" />
            <p className='text-white text-lg aaa:text-4xl ml-4'>quantex.com</p>
           </div>
           <Link to="/login" className='aaa:py-5 py-3 px-14 aaa:px-20 text-center bg-#56AB91 rounded-lg text-white text-sm aaa:text-[20px] font-semibold w-full max-w-[200px] aaa:max-w-[340px] mx-auto block '>Contact Us</Link>
          
        </div>
    </section>
  )
}

export default Contacts