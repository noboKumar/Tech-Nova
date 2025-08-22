"use client";
import Spinner from "@/components/Spinner";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useState } from "react";
import { toast } from "sonner";

export default function AddProducts() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const name = form.name.value;
    const description = form.description.value;
    const price = form.price.value;
    console.log({ name, description, price });

    try {
      await axios.post("/api/products", {
        name,
        description,
        price,
      });
      toast("Product has been created.");
      form.reset();
    } catch (error) {
      console.log(error);
      toast("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="mx-5">
      <div className="shadow-md rounded-lg p-8 border">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Add New Product
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Product Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter product name"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Price */}
          <div className="flex flex-col">
            <label htmlFor="price" className="mb-1 font-medium text-gray-700">
              Price
            </label>
            <input
              type="number"
              name="price"
              placeholder="Enter price"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label
              htmlFor="description"
              className="mb-1 font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              name="description"
              placeholder="Enter product description"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24"
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="mt-4 w-full cursor-pointer">
            {loading && <Spinner />}
            {loading ? "Adding..." : "Add Product"}
          </Button>
        </form>
      </div>
    </div>
  );
}
