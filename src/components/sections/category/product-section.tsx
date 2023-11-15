"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import Productsection from "../Productsection";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

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

type Props = {
  products: Product[];
  className?: string;
};

function ProductSection({ products, className }: Props) {
  return (
    <div className={cn(className)}>
      <div className="flex items-center justify-between">
        <h2 className="px-4 py-2  text-xl font-bold ">
          Products{" "}
          <span className="text-sm text-red-500">({products.length} list)</span>
        </h2>
        <div className="flex items-center space-x-2">
          <div className="p-2 text-sm font-medium flex items-center">
            <h3>filter :</h3>
            <Select>
              <SelectTrigger className=" ml-2 w-24">
                <SelectValue placeholder="Interesting" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="p-2 text-sm font-medium">
            <ToggleGroup type="single">
              <ToggleGroupItem value="a" variant="outline" aria-checked="true">
                A
              </ToggleGroupItem>
              <ToggleGroupItem value="b" variant="outline" aria-checked="true">
                B
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </div>
      <div className="flex grid-col-2 gap-4 md:grid-col-3 lg:grid-col-4  ">
        {products.map((product) => (
          <Productsection key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductSection;
