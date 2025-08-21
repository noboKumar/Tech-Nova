import React from "react";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-6 mt-10 border-t-2">
      <div className="w-11/12 mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo / Brand */}
        <div>
          <Logo />
          <p className="text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} - All right reserved by
            TechNova
          </p>
        </div>

        <nav className="flex flex-col">
          <h6 className="font-semibold text-gray-500 text-xl py-1">Services</h6>
          <a className="hover:underline cursor-pointer">Branding</a>
          <a className="hover:underline cursor-pointer">Design</a>
          <a className="hover:underline cursor-pointer">Marketing</a>
          <a className="hover:underline cursor-pointer">Advertisement</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="font-semibold text-gray-500 text-xl py-1">Company</h6>
          <a className="hover:underline cursor-pointer">About us</a>
          <a className="hover:underline cursor-pointer">Contact</a>
          <a className="hover:underline cursor-pointer">Jobs</a>
          <a className="hover:underline cursor-pointer">Press kit</a>
        </nav>
        <nav className="flex flex-col">
          <h6 className="font-semibold text-gray-500 text-xl py-1">Legal</h6>
          <a className="hover:underline cursor-pointer">Terms of use</a>
          <a className="hover:underline cursor-pointer">Privacy policy</a>
          <a className="hover:underline cursor-pointer">Cookie policy</a>
        </nav>
        <div></div>
      </div>
    </footer>
  );
};

export default Footer;
