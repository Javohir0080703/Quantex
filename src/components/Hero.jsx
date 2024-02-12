import React, { useState } from 'react'
import { components } from '../styles.js'
const Hero = () => {
    const [change, setChange] = useState('');
    const Changef = () => {
        setChange(alert("Система временна недоступно"));
      };
  return (
    <section className='bg-contact-bg bg-#030D14 pt-[35px] pb-16'>
        <div className={`${components.containerb}`}>
              <h1 className='text-center md:text-[72px] sm:text-[55px] text-[40px]   leading-[50px] sm:leading-[66px] font-bold text-white mb-6'>The best way to predict <br className='hidden sm:block'/> <span className='text-#56AB91'>the future is to create it</span></h1>
              <p className='text-white text-center text-[20px] mb-6 '><span className='py-1 px-2 rounded-lg font-semibold bg-[#fff]/10'>We present QuantEx</span>   - a unique project that combines artificial <br /> intelligence and cryptocurrency exchanges. Our mission is automated <br /> trading in the cryptocurrency markets with stable profits.</p>
              <button onClick={Changef} className='block mx-auto w-[280px] py-5 px-[62px] bg-#56AB91 rounded-lg text-white text-[20px] font-semibold relative'>
              Start using bot
              <span className='w-[142px] top-[58px] left-[62px]  py-1 px-3 text-center block  bg-#051016 rounded-[37px] text-white text-sm absolute'>7 Days Free Trial</span>
              </button>
        </div>
    </section>
  )
}

export default Hero