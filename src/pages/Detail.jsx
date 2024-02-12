import React from 'react'
import { components, trading2 } from '../styles.js'
import { useParams } from 'react-router-dom'

const Detail = () => {
  const { id } = useParams();
  const trade = trading2.find((hotel) => hotel.id.toString() === id);

  return (
    <section className='pt-[48px] pb-[56px] bg-#030D14'>
      <div className={`${components.containerb}`}>
       <div>
       <h2 className='text-center text-white text-[42px] leading-[39px] mb-8'>{trade.title}</h2>
       <p className='max-w-[654px] w-full mx-auto text-center text-lg text-white/[0.5] mb-8'>{trade.oncetext}</p>
       <img className='w-full max-w-[940px] h-full max-h-[450px] mx-auto mb-[60px]' src={trade.img} alt="trading" />
       <p className='w-full max-w-[690px] mx-auto text-left text-white/[0.85] text-2xl leading-8'>{trade.text}</p>
       </div>
      </div>
    </section>
  )
}

export default Detail