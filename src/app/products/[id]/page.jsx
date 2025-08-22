import { Button } from "@/components/ui/button";
import { getDb } from "@/lib/mongodb";
import { ObjectId } from "mongodb";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi";

const ProductsDetails = async ({ params }) => {
  const { id } = params;
  const db = await getDb();

  const product = await db
    .collection("products")
    .findOne({ _id: new ObjectId(id) });

  if (!product) return <p>Product not found</p>;

  return (
    <div className="border-2 mx-auto p-10 rounded-2xl lg:w-5/12 bg-gray-50">
      <Link href="/products">
        <Button className="mb-5 cursor-pointer flex items-center gap-2">
          <HiArrowLeft className="text-lg" />
          Back
        </Button>
      </Link>
      {product.photo && (
        <Image
          src={product.photo}
          alt={product.name}
          width={200}
          height={200}
          className="object-cover rounded-md w-full mx-auto h-60 border"
        />
      )}
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="font-bold mt-2 text-2xl">${product.price}</p>
      <p className="text-gray-700 text-lg font-medium py-5">
        <span className="underline">Details: </span>
        {product.description}
      </p>
    </div>
  );
};

export default ProductsDetails;
