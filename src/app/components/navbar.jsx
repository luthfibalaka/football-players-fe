"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);
  const linkStyleDesktop =
    "px-3 py-5 text-xl transition duration-300 ease-in-out hover:text-red-500";
  const linkStyleMobile = "";

  return (
    <nav>
      {/* Width limit for large screen and beyond */}
      <div className="mx-auto max-w-6xl">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            {/* Logo */}
            <div>
              <Link href="/" className="flex items-center px-3 py-5">
                <Image
                  className="mr-3"
                  src="/logo.png"
                  alt="Football Players Logo"
                  width="80"
                  height="80"
                />
                <span className="text-2xl font-medium transition duration-300 ease-in-out hover:text-red-500">
                  Football Players Hub
                </span>
              </Link>
            </div>

            {/* Left Nav */}
            <div className="hidden items-center space-x-1 md:flex">
              <Link className={linkStyleDesktop} href="/name">
                Search Players
              </Link>
              <Link className={linkStyleDesktop} href="#">
                Positions
              </Link>
              <Link className={linkStyleDesktop} href="/clubs">
                Clubs
              </Link>
              <Link className={linkStyleDesktop} href="/leagues">
                Leagues
              </Link>
            </div>
          </div>

          {/* Right Nav */}
          <div className="flex flex-row">
            {/* Mobile hamburger button */}
            <div className="flex items-center pr-3 md:hidden">
              <button
                onClick={() => {
                  setExpanded(!expanded);
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={"" + (expanded ? "block md:hidden border-b-2 border-red-800" : "hidden")}>
        <Link href={"#"} className="block px-4 py-3 text-lg">
          Search Players
        </Link>
        <Link href={"#"} className="block px-4 py-3 text-lg">
          Positions
        </Link>
        <Link href={"/clubs"} className="block px-4 py-3 text-lg">
          Clubs
        </Link>
        <Link href={"/leagues"} className="block px-4 py-3 text-lg">
          Leagues
        </Link>
      </div>
    </nav>
  );
}
