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
              <h1 className='text-white text-2xl font-medium leading-[21.6px] mb-6'>Sign Up to Quantex</h1>
              <form>
                <label className='text-sm text-white leading-[22.75px] '>First Name</label>
                <input className='pl-4 py-4 w-[356px] text-white text-base rounded-xl mt-1 mb-6  bg-#101920' type="text" placeholder='John' />
                <label className='text-sm text-white leading-[22.75px] '>Last Name</label>
                <input className='pl-4 py-4 w-[356px] text-white text-base rounded-xl mt-1  bg-#101920 mb-6' type="text" placeholder='Wood' />
                <label className='text-sm text-white leading-[22.75px] '>Email</label>
                <input className='pl-4 py-4 w-[356px] text-white text-base rounded-xl mt-1 mb-6  bg-#101920' type="email" placeholder='johnwood@mail.com' />
                <label className='text-sm text-white leading-[22.75px] '>Password</label>
                <input className='pl-4 py-4 w-[356px] text-white text-base rounded-xl mt-1  bg-#101920' type="password" placeholder='Enter your password' />
              </form>

             <p className='text-sm text-[#F7F7FF] my-6'>
             By selecting “Open free account" button, you agree to our 
             <span onClick={Changef} className='items-stretch  text-#56AB91 text-sm hover:cursor-grab  mx-1'>Terms of Service</span>
             </p>
              <button onClick={Changef} className='py-4 px-8 bg-#56AB91 w-[356px] block rounded-xl text-base  text-white font-medium mb-4'>Open Free Account</button>
              <Link to="/login"  className='py-4 px-8 bg-#101920 text-center w-[356px] block rounded-xl text-base  text-white font-medium'>Log In</Link>

           </div>
        </div>
    </section>
  )
}

export default LogIn