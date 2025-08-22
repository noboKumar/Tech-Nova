"use client";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import AuthButton from "./AuthButton";
import { useSession } from "next-auth/react";

const NavBar = () => {
  const { data: session } = useSession();
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
  ];
  if (session?.user) {
    navLinks.push({ name: "Dashboard", href: "/dashboard" });
  }
  const pathName = usePathname();
  return (
    <div className="bg-gray-200 border-b-2 border-gray-300 sticky top-0 z-10">
      <div className="flex items-center justify-between p-4 w-11/12 mx-auto">
        {/* logo */}
        <div>
          <Logo />
        </div>
        {/* nav Links */}
        <div className="flex items-center gap-5">
          {navLinks.map((link) => {
            const isActive =
              pathName === link.href ||
              (pathName.startsWith(link.href) && link.href !== "/");
            return (
              <Link
                href={link.href}
                key={link.name}
                className={`${
                  isActive ? "bg-gray-300" : ""
                } text-lg hidden md:flex gap-5 font-semibold px-4 py-2 rounded-xl`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        {/* nav end */}
        <div>
          <AuthButton />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
