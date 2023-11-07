import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
import Herosection from "@/components/sections/Herosection";
import Salesection from "@/components/sections/Salesection";
import Customer from "@/components/customer/customer";
import Subscribe from "@/components/Subscribe/Subscribe";

function page() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <Herosection />
      <Salesection />
      <div>
        <Image src="/assets/dc1w.png" alt="Logo" width={1200} height={100} />
      </div>
      {/* <Subscribe /> */}
      <Customer />
    </div>
  );
}

export default page;
