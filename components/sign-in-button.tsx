"use client";
import { login } from "@/lib/actions/auth";

export const SignInButton = () => {
  return <button className="text-blue-400 text-sm" onClick={() => login()}> Sign In</button>;
};