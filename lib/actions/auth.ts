"use server";

import { signIn, signOut } from "@/auth";

export const login = async () => {
  await signIn("github", { redirectTo: "/" });
};

export const logout = async () => {
  console.log("kar rha hu ruk");
  
  await signOut({ redirectTo: "/api/auth/signin" });
};