"use client";
import { login, logout } from "@/lib/actions/auth";
import { LogOut } from "lucide-react";

export const SignOutButton = () => {
  

  return (
    <button 
      onClick={logout}
      className="w-full flex items-center gap-2 cursor-pointer"
    >
      <LogOut className="w-4 h-4" />
      Sign Out
    </button>
  );
};
