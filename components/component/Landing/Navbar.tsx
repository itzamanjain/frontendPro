"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Item {
  name: string;
  link: string;
}

const Navbar = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);

  const items: Item[] = [
    { name: "Pricing", link: "/pricing" },
    { name: "Blog", link: "/blog" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-tr from-primary to-accent-200 max-w-7xl mx-auto rounded-xl mt-4"
    >
      <div className="flex h-16 justify-between px-4 md:px-6">
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="flex items-center space-x-2 text-lg font-semibold"
          >
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-white"
            >
              Spectrum UI
            </motion.span>
          </Link>

          <div className="hidden md:flex md:space-x-4">
            {items.map((item, index) => (
              <motion.div
                key={index}
                className="relative"
                onHoverStart={() => setActiveItem(item.name)}
                onHoverEnd={() => setActiveItem(null)}
              >
                <Link
                  href={item.link}
                  className="text-sm font-medium text-neutral-200 transition-colors hover:text-primary"
                >
                  {item.name}
                </Link>
                {activeItem === item.name && (
                  <motion.div
                    className="absolute -bottom-[21px] left-0 right-0 h-[2px] bg-primary"
                    layoutId="underline"
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "100%" }}
                    exit={{ opacity: 0, width: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              variant="ghost"
              className="text-sm text-neutral-200 font-medium"
            >
              Login
            </Button>
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-sm bg-gradient-to-r from-[#484848] to-neutral-900 shadow-lg stroke-slate-100 text-white font-semibold px-7 py-2 rounded-2xl relative overflow-hidden"
          >
            <motion.span
              className="absolute inset-0 bg-gradient-to-r from-[#484848] to-neutral-900"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
            <span className="relative z-10">Sign Up</span>
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
