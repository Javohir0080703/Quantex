import React, { useState } from 'react'
import { components } from '../styles.js'
import { Link } from 'react-router-dom';
const LogIn = () => {
  const [change, setChange] = useState('');
  const Changef = () => {
      setChange(alert("Система временна недоступно"));
    };
  return (
    <section className='py-[98px] bg-contact-bg bg-#030D14'>
        <div className={`${components.containerb}`}>
           <div className='py-6 px-6 bg-header w-[404px] rounded-2xl mx-auto'>
              <h1 className='text-white text-2xl font-medium leading-[21.6px] mb-6'>Welcome to Quantex</h1>
              <form>
                <label className='text-sm text-white leading-[22.75px] '>Email</label>
                <input className='pl-4 py-4 w-[356px] text-white text-base rounded-xl mt-1 mb-6  bg-#101920' type="email" placeholder='Enter your email address' />
                <label className='text-sm text-white leading-[22.75px] '>Password</label>
                <input className='pl-4 py-4 w-[356px] text-white text-base rounded-xl mt-1  bg-#101920' type="password" placeholder='Enter your password' />
              </form>

              <p onClick={Changef} className='items-stretch  text-#56AB91 text-sm hover:cursor-grab my-6'>Forgot Password?</p>
              <Link to="/balance" className='py-4 text-center px-8 bg-#56AB91 w-[356px] block rounded-xl text-base  text-white font-medium mb-4'>Log In</Link>
              <Link to="/signin" className='text-center py-4 px-8 bg-#101920 w-[356px] block rounded-xl text-base  text-white font-medium'>Sign Up</Link>

           </div>
        </div>
    </section>
  )
}

export default LogIn