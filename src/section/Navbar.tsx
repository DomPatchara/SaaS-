"use client";

import React from "react";
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import Link from "next/link";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQs", href: "#faqs" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="py-4 lg:py-8 fixed w-full top-0 z-50">
      <div className="container max-w-5xl">
        <div className="border border-white/15 rounded-3xl bg-neutral-950/70 backdrop-blur-md">
          {/**Big Screen Menu */}
          <div className="grid grid-cols-2 lg:grid-cols-3 p-2 px-4 md:pr-2 items-center">
            {/**Logo  */}
            <div>
              <Image
                src={logoImage}
                alt="layer logo"
                className="h-9 md:h-auto w-auto"
              />
            </div>

            {/**Nav Links */}
            <div className="items-center justify-center hidden lg:flex">
              <nav className="flex gap-6 font-medium">
                {navLinks.map((link, index) => (
                  <Link key={index} href={link.href}>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/**Hamburger Icon */}
            <div className="flex justify-end gap-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-menu md:hidden cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
              >
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  className={twMerge(
                    "origin-left transition-all",
                    isOpen && "rotate-45 -translate-y-1"
                  )}
                ></line>
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  className={twMerge("transition-all", isOpen && "opacity-0")}
                ></line>
                <line
                  x1="3"
                  y1="18"
                  x2="21"
                  y2="18"
                  className={twMerge(
                    "origin-left transition-all",
                    isOpen && "-rotate-45  translate-y-1"
                  )}
                ></line>
              </svg>

              <Button
                variant="secondary"
                className="hidden md:inline-flex items-center"
              >
                Log In
              </Button>
              <Button
                variant="primary"
                className="hidden md:inline-flex items-center"
              >
                Sign Up
              </Button>
            </div>
          </div>

          {/**Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0}}
                style={{ overflow: "hidden"}}
              >
                <div className="flex flex-col items-center gap-4 py-4  md:hidden">
                  {navLinks.map((link, index) => (
                    <Link
                      key={index}
                      href={link.href}
                      className="py-2 text-lg font-semibold"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <Button variant="secondary">Log In</Button>
                  <Button variant="primary">Sign Up</Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
