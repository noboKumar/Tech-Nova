"use client";

import { FiLoader } from "react-icons/fi";

const Spinner = ({ className = "" }) => {
  return (
    <FiLoader className={`animate-spin text-gray-700 ${className} text-white`} size={24} />
  );
};

export default Spinner;
