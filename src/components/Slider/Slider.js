import "./Slider.css";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Pic from "../../images/pic.png";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="slide">
            <div className="slide__pic">
              <img src={Pic} alt="figma" />
            </div>
            <div className="slide__text">
              <p>
                Incididunt cillum do sint sint enim ullamco id deserunt mollit
                qui reprehenderit do. Velit ex tempor cillum ad sint occaecat.
                Do nulla velit labore occaecat do deserunt Lorem magna officia
                incididunt consectetur amet. Sunt consectetur veniam minim ex
                commodo sint non. Occaecat aute officia excepteur non laboris id
                qui ad.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide><div className="slide">
            <div className="slide__pic">
              <img src={Pic} alt="figma" />
            </div>
            <div className="slide__text">
              <p>
                Incididunt cillum do sint sint enim ullamco id deserunt mollit
                qui reprehenderit do. Velit ex tempor cillum ad sint occaecat.
                Do nulla velit labore occaecat do deserunt Lorem magna officia
                incididunt consectetur amet. Sunt consectetur veniam minim ex
                commodo sint non. Occaecat aute officia excepteur non laboris id
                qui ad.
              </p>
            </div>
          </div></SwiperSlide>
        <SwiperSlide><div className="slide">
            <div className="slide__pic">
              <img src={Pic} alt="figma" />
            </div>
            <div className="slide__text">
              <p>
                Incididunt cillum do sint sint enim ullamco id deserunt mollit
                qui reprehenderit do. Velit ex tempor cillum ad sint occaecat.
                Do nulla velit labore occaecat do deserunt Lorem magna officia
                incididunt consectetur amet. Sunt consectetur veniam minim ex
                commodo sint non. Occaecat aute officia excepteur non laboris id
                qui ad.
              </p>
            </div>
          </div></SwiperSlide>
      </Swiper>
    </>
  );
}
