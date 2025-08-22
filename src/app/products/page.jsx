import { Button } from "@/components/ui/button";
import { getDb } from "@/lib/mongodb";
import Link from "next/link";
import React from "react";

const Products = async () => {
  const db = await getDb();
  const products = await db.collection("products").find().toArray();
  return (
    <div>
      <h1 className="text-3xl font-bold text-center underline">Products</h1>
      <div className="grid grid-cols-4 gap-4 py-5">
        {products.map((product) => (
          <div
            className="border-2 p-4 rounded-2xl space-y-2 bg-gray-100 shadow"
            key={product._id}
          >
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-lg font-semibold">${product.price}</p>
            <p className="text-sm">
              <span className="underline font-medium">Description:</span>{" "}
              {product.description}
            </p>
            <Link href={`/products/${product._id}`}>
              <Button className={"cursor-pointer"}>See Details</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
