"use client";

import { useState } from "react";
import { IoChevronDown, IoClose } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineBars3BottomRight } from "react-icons/hi2";

export default function Navbar() { 
  const [open, setOpen] = useState(false);

  const menuItems = ["Home", "About Us", "Services", "Contact Us"];

  // Close menu after clicking a mobile item
  const handleMenuClick = () => {
    setOpen(false);
  };

  return (
    <div className="w-full bg-white py-4 shadow-sm">
      <div
        className="
        relative w-full max-w-[2400px] mx-auto 
        px-3 md:px-4 lg:px-18 
        flex items-center justify-between
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
                transition-all duration-200
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
              <p className="font-medium text-black text-sm">Call Us Now</p>
              <p className="text-xs text-gray-500">Ph No:+91 0000000000</p>
            </div>
          </div>
        </div>

        {/* -------- Mobile Menu Icon (Toggle) -------- */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-black pt-5 rounded-lg active:bg-gray-100"
        >
          {open ? (
            <IoClose size={40} className="text-black" />
          ) : (
            <HiOutlineBars3BottomRight size={38} className="text-black" />
          )}
        </button>
      </div>

      {/* -------- Mobile Dropdown -------- */}
      {open && (
        <div className="md:hidden bg-white shadow-md px-4 py-4 space-y-3">
          {menuItems.map((item) => (
            <p
              key={item}
              onClick={handleMenuClick}
              className="
                py-2 text-black font-medium border-b px-2 rounded-md

                /* mobile green effect */
                hover:bg-[#2E7361] hover:text-white
                active:bg-[#2E7361] active:text-white
                focus:bg-[#2E7361] focus:text-white

                /* disable on desktop */
                md:hover:bg-transparent md:hover:text-black
                md:active:bg-transparent md:active:text-black

                transition-all duration-150
              "
            >
              {item}
            </p>
          ))}

          {/* Phone section (mobile only) */}
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
