import { getDb } from "@/lib/mongodb";
import Link from "next/link";
import React from "react";

const Highlight = async () => {
  const db = await getDb();
  const products = await db.collection("products").find().limit(6).toArray();
  return (
    <div className="py-10">
      <h1 className="text-2xl font-bold mb-4">Highlight Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <Link
            className="hover:scale-102 transition-transform duration-200 bg-gray-50 rounded-2xl"
            key={product._id}
            href={`/products/${product._id}`}
          >
            <div className="border p-4 rounded-xl cursor-pointer">
              <h2 className="text-lg font-bold">{product.name}</h2>
              <p className="text-sm">{product.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Highlight;
