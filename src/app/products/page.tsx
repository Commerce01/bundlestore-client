import Product1 from "@/components/Products/Product1";
import Productsection from "@/components/sections/Productsection";
import React from "react";

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

async function getProduct() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/products");
  const response: Product[] = await res.json();

  return response;
}

async function Productpage() {
  const products = await getProduct();
  return (
    <div className="flex justify-center items-center gap-8 ">
      {products.map((product) => (
        <Productsection key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Productpage;
