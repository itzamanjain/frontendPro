"use client";
import { logout } from "@/lib/actions/auth";
import { LogOut } from "lucide-react";

export const SignOutButton = () => {
  
  console.log("log out clicked");
  
  return (
    <button 
      onClick={() => logout()}
      className="w-full text-red-500 flex items-center gap-2 cursor-pointer"
    >
      <LogOut className="w-4 h-4" />
      Sign Out
    </button>
  );
};
