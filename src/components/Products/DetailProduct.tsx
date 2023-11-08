"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { type } from "os";
import { THB } from "@/lib/fomat";

type Props = {
  name: string;
  price: number;
};

function DetailProduct({ name, price }: Props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <div>
        <p className="text-2xl font-bold py-6">{name}</p>
        <p className="text-2xl font-bold text-red-500 ">{THB(price)}</p>
      </div>
      <div className="w-full flex-col flex justify-center items-center ">
        <div className="mx-4 flex justify-between items-center py-4 text-2xl w-1/2 ">
          <button onClick={() => setCount((prve) => prve + 1)}>+</button>
          <p>{count}</p>
          <button
            onClick={() => setCount((prve) => prve - 1)}
            disabled={count === 0 ? true : false}
          >
            -
          </button>
        </div>
        <div className="w-full">
          <Button className=" w-full">BUY</Button>
        </div>
      </div>
    </div>
  );
}

export default DetailProduct;
