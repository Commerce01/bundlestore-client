"use client";
import React from "react";
import Image from "next/image";

function ImageProduct() {
  return (
    <div>
      <Image
        src="/assets/S1.jpg"
        alt="Hero"
        width={300}
        height={100}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}

export default ImageProduct;
