import Image from "next/image";
import React from "react";
import icon from "../../public/techNova-icon.png";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-1">
        <Image width={50} height={50} src={icon} alt="logo" />
        <h1 className="text-2xl font-bold">
          <span className="text-blue-700">Tech</span>
          <span className="text-amber-600">Nova</span>
        </h1>
      </div>
    </Link>
  );
};

export default Logo;
