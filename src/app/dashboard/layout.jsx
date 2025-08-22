import Sidebar from "@/components/SideBar";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="w-11/12 mx-auto">{children}</div>
    </div>
  );
};

export default DashboardLayout;
