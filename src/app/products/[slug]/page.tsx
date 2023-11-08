import Product1 from "@/components/Products/Product1";
import Productsection from "@/components/sections/Productsection";
import React from "react";
import { Product } from "../page";

async function getProduct(slug: string) {
  const res = await fetch(
    process.env.NEXT_PUBLIC_API_HOST + "/api/products?slug=" + slug
  );
  const response: Product = await res.json();

  return response;
}

async function ProductSlugPage({ params }: { params: { slug: string } }) {
  const product = await getProduct(params.slug);
  return (
    <div>
      <Product1 product={product} />
    </div>
  );
}

export default ProductSlugPage;
