import React from 'react'
import { Link } from 'react-router-dom'
import { components, trading2 } from '../styles.js'

const Faqtraders = () => {
  return (
    <section className='py-[72px] bg-#051018'>
        <div className={`${components.containerb}`}>
            <ul className='space-y-8  '>
                {
                    trading2.map((trade)=>{
                        return(
                            <li key={trade.id} className='w-full max-w-[921px] border border-white/[0.07] rounded-2xl'>
                               <Link to={`/users/${trade.id}`}>
                               <img src={trade.img} alt="" />
                                <div className='py-6 px-[18px]  rounded-b-2xl bg-#051018'>
                                    <h4 className='text-white text-2xl font-semibold mb-3'>{trade.oncetitle}</h4>
                                    <p className='text-white text-base mb-[34px]'>{trade.oncetext}</p>
                                    <div className='flex items-center justify-between text-white/[0.85] text-lg opacity-[0.25]'>
                                        <span>{trade.data}</span>
                                        <span>{trade.theme}</span>
                                    </div>
                                </div>
                               </Link>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </section>
  )
}

export default Faqtraders