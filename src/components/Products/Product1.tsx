"use client";
import React from "react";
import Image from "next/image";
import { BiCartAdd } from "react-icons/bi";
import ImageProduct from "./ImageProduct";
import DetailProduct from "./DetailProduct";
import { Product } from "../sections/Productsection";

function Product1({ product }: { product: Product }) {
  return (
    <div className="grid grid-cols-3 gap-4">
      <div>
        <ImageProduct images={product.images[0]} name={product.name} />
      </div>
      <div className="col-span-2">
        <DetailProduct name={product.name} price={product.price} />
      </div>
    </div>
  );
}

export default Product1;
