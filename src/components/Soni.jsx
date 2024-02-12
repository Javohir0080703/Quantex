import React from 'react'
import { components } from '../styles.js'

const Soni = () => {
  return (
    <section className='bg-#030D14  py-9'>
           <div className={`${components.containerb}  md:flex items-center justify-between space-y-10 md:space-y-0`}>
              <div className='w-[250px] mx-auto  text-center'>
                <h1 className='text-[72px] text-#56AB91 leading-[66.033px] font-semibold mb-1'>500K</h1>
                <p className='text-white text-lg font-semibold'>TRADERS WORLDWIDE</p>
              </div>
              <div className='w-[250px] mx-auto text-center'>
                <h1 className='text-[72px] text-#56AB91 leading-[66.033px] font-semibold mb-1'>3.7M</h1>
                <p className='text-white text-lg font-semibold'>BOTS STARTED</p>
              </div>
              <div className='w-[250px] mx-auto text-center'>
                <h1 className='text-[72px] text-#56AB91 leading-[66.033px] font-semibold mb-1'>$300B</h1>
                <p className='text-white text-lg font-semibold'>TRADING VOLUME</p>
              </div>
           </div>
    </section>
  )
}

export default Soni