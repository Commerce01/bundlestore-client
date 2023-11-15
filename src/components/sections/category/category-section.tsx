import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

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
};

type Props = {
  categorys: Category[];
  className?: string;
};

function CategorySection({ categorys, className }: Props) {
  return (
    <div className={cn(className)}>
      <h2 className="px-4 py-2 text-xl font-bold">Category</h2>
      {categorys.map((category) => (
        <Link href={"/category/" + category.slug} key={category.id}>
          <div className="border-b px-4 py-2 text-sm hover:text-red-700 ">
            {category.name}
          </div>
        </Link>
      ))}
    </div>
  );
}

export default CategorySection;
