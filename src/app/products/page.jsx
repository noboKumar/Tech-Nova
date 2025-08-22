import { Button } from "@/components/ui/button";
import { getDb } from "@/lib/mongodb";
import Image from "next/image";
import Link from "next/link";
import placeholder from "@/assets/placeholder-image.png";
export const revalidate = 0;

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
            {product.photo && (
              <Image
                src={product.photo || placeholder}
                alt={product.name}
                width={200}
                height={200}
                className="object-cover rounded-md w-full mx-auto h-60 border"
              />
            )}
            <h2 className="text-xl font-bold">{product.name || "Untitled"}</h2>
            <p className="text-lg font-semibold">${product.price || "N/A"}</p>
            <p className="text-sm">
              <span className="underline font-medium">Description:</span>{" "}
              {product.description || "No description available."}
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
