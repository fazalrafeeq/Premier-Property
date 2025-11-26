"use client";

import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { IoChevronForward } from "react-icons/io5";

export default function Topbar() {
  return (
    <div
      className="
        w-full 
        bg-[#005943]
        text-white
        h-10 py-1
        relative
        overflow-hidden
        flex
        items-center
      "
    >
      {/* Background Pattern Layer  */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/image/topbar-bg.png')" }}
      ></div>

      {/* Content */}
      <div className="relative w-full max-w-[2400px] mx-auto px-3 lg:px-18 md:px-4 flex items-center justify-between">
        {/* LEFT TEXT */}
        <h1 className="text-sm md:text-base font-medium whitespace-nowrap">
          Welcome to Premium Property Exports
        </h1>

        {/* RIGHT ICONS (SHOW ON MD+) */}
        <div className="hidden md:flex items-center gap-5 text-lg whitespace-nowrap">

          <FaFacebookF className="cursor-pointer hover:opacity-75 duration-200" />
          <FaInstagram className="cursor-pointer hover:opacity-75 duration-200" />
          <FaLinkedinIn className="cursor-pointer hover:opacity-75 duration-200" />

          {/* Language Selector */}
          <div className="flex items-center gap-2 ml-2 cursor-pointer hover:opacity-75 duration-200">
            <HiOutlineGlobeAlt className="text-white text-xl" />
            <span className="text-sm">En</span>
            <IoChevronForward className="text-white text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
