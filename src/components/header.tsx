"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { cn } from "@/utils";

const navLinks = [
  { name: "Home", href: "#", active: true },
  { name: "Products", href: "#", active: false },
  { name: "Investment Club", href: "#", active: false },
  { name: "Blog", href: "#", active: false },
  { name: "About Us", href: "#", active: false },
  { name: "FAQs", href: "#", active: false },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 lg:px-0 lg:py-7">
        <Link href="/">
          <Image
            src="/logo-green.svg"
            alt="Risevest logo"
            width={50}
            height={16}
          />
        </Link>

        <div className="flex items-center">
          <nav className="hidden gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn("text-[#07969E]", { "font-bold": link.active })}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#07969E] lg:hidden"
            onClick={toggleMenu}
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ duration: 0.1 }}
            className="absolute inset-x-0 top-0 z-50 origin-top-right transform transition md:hidden"
          >
            <div className="h-screen divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between gap-2">
                  <Link href="/">
                    <Image
                      src="/logo-green.svg"
                      alt="Risevest logo"
                      width={50}
                      height={16}
                    />
                  </Link>

                  <div className="">
                    <button
                      type="button"
                      className="inline-flex items-center justify-center rounded-md bg-white p-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#07969E]"
                      onClick={toggleMenu}
                    >
                      <span className="sr-only">Close menu</span>
                      <svg
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </div>
                </div>

                <div className="mt-6">
                  <nav className="flex flex-col gap-8">
                    {navLinks.map((link, index) => (
                      <motion.a
                        key={link.name}
                        href={link.href}
                        className="flex items-center rounded-md py-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <span className="font-medium">{link.name}</span>
                      </motion.a>
                    ))}
                  </nav>
                </div>
              </div>

              <div className="flex items-center gap-4 px-5 py-6">
                <Link
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-full py-3 font-medium"
                >
                  Log In
                </Link>

                <Link
                  href="#"
                  className="inline-flex w-full items-center justify-center rounded-full bg-[#07969E] py-3 font-medium text-white"
                >
                  Get started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
