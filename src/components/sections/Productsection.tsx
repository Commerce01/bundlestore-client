"use client";
import React from "react";
import Product1 from "../Products/Product1";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  stock: number;
  slug: string;
  images: string[];
  createdAt: Date;
  updatedAt: Date;
  category: Category[];
}

export interface Category {
  id: string;
  name: string;
}

function Productsection({ product }: { product: Product }) {
  return (
    <Card className="w-[200px]">
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        <Link
          href={`/products/${product.slug}`}
          className="flex justify-center items-center"
        >
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={100}
            style={{ objectFit: "contain" }}
          />
        </Link>
      </CardContent>
      <CardFooter>
        <div className="w-full">
          <Button className=" w-full">BUY</Button>
        </div>
      </CardFooter>
    </Card>
  );
}

export default Productsection;
