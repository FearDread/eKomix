import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Autoplay } from "swiper/modules";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import LimitedCard from "../../Product/LimitedCard/LimitedCard";
import "swiper/css";
import "swiper/css/navigation";
import "./LimitedEdition.css";


const LimitedEdition = ( products ) => {
  const dispatch = useDispatch();
  const { loading, result } = useSelector((state) => state.crud.product);


  return (
    <>
        <div className="limitedProductSlider">
          <div className="swiper-button image-swiper-button-next">
            <IoIosArrowForward />
          </div>
          <div className="swiper-button image-swiper-button-prev">
            <IoIosArrowBack />
          </div>
          <Swiper
            slidesPerView={4}
            slidesPerGroup={4}
            spaceBetween={30}
            loop={true}
            navigation={{
              nextEl: ".image-swiper-button-next",
              prevEl: ".image-swiper-button-prev",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Autoplay]}
            breakpoints={{
              320: {
                slidesPerView: 2,
                slidesPerGroup: 1,
                spaceBetween: 14,
              },
              768: {
                slidesPerView: 3,
                slidesPerGroup: 1,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                slidesPerGroup: 1,
                spaceBetween: 30,
              },
            }}
          >
            {result && result.slice(0, 13).map((product) => {
              return (
                <SwiperSlide key={product._id}>
                  <LimitedCard key={product._id} product={product} />
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
    </>
  );
};

export default LimitedEdition;
