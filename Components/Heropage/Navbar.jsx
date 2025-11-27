"use client";

import { useState } from "react";
import { IoChevronDown, IoClose } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

export default function Navbar() { 
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "About Us", "Services", "Contact Us"];

  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <div className="w-full bg-white shadow-sm relative z-50">
      
      {/* Navbar Container */}
      <div
        className="
          relative w-full max-w-[2400px] mx-auto 
          px-3 md:px-4 lg:px-18 
          flex items-center justify-between
          h-[80px]
        "
      >
        
        {/* Logo */}
        <img src="/image/Navbar-bg.png" alt="Logo" className="w-28" />

        {/* -------- Desktop Menu -------- */}
        <div className="hidden md:flex items-center gap-1">
          {menuItems.map((item) => (
            <button
              key={item}
              className="
                px-5 py-2 rounded-md font-medium text-black 
                hover:bg-[#2E7361] hover:text-white
                transition-all duration-200 text-xs lg:text-xl 
              "
            >
              {item}
              {item === "Services" && (
                <IoChevronDown className="inline ml-1 text-sm" />
              )}
            </button>
          ))}

          {/* Call Section */}
          <div className="flex items-center gap-3 ml-4">
            <div className="bg-[#2E7361] text-white p-2 rounded-md">
              <FiPhoneCall size={20} />
            </div>
            <div>
              <p className="font-medium text-black lg:text-xl text-sm">Call Us Now</p>
              <p className="text-xs text-gray-500">Ph No:+91 0000000000</p>
            </div>
          </div>
        </div>

        {/* -------- Mobile Menu Icon -------- */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black relative z-50"
        >
          {open ? (
            <IoClose size={40} />
          ) : (
            <HiOutlineBars3BottomRight size={38} />
          )}
        </button>
      </div>

      {/* -------- Mobile Dropdown -------- */}
      {open && (
        <div className="
          md:hidden 
          absolute top-[80px] left-0 w-full 
          bg-white shadow-xl 
          z-40
          px-4 py-4 space-y-3
        ">
          {menuItems.map((item) => (
            <p
              key={item}
              onClick={handleMenuClick}
              className="
                py-2 text-black font-medium border-b px-3 rounded-md

                hover:bg-[#2E7361]/10 hover:text-[#2E7361]
                active:bg-[#2E7361]/20 active:text-[#2E7361]

                transition-all duration-200
              "
            >
              {item}
            </p>
          ))}

          {/* Phone Section */}
          <div className="flex items-center gap-3 pt-3">
            <div className="bg-[#2E7361] text-white p-2 rounded-md">
              <FiPhoneCall size={20} />
            </div>
            <div>
              <p className="font-medium text-black text-sm">Call Us Now</p>
              <p className="text-xs text-gray-500">Ph No:+91 0000000000</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
