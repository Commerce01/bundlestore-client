"use client";
import React from "react";
import Image from "next/image";
import { Product } from "../sections/Productsection";
import { type } from "os";

type Props = {
  name: string;
  images: string;
};

function ImageProduct({ images, name }: Props) {
  return (
    <div>
      <Image
        src={images}
        alt={name}
        width={300}
        height={100}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

export default ImageProduct;
