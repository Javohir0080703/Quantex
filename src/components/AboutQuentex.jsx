import React from 'react'
import { components } from '../styles.js'
import faqimg from '../img/faqimg.png'

const AboutQuentex = () => {
  return (
    <section className='pt-10 bg-faqimg bg-whidth pb-[82px] sss:bg-contact-bg bg-#030D14'>
        <div className={`${components.containerb} flex items-center`}>
           <img className='w-full hidden xl:block max-w-[672px] h-full max-h-[672px] mr-3' src={faqimg} alt="faqimg" />
           <div className='w-full max-w-[670px] mx-auto sss:mx-0'>
            <h2 className='sm:text-[144px] text-[40px] aaa:text-[70px] ddd:text-[100px] text-center text-white bg-transparent leading-[45px] ddd:leading-[80px] tabletmax:leading-[132px] font-bold mb-5'>
            About <br />
                <span className='text-[#D9D9D9]  '>Quantex</span>
            </h2>
            <p className='w-full text-center max-w-[670px] sm:text-lg text-sm  text-white/[0.50] mb-5'>
                <span className='sm:font-semibold font-medium text-white'>QuantEx promises stable profitability: <br />Daily Yield: 0.2% - 0.8% per day. <br /> Monthly Return: 6% - 24%, which can reach 144% per year.</span><br />
                The development process lasted 10 months, allowing us to carefully configure the bot, eliminate errors and enrich the database. This experience confirms the reliability and success of QuantEx, making it one of the world's best cryptocurrency trading solutions.
            </p>
            <div className='flex items-center justify-center '>
              <button className='text-white text-xs aaa:text-sm font-medium aaa:font-semibold py-[8px] aaa:py-[14px] px-5 aaa:px-8 bg-#56AB91 rounded-lg mr-3'>More Info</button>
              <button className='text-white text-xs aaa:text-sm font-medium aaa:font-semibold py-[8px] aaa:py-[14px] px-5 aaa:px-8 bg-#56AB91 rounded-lg'>How Work Bot</button>
            </div>
           </div>
        </div>
    </section>
  )
}

export default AboutQuentex