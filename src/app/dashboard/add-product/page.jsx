import { Button } from "@/components/ui/button";

export default function AddProducts() {
  return (
    <div className="mx-5">
      <div className="shadow-md rounded-lg p-8 border">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">Add New Product</h1>

        <form className="flex flex-col gap-4">
          {/* Product Name */}
          <div className="flex flex-col">
            <label htmlFor="name" className="mb-1 font-medium text-gray-700">
              Product Name
            </label>
            <input
              type="text"
              id="name"
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
              id="price"
              placeholder="Enter price"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col">
            <label htmlFor="description" className="mb-1 font-medium text-gray-700">
              Description
            </label>
            <textarea
              id="description"
              placeholder="Enter product description"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none h-24"
            />
          </div>

          {/* Submit Button */}
          <Button type="submit" className="mt-4 w-full">
            Add Product
          </Button>
        </form>
      </div>
    </div>
  );
}
