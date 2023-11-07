"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";

import { Autoplay } from "swiper/modules";

function Herosection() {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay]}
      className=" w-full h-full flex justify-center items-center mx-auto"
    >
      <SwiperSlide>
        <Image
          src="/assets/G1.jpg"
          alt="Hero"
          width={1600}
          height={600}
          style={{ objectFit: "contain" }}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/G6.jpg"
          alt="Hero"
          width={1600}
          height={600}
          style={{ objectFit: "contain" }}
        />
      </SwiperSlide>
    </Swiper>
  );
}

export default Herosection;
