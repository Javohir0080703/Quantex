import React from 'react'
import { components } from '../styles.js'
import chart from '../img/TradingChartWork.png'
const HowWork = () => {
  return (
    <section className='py-[110px] bg-contact-bg bg-#030D14'>
        <div className={`${components.containerb} block lg:flex items-center justify-evenly`}>
        <div>
            <h2 className='2xl:text-[144px] text-center lg:text-left sss:text-[120px] tabletmax:text-[90px] text-[65px]  sss:leading-[100px] leading-[75px]  2xl:leading-[132px] text-white font-bold mb-[18px]'>
            How work <br />
                <span className='text-#56AB91'>Quantex</span>
            </h2>
            <p className='text-white text-center lg:text-left text-lg mb-[18px]'>
                <span className='font-semibold'>From powerful trading bots to smart orders.</span> <br />
                Quantex gives you an advantage in the fast-changing world of crypto trading.
            </p>
            <button className='py-[16px] px-8 bg-#56AB91 rounded-lg text-white text-sm font-semibold w-full max-w-[180px] mx-auto block lg:mx-0'>
            Start Using Bot
            </button>
        </div>
         <img  className='w-full  lg:max-w-[640px] sss:max-w-[717px] ' src={chart} alt="" />
        </div>
    </section>
  )
}

export default HowWork