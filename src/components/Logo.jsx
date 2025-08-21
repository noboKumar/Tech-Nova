import Image from "next/image";
import React from "react";
import icon from "../../public/techNova-icon.png";

const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <Image width={50} height={50} src={icon} alt="logo" />
      <h1 className="text-2xl font-bold">TechNova</h1>
    </div>
  );
};

export default Logo;
