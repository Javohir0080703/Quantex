import React from 'react'
import { components } from '../styles.js'
import faqimg from '../img/faqimg.png'
const Faq = () => {
  return (
    <section className='pb-11 bg-#030D14 bg-faqimg bg-whidth   space-y-5 lg:space-y-0  lg:bg-contact-bg'>
        <div className={`${components.containerb} lg:flex block items-center  justify-between  `}>
               <ul className=' w-full  mx-auto lg:block sm:max-w-[500px] max-w-[300px] lg:max-w-[365px]   space-y-[46px] lg:mb-0 mb-10'>
                <li className='lg:max-w-[365px] max-w-[500px] bg-#030D14 w-full py-5 px-5  border border-white/[0.75] rounded-2xl lg:bg-white/[0.02] border-l-[4px] border-l-[#56AB91] '>
                    <h3 className='text-white text-lg font-semibold mb-1'>24/7 Trading</h3>
                    <p className='text-white/[0.85] text-base '>Crypto bots can operate round the clock, taking advantage of market movements even when you're not actively monitoring.</p>
                </li>
                <li className='bg-#030D14 max-w-[500px] lg:max-w-[365px] w-full py-5 px-5  border border-white/[0.75] rounded-2xl lg:bg-white/[0.02] border-l-[4px] border-l-[#56AB91] '>
                    <h3 className='text-white text-lg font-semibold mb-1'>Diversification</h3>
                    <p className='text-white/[0.85] text-base '>Bots can manage multiple assets simultaneously, spreading risk across various cryptocurrencies or trading pairs.</p>
                </li>
                <li className='max-w-[500px] lg:max-w-[365px] w-full py-5 px-5  border border-white/[0.75] rounded-2xl bg-#030D14 lg:bg-white/[0.02] border-l-[4px] border-l-[#56AB91] '>
                    <h3 className='text-white text-lg font-semibold mb-1'>Efficiency and Consistency</h3>
                    <p className='text-white/[0.85] text-base '>Bots maintain consistency in executing strategies, ensuring trades are made according to predefined parameters without deviation.</p>
                </li>
               </ul>
               <img className=' xl:max-w-[650px] max-w-[550px] w-full lg:block hidden' src={faqimg} alt="" />
               <ul className='w-full sm:max-w-[500px] lg:max-w-[365px] max-w-[300px] mx-auto space-y-[46px] '>
                <li className='max-w-[500px] lg:max-w-[365px] w-full py-5 px-5  border border-white/[0.75] rounded-2xl bg-#030D14  lg:bg-white/[0.02] border-r-[4px] border-l-[#56AB91] '>
                    <h3 className='text-white text-lg font-semibold mb-1'>Speed and Automation</h3>
                    <p className='text-white/[0.85] text-base '>They execute trades swiftly and automatically, reacting to predefined market conditions without emotional influence.</p>
                </li>
                <li className='max-w-[500px] lg:max-w-[365px] w-full py-5 px-5  border border-white/[0.75] rounded-2xl bg-#030D14 lg:bg-white/[0.02] border-r-[4px] border-l-[#56AB91] '>
                    <h3 className='text-white text-lg font-semibold mb-1'>Elimination of Human Error</h3>
                    <p className='text-white/[0.85] text-base '>By automating trading decisions, the impact of human emotions or mistakes is significantly reduced.</p>
                </li>
                <li className='max-w-[500px] lg:max-w-[365px] w-full block py-5 px-5  border border-white/[0.75] rounded-2xl bg-#030D14 lg:bg-white/[0.02] border-r-[4px] border-l-[#56AB91] '>
                    <h3 className='text-white text-lg font-semibold mb-1'>Reduced Emotional Trading</h3>
                    <p className='text-white/[0.85] text-base '>Emotions like fear and greed can often affect human traders, leading to impulsive decisions. Bots operate based on logic and programmed parameters.</p>
                </li>
               </ul>
        </div>
    </section>
  )
}

export default Faq