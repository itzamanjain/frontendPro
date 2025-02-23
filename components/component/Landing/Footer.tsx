"use client";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" py-12 px-4 md:px-6 text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2">
              <h2 className="text-lg font-bold">Codefront</h2>
            </Link>

            <h1 className="text-gray-300 mt-4">
              Build by{" "}
              <span className="text-[#039ee4]">
                <Link href="https://x.com/iamancoder">@Aman Jain</Link>
              </span>
            </h1>
            <div className="mt-2">
              <Link href="https://x.com/">
                <Button variant="secondary">
                  Share Your Thoughts On
                  <Twitter className="icon-class ml-1 w-3.5 " />
                </Button>
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-5">
              © {new Date().getFullYear()} Codefront Lab | All rights reserved
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">Pages</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/docs"
                    className="text-gray-400 dark:hover:text-white"
                  >
                    Docs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="text-gray-400 dark:hover:text-white"
                  >
                    Components
                  </Link>
                </li>
                <li>
                  <Link
                    href="/examples"
                    className="text-gray-400 dark:hover:text-white"
                  >
                    Examples
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-gray-400 dark:hover:text-white"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://itzaman.site/"
                    className="text-gray-400 dark:hover:text-white"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Socials</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="https://github.com/itzamanjain/"
                    className="text-gray-400 dark:hover:text-white"
                  >
                    Github
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/itzamanjain"
                    className="text-gray-400 dark:hover:text-white"
                  >
                    LinkedIn
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/"
                    className="text-gray-400 dark:hover:text-white"
                  >
                    X
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-gray-400 dark:hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/tos"
                    className="text-gray-400 dark:hover:text-white"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className=" w-full flex mt-4 items-center justify-center   ">
          <h1 className="text-center text-3xl md:text-5xl lg:text-[10rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-700 to-neutral-900 select-none">
            CODE FRONT
          </h1>
        </div>
      </div>
    </footer>
  );
}
