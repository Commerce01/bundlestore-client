"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { BiCartAdd } from "react-icons/bi";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Salesection() {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="w-full h-full flex justify-center items-center mx-auto"
    >
      <SwiperSlide>
        <Image
          src="/assets/S6.jpg"
          alt="Hero"
          width={300}
          height={100}
          style={{ objectFit: "contain" }}
        />
        <p className="flex justify-between items-center font-bold text-xl ">
          1,190 THB
          <button className=" bg-black px-3 py-3 rounded-lg text-2xl mr-6">
            <BiCartAdd className="text-white" />
          </button>
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/S1.jpg"
          alt="Hero"
          width={200}
          height={100}
          style={{ objectFit: "contain" }}
        />
        <p className="flex justify-between items-center font-bold text-xl ">
          2,500 THB
          <button className=" bg-black px-3 py-3 rounded-lg text-2xl mr-6">
            <BiCartAdd className="text-white" />
          </button>
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/S2.jpg"
          alt="Hero"
          width={300}
          height={100}
          style={{ objectFit: "contain" }}
        />
        <p className="flex justify-between items-center font-bold text-xl ">
          1,690 THB
          <button className=" bg-black px-3 py-3 rounded-lg text-2xl mr-6">
            <BiCartAdd className="text-white" />
          </button>
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/S3-.png"
          alt="Hero"
          width={300}
          height={100}
          style={{ objectFit: "contain" }}
        />
        <p className="flex justify-between items-center font-bold text-xl ">
          1,500 THB
          <button className=" bg-black px-3 py-3 rounded-lg text-2xl mr-6">
            <BiCartAdd className="text-white" />
          </button>
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/S4.jpg"
          alt="Hero"
          width={300}
          height={100}
          style={{ objectFit: "contain" }}
        />
        <p className="flex justify-between items-center font-bold text-xl ">
          1,300 THB
          <button className=" bg-black px-3 py-3 rounded-lg text-2xl mr-6">
            <BiCartAdd className="text-white" />
          </button>
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/S5.jpg"
          alt="Hero"
          width={300}
          height={100}
          style={{ objectFit: "contain" }}
        />
        <p className="flex justify-between items-center font-bold text-xl ">
          3,500 THB
          <button className=" bg-black px-3 py-3 rounded-lg text-2xl mr-6">
            <BiCartAdd className="text-white" />
          </button>
        </p>
      </SwiperSlide>
      <SwiperSlide>
        <Image
          src="/assets/S7.jpg"
          alt="Hero"
          width={250}
          height={100}
          style={{ objectFit: "contain" }}
        />
        <p className="flex justify-between items-center font-bold text-xl ">
          1,590 THB
          <button className=" bg-black px-3 py-3 rounded-lg text-2xl mr-6">
            <BiCartAdd className="text-white" />
          </button>
        </p>
      </SwiperSlide>
    </Swiper>
  );
}

export default Salesection;
