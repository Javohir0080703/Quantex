import React from "react";
import trading from '../img/tarding.png'
import { components, swippers } from "../styles";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const Blog = () => {
  return (
    <section className="pt-12 pb-[71px] bg-#051018">
     <div className={`${components.containerb}`}>
     <div className="w-full max-w-xl mx-auto mb-9 py-5">
        <h2 className="text-[42px] leading-[39px]  text-center  mb-[18px] text-white">Blog</h2>
        <p className="text-center text-lg text-white/50 ">
          Stay updated with Our News, your go-to source for the latest
          happenings, insightful articles, and breaking stories across a
          spectrum of topics, keeping you informed and engaged
        </p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        pagination={{
          type: "progressbar",
        }}
        breakpoints={{
          500: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 3
          }
        }}
        className="mySwiper"
      >
       {
           swippers.map((swiper)=>{
           return(
            <SwiperSlide>
            <img src={swiper.img} alt="" />
            <div className="py-4">
                <h3 className="text-lg text-white  font-semibold mb-1">{swiper.title}</h3>
                <p className="text-base  text-white/[0.85] mb-4">{swiper.text}</p>
                <span className="text-white/[0.1] text-lg ">{swiper.data}</span>
            </div>
        </SwiperSlide>
           )
           })
       }
      </Swiper>
     </div>
    </section>
  );
};

export default Blog;
