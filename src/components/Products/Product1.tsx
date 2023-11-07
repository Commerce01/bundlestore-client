"use client";
import React from "react";
import Image from "next/image";
import { BiCartAdd } from "react-icons/bi";
import ImageProduct from "./imageProduct";
import DetailProduct from "./DetailProduct";

function Product1() {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <ImageProduct />
      </div>
      <div className="col-span-2">
        <DetailProduct />
      </div>
    </div>
  );
}

export default Product1;
