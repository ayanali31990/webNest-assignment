import React, { useState } from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#f4f4f2] shadow-sm fixed top-0 z-50">
      <div className="max-w-[1400px] mx-auto h-[70px] md:h-[90px] px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="logo"
            className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"
          />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10 text-[#5e6877] font-medium text-[13px] ml-[100px] lg:ml-[230px]">
          <a href="#about" className="hover:text-[#2f3b4a] transition">
            About
          </a>
          <a href="#service" className="hover:text-[#2f3b4a] transition">
            Service
          </a>
          <a href="#project" className="hover:text-[#2f3b4a] transition">
            Project
          </a>
          <a href="#team" className="hover:text-[#2f3b4a] transition">
            Team
          </a>
        </div>

        {/* Desktop Contact Button */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-5 lg:px-8 py-2 lg:py-3 rounded-full border-2 border-[#c79a54] text-[#4f5c6d] text-[13px] font-medium hover:bg-[#c79a54] hover:text-white transition"
        >
          Contact Us
          <span className="text-lg leading-none">→</span>
        </a>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-gray-600 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-600 transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block w-6 h-0.5 bg-gray-600 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#f4f4f2] px-6 pb-4 flex flex-col gap-4 text-[#5e6877] font-medium text-sm border-t border-gray-200">
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#2f3b4a]"
          >
            About
          </a>
          <a
            href="#service"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#2f3b4a]"
          >
            Service
          </a>
          <a
            href="#project"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#2f3b4a]"
          >
            Project
          </a>
          <a
            href="#team"
            onClick={() => setMenuOpen(false)}
            className="hover:text-[#2f3b4a]"
          >
            Team
          </a>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="self-start inline-flex items-center gap-2 px-5 py-2 rounded-full border-2 border-[#c79a54] text-[#4f5c6d] text-[13px] hover:bg-[#c79a54] hover:text-white transition"
          >
            Contact Us <span>→</span>
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
