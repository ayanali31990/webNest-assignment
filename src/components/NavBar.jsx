import React from "react";
import logo from "../assets/logo.png";

const NavBar = () => {
  return (
    <nav className="w-full h-[90px] bg-[#f4f4f2] shadow-sm">
      <div className="max-w-[1400px] mx-auto h-full px-6 flex items-center justify-between">
        <div className="flex items-center">
          {/* <div className="w-[54px] h-[54px] border-2 border-[#c79a54] flex items-center justify-center" style={{ fontFamily: '29LT Adir' }}>
            <div className="leading-none text-[#5a6574] font-light text-[18px] tracking-[-0.08em]">
              <div>no</div>
              <div>vo</div>
            </div>
          </div> */}
          <img src={logo} alt="logo" className="w-[40px] h-[40px]" />
        </div>

        <div className="hidden md:flex items-center gap-10 text-[#5e6877] font-medium text-[13px] ml-[230px]">
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

        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-8 py-3 rounded-full border-2 border-[#c79a54] text-[#4f5c6d] text-[13px] font-medium hover:bg-[#c79a54] hover:text-white transition"
        >
          Contact Us
          <span className="text-lg leading-none">→</span>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
