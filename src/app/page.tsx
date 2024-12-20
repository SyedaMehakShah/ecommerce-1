

"use client"
import { useState } from "react";
import { CiUser, CiHeart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";
import Image from "next/image";
import logo from "./public/logo.jpg";
import Hero from "./components/hero";
import Main from "./components/main";
import Product from "./components/product";
import Footer from "./components/footer";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="w-full bg-slate-200 flex flex-col md:flex-row md:justify-between items-center p-4">
        {/* Logo Section */}
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="flex items-center">
            <Image
              src= {logo} 
              alt="logo"
              width={50}
              height={40}
              priority
            />
            <h1 className="text-2xl md:text-3xl font-bold ml-2">FURNIRO</h1>
          </div>
          {/* Hamburger Menu Button */}
          <button
            className="text-2xl md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <HiOutlineX /> : <HiOutlineMenu />}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:flex flex-col md:flex-row gap-4 md:gap-11 font-semibold items-center mt-4 md:mt-0`}
        >
          <ul className="flex flex-col md:flex-row gap-4 md:gap-11">
            <li className="hover:cursor-pointer hover:text-[rgb(184,142,47)]">
              Home
            </li>
            <li className="hover:cursor-pointer hover:text-[rgb(184,142,47)]">
              Shop
            </li>
            <li className="hover:cursor-pointer hover:text-[rgb(184,142,47)]">
              About
            </li>
            <li className="hover:cursor-pointer hover:text-[rgb(184,142,47)]">
              Contact
            </li>
          </ul>
        </div>

        {/* Icon Section */}
        <div className="flex gap-6 mt-4 md:mt-0 font-bold text-lg">
          <CiUser aria-label="User" />
          <CiSearch aria-label="Search" />
          <CiHeart aria-label="Favorites" />
          <MdOutlineShoppingCart aria-label="Cart" />
        </div>
      </div>

      {/* Hero Section */}
      <Hero />

      {/* Main Content */}
      <Main />

      {/* Product Section */}
      <Product />

      {/* Footer */}
      <Footer />
    </>
  );
}
