"use client";
import Link from "next/link";
import { useState } from "react";
import { FaX } from "react-icons/fa6";
import { RiMenu2Line } from "react-icons/ri";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full h-16 bg-gray-800 text-white flex items-center px-8 relative z-50">
      {/* desktop menu */}
      <div className="flex items-center justify-between w-full gap-5">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 48 48"
              className="w-8 h-8"
              fill="none"
            >
              <circle cx="24" cy="24" r="22" stroke="white" strokeWidth="3" />
              <path
                d="M14 30L24 14L34 30"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="text-xl font-bold">Next</span>
          </div>
        </Link>

        <div>
          <ul className="hidden md:flex items-center justify-center gap-5">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <Link href="/gallery">Gallery</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaX /> : <RiMenu2Line />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center justify-center gap-5 py-4 md:hidden">
          <Link href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link href="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link href="/contact" onClick={toggleMenu}>
            Contact
          </Link>
          <Link href="/gallery" onClick={toggleMenu}>
            Gallery
          </Link>
        </div>
      )}
    </nav>
  );
}
