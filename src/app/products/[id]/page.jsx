import { getDb } from "@/lib/mongodb";
import { ObjectId } from "mongodb";

const ProductsDetails = async ({ params }) => {
  const { id } = params;
  const db = await getDb();
  
  const product = await db
    .collection("products")
    .findOne({ _id: new ObjectId(id) });
  
    if (!product) return <p>Product not found</p>;
  
  return (
    <div className="border-2 mx-auto p-10 rounded-2xl lg:w-5/12 bg-gray-50 h-80">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className="font-bold mt-2 text-2xl">${product.price}</p>
      <p className="text-gray-700 text-lg font-medium py-5"><span className="underline">Details: </span>{product.description}</p>
    </div>
  );
};

export default ProductsDetails;
