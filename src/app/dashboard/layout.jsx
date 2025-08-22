import Sidebar from "@/components/SideBar";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

const DashboardLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/login");
  }
  return (
    <div className="flex">
      <Sidebar></Sidebar>
      <div className="w-11/12 mx-auto">{children}</div>
    </div>
  );
};

export default DashboardLayout;
