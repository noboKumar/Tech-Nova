"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import Swal from "sweetalert2";

export default function AuthButton() {
  const { data: session } = useSession();
  
  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You want to log out?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, log out!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOut({callbackUrl: "/"});
        Swal.fire({
          title: "Logged Out!",
          text: "You have been logged out.",
          icon: "success",
        });
      }
    });
  };

  if (session) {
    return (
      <Button className={"bg-red-700 hover:bg-red-800 cursor-pointer"} onClick={handleLogOut}>
        Logout
      </Button>
    );
  }

  return (
    <Button className={"cursor-pointer"} onClick={() => signIn()}>
      Login
    </Button>
  );
}
