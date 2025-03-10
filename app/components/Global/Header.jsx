"use client";
import { useState } from "react";
import { FiMenu, FiX, FiHeart, FiChevronDown } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-md">
      {/* Topbar */}
      <div className="flex justify-end bg-primary p-2 text-white text-sm items-center space-x-2 pr-4">
  {/* English Flag */}
  <Image src="/english.png" alt="English Flag" width={20} height={14} className="rounded-sm" />

  {/* Language Text */}
  <span>English</span>

  {/* Dropdown Icon */}
  <FiChevronDown className="text-secondary text-xs" />
</div>


      {/* Main Header */}
      <div className="flex items-center justify-between p-4 md:p-2 md:py-4">
        {/* Logo */}
        <div className="flex items-center">
          <Image src="/mainlogo.png" alt="Logo" width={120} height={40} />
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 text-primary font-roboto">
          <Link href="#" className="hover:text-secondary">RENT/BUY</Link>
          <Link href="#" className="hover:text-secondary">AREA ▼</Link>
          <Link href="#" className="hover:text-secondary">PROJECT ▼</Link>
          <Link href="#" className="hover:text-secondary">DEVELOPER ▼</Link>
          <Link href="#" className="hover:text-secondary">LIST YOUR PROPERTY</Link>
        </nav>

        {/* Wishlist & Button (Right Side) */}
        <div className="flex items-center ">
        <div className="bg-secondary text-black mr-2 px-4 py-2 rounded-full font-medium hidden md:block">
            Free Consultation <span className="ml-1"> →</span> 
          </div>
          <div className="hidden md:block bg-[#a7a7a73d] p-2">
          <FiHeart className="text-secondary   text-xl " />
          </div>

          {/* Mobile Menu Icon */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FiX className="text-primary text-2xl" /> : <FiMenu className="text-primary text-2xl" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg p-4 absolute w-full top-14 left-0">
          <nav className="flex flex-col space-y-4 text-primary font-roboto">
            <Link href="#" className="hover:text-secondary">RENT/BUY</Link>
            <Link href="#" className="hover:text-secondary">AREA ▼</Link>
            <Link href="#" className="hover:text-secondary">PROJECT ▼</Link>
            <Link href="#" className="hover:text-secondary">DEVELOPER ▼</Link>
            <Link href="#" className="hover:text-secondary">LIST YOUR PROPERTY</Link>
            <button className="bg-secondary text-white px-4 py-2 rounded-full">
              Free Consultation →
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
