"use client";
import React from "react";
import { BiCheckShield, BiSmile, BiCartAdd, BiSend } from "react-icons/bi";

function Customer() {
  return (
    <div>
      <div className=" grid grid-cols-4 gap-4 ">
        <div>
          <button className="px-4 py-4 rounded-lg  text-4xl">
            <BiCheckShield />
          </button>
          <p className="font-bold text-xl py-4">Original Products</p>
          <p className="font-bold text-gray-400 text-sm">
            We providee money back guarantee if the product are not original
          </p>
        </div>
        <div>
          <button className=" px-4 py-4 rounded-lg text-4xl">
            <BiSmile />
          </button>
          <p className="font-bold text-xl py-4">Satisfaction Guarantee </p>
          <p className="font-bold text-gray-400 text-sm">
            Exchange the product you`ve purchased if it doesn`t fit on you
          </p>
        </div>
        <div>
          <button className="px-4 py-4 rounded-lg text-4xl">
            <BiCartAdd />
          </button>
          <p className="font-bold text-xl py-4">New Arrival Everyday</p>
          <p className="font-bold text-gray-400 text-sm">
            We updates our collections almost every
          </p>
        </div>
        <div>
          <button className="px-4 py-4 rounded-lg text-4xl">
            <BiSend />
          </button>
          <p className="font-bold text-xl py-4">Fast & Free Shipping</p>
          <p className="font-bold text-gray-400 text-sm">
            We offer fast and free shipping for our loyal customers
          </p>
        </div>
      </div>
    </div>
  );
}

export default Customer;
