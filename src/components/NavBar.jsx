import React from "react";
import Logo from "./Logo";
import Link from "next/link";
import { Button } from "./ui/button";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <Link href="/">Home</Link>
      </li>
    </>
  );
  return (
    <div className="bg-gray-200 border-b-2 border-gray-300 sticky top-0 z-10">
      <div className="flex items-center justify-between p-4 w-11/12 mx-auto">
        {/* logo */}
        <div>
          <Logo />
        </div>
        {/* nav Links */}
        <div>
          <ul>{navLinks}</ul>
        </div>
        {/* nav end */}
        <div>
          <Button className="cursor-pointer">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
