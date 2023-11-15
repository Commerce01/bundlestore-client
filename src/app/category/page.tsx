import CategorySection from "@/components/sections/category/category-section";
import ProductSection from "@/components/sections/category/product-section";
import Link from "next/link";
import React from "react";
import { Metadata } from "next";

type Category = {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  product: Product[];
};

type Product = {
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
};

async function getCaterory(): Promise<Category[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/categorys", {
    cache: "no-cache",
  });
  const response = await res.json();

  return response;
}

async function getProduct(): Promise<Product[]> {
  const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + "/api/products", {
    cache: "no-cache",
  });
  const response = await res.json();

  return response;
}

export const metadata: Metadata = {
  title: "Product - Bundle",
};

async function CategoryPage() {
  const categorys = await getCaterory();
  const products = await getProduct();
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3">
        <CategorySection categorys={categorys} className="col-span-1" />
        <ProductSection products={products} className="col-span-2" />
      </div>
    </div>
  );
}

export default CategoryPage;
