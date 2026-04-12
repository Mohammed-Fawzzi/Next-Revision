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
      <div className="flex items-center w-full">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
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
        </Link>

        {/* Links - Center */}
        <div className="hidden md:flex flex-1 justify-center">
          <ul className="flex items-center gap-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/gallery">Gallery</Link></li>
          </ul>
        </div>

        {/* Auth Buttons - Right */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/signin"
            className="px-4 py-1.5 border border-white rounded-lg hover:bg-white hover:text-gray-800 transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-4 py-1.5 bg-blue-500 rounded-lg hover:bg-blue-600 transition"
          >
            Register
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden ml-auto cursor-pointer" onClick={toggleMenu}>
          {isMenuOpen ? <FaX /> : <RiMenu2Line />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-gray-800 text-white flex flex-col items-center gap-5 py-4 md:hidden">
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <Link href="/about" onClick={toggleMenu}>About</Link>
          <Link href="/contact" onClick={toggleMenu}>Contact</Link>
          <Link href="/gallery" onClick={toggleMenu}>Gallery</Link>

          {/* Auth in mobile */}
          <div className="flex gap-3 mt-2">
            <Link href="/signin" onClick={toggleMenu}>Login</Link>
            <Link href="/signup" onClick={toggleMenu}>Register</Link>
          </div>
        </div>
      )}
    </nav>
  );
}