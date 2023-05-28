import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/navigation/navigation.min.css';

import "./style.css";

// import required modules
import { Navigation, Pagination } from "swiper";


export default function testi() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={0}
        navigation
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className="testtt">
                <p>Called for an emergency appointment, was seen within 2hrs and had my tooth out. Very efficient service.</p>
                <h4>Jon Bakken</h4>
                <h6></h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="testtt">
                <p>Dentist was great, explained the treatment and carried out the treatment pain free</p>
                <h4>Andrea Velle</h4>
                <h6>CUSTOMER</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="testtt">
                <p>I rang at 10pm, was seen at 11pm had a broken tooth. My tooth was fixed within 30 minutes and now I am pain free!</p>
                <h4>Elle Aasen</h4>
                <h6>CUSTOMER</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="testtt">
                <p>Had an appointment on Sunday evening. I had a very bad toothache. The dentist was very gently and reassuring</p>
                <h4>Isa Holmgren</h4>
                <h6>CUSTOMER</h6>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="testtt">
                <p>Lovely practice. Was clean and receptionist was very welcoming.</p>
                <h4>Sarah Davies</h4>
                <h6>CUSTOMER</h6>
            </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
