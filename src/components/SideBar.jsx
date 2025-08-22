"use client";
import { FiHome, FiShoppingCart, FiShoppingBag } from "react-icons/fi";
import Link from "next/link";

const Sidebar = () => {
  const links = [
    { name: "Home", href: "/", icon: <FiHome /> },
    { name: "Products", href: "/products", icon: <FiShoppingCart /> },
    {
      name: "Add Products",
      href: "/dashboard/add-product",
      icon: <FiShoppingBag />,
    },
  ];

  return (
    <>
      {/* Sidebar */}
      <div className="min-h-screen w-64 px-5 bg-gray-200 flex flex-col rounded">
        <div className="p-6 text-xl font-bold border-b">Dashboard</div>
        <ul className="flex flex-col mt-4 gap-2 text-lg font-semibold">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center gap-2 p-2 hover:bg-gray-300 rounded"
              >
                {link.icon} {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
