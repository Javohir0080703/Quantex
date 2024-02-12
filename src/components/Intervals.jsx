import React from 'react'
import { components, btc } from '../styles.js'
import vverx from '../img/vverx.svg'
import kizil from '../img/kizil.png'
import yashil from '../img/yashil.png'

const Intervals = () => {
  return (
    <section className='py-[85px] bg-#030D14 bg-contact-bg'>
      <div className={`${components.containerb} block  xl:flex items-center justify-between`}>
          <div className='xl:space-y-[18px] space-y-6 xl:mb-0 mb-8'>
            <h2 className='xl:text-left text-center md:text-[42px] text-[30px] leading-[39px] text-white/[0.6]'>
            Predicted Profitability at <br /> Various Intervals
            </h2>
            <p className='text-lg xl:text-left text-center text-white/[0.5] '>
              <span className='md:font-semibold  font-medium  text-white'>QuantEx promises stable profitability: < br className='hidden md:block' /> Daily Yield: 0.2% - 0.8% per day. <br className='hidden md:block' /> Monthly Return: 6% - 24%, which can reach 144% per year.</span><br  />
              The development process lasted 10 months, allowing us to carefully configure <br className='hidden md:block' /> the bot, eliminate errors and enrich the database. This experience confirms the <br className='hidden md:block' /> reliability and success of QuantEx, making it one of the world's best <br /> cryptocurrency trading solutions. 
            </p>
            <button className='py-4 px-8 bg-#56AB91 rounded-lg text-sm font-semibold text-white w-full max-w-[192px] block mx-auto xl:mx-0'>
            Start using bot
            </button>
          </div>
         <div className='w-full md:max-w-[690px] mx-auto xl:mx-0  max-w-[450px] aaa:max-w-[590px] rounded-3xl bg-white/[0.02] relative'>
          <div className='aaa:px-9 px-6 aaa:pt-9 pt-6 flex items-center justify-between'>
        <div>
        <div className='flex items-center'>
            <h4 className='text-[#EAEAEA] md:text-2xl text-xs aaa:text-base font-normal  aaa:font-medium leading-7 mr-2'>{btc.name}</h4>
            <img className='w-full md:max-w-[32px] aaa:max-w-[24px] max-w-[16px]' src={btc.icon} alt="icon" />
          </div>
          <div className='flex items-center'>
            <p className='text-white md:text-4xl aaa:text-[20px] text-base  font-normal md:font-medium leading-[46px] mr-[10px]'> ${btc.btcmoney}</p>
            <img className='mr-1 w-full max-w-[8px] md:max-w-3' src={vverx} alt="POSITION" />
            <p className='text-#56AB91 text-xs aaa:text-base md:text-[20px] font-semibold leading-[18px]'>{btc.positionfoix}</p>

          </div>
        </div>
       <div>
       <div className='flex items-center mb-2'>
          <img src={kizil} alt="" />
          <p className='text-white text-xs aaa:font-medium font-normal leading-[18px] ml-1.5 aaa:ml-3'>Lower Price</p>
        </div>
        <div className='flex items-center'>
          <img src={yashil} alt="" />
          <p className='text-white text-xs aaa:font-medium font-normal leading-[18px] ml-1.5 aaa:ml-3'>Higher Price</p>
        </div>
       </div>
          </div>
          <img className='' src={btc.chart} alt="chart" />
          <img  className='absolute bottom-[105px] left-[95px] xl:block hidden ' src={kizil} alt="" />
          <img className='absolute xl:block hidden bottom-[280px] left-[460px]' src={yashil} alt="" />
         </div>
      </div>
    </section>
  )
}

export default Intervals