import React, { useState } from 'react'
import { components, tabs } from '../styles.js'
const Tab = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [change, setChange] = useState('');
  const Changef = () => {
      setChange(alert("Система временна недоступно"));
    };
  return (
    <section className='bg-#030D14 py-[85px] bg-contact-bg'>
      <div className={`${components.containerb} block xl:flex items-center `}>

        <div className='w-full  max-w-[300px] ddd:max-w-[690px] mx-auto  space-y-6 xl:space-y-0 mb-8 xl:mb-0'>
          <h2 className='xl:text-[42px] ddd:text-[35px] text-[30px] font-semibold leading-[39px] text-white mb-[18px]  text-center xl:text-left'>
          Watch your <br /> cryptocurrency <br /> <span className='text-#56AB91'>investments grow</span>
          </h2>
          <p className='text-white/[0.5] text-sm ddd:text-lg mb-[18px] text-center xl:text-left'>
         <span className='font-semibold text-white '> From powerful trading bots to smart orders.</span> <br />
Quantex gives you an advantage in the fast-changing world of crypto trading.
          </p>
         <button onClick={Changef} className='py-[14px] px-8 bg-#56AB91 rounded-lg w-full max-w-[168px] block mx-auto xl:mx-0 text-white text-[14px] font-semibold'>
         Start using bot
         </button>
        </div>

        <div className='md:pt-[18px] pt-[10px] md:px-[18px] bg-white/[0.02] xl:max-w-[690px]  max-w-[790px]  w-full mx-auto rounded-3xl xl:mr-9'>
          <ul className='flex items-center justify-between pl-[58px] pr-[43px] mb-[10px] md:mb-[18px]'>
            {
              tabs.map((tab) => {
                return (
                  <li onClick={() => setActiveTab(tab.id)} key={tab.id} className={`${activeTab === tab.id ? "" : "text-white/[0.25] font-medium border-b-white/[0.15]"} text-white text-[8px] ddd:text-sm md:text-base font-normal ddd:font-bold md:font-semibold pb-[10px] md:pb-[17px] px-[10px] ddd:px-[20px] md:px-7 hover:cursor-default
                               text-center border-b-2 border-#56AB91`}>{tab.tabname}</li>
                )
              })
            }
          </ul>
          <ul>
            {
              tabs.map((tab) => {
                return (
                  <li
                    key={tab.id}
                    className={` p-5 cursor-pointer ${activeTab === tab.id ? "" : "hidden"
                      }`}
                  >
                    <h3 className='text-white text-sm font-medium md:text-base md:font-semibold mb-3'>{tab.title}</h3>
                    <p className='text-white/[0.50] text-sm md:text-base mb-5'>{tab.text}</p>
                    <div className={`${tab.background} md:py-6 py-4 w-full ddd:max-w-[400px]   md:max-w-[520px] mx-auto px-4 md:px-6 rounded-xl flex items-center`}>
                      <img className='hidden ddd:block mr-3 w-full max-w-[45px] md:max-w-[56px]' src={tab.img} alt='img' />
                      <div className='w-11 text-center mr-7 md:mr-14'>
                        <h4 className='text-white text-sm md:text-[17px] font-semibold leading-6 tracking-[-0.408px]'>{tab.aksiya}</h4>
                        <p className='text-[#9DA3B7] text-xs md:text-[15px] leading-5 tracking-[-0.24px]'>{tab.kurs}</p>
                      </div>
                      <img className='md:mr-14 mr-8  hidden aaa:block ' src={tab.chart} alt="chart" />
                      <div className='w-[91px] text-end mr-14'>
                        <h4 className='text-white text-sm  md:text-[17px] md:font-semibold leading-6 tracking-[-0.408px]'>{tab.money}</h4>
                        <p className='text-[#9DA3B7] md:text-[15px] text-xs leading-5 tracking-[-0.24px]'>{tab.money2}</p>
                      </div>
                    </div>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Tab