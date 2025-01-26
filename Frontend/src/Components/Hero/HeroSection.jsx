import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

export function HeroSection() {
  return (
    <div className="hero-section">
      <Swiper
        className="mySwiper"
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
          touchMoveStopPropagation: true,
        }}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="first-slide">
            <h4>Safety First</h4>
            <h1>
              Drive with Care, <br /> Life is Precious
            </h1>
            <p>
              Stay informed about the latest traffic regulations and <br />{" "}
              contribute to safer roads in Balochistan.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="first-slide">
            <h4>Rules Matter</h4>
            <h1>
              Respect Traffic Laws, <br /> Respect Life
            </h1>
            <p>
              Stay informed about the latest traffic regulations and <br />{" "}
              contribute to safer roads in Balochistan.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="first-slide">
            <h4>
              Together for <br /> Change
            </h4>
            <h1>
              Your Role in Road <br /> Safety
            </h1>
            <p>
              Collaborate with us to create a culture of responsibility and{" "}
              <br /> safety on Balochistan's roads.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
