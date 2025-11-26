"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronDown, FiSearch, FiMic, FiTarget } from "react-icons/fi";

const images = [
  "/image/banner-bg1.png",
  "/image/banner-bg1.png",
  "/image/banner-bg1.png"
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [activeTab, setActiveTab] = useState("Buy");

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((current + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [current]);

  const tabs = ["Buy", "Rent", "Plots/Land", "New Launch", "Projects"];

  return (
    <div className="relative w-full max-w-[2700px] bg-white mx-auto">

      {/* HERO SLIDER */}
      <div className="relative h-[75vh] md:h-[75vh] w-full overflow-hidden">
        <Image
          src={images[current]}
          fill
          className="object-cover transition-all duration-700"
          alt="Banner"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[px]"></div>

        {/* TEXT */}
        <div className="relative z-20 px-6 md:px-6 lg:px-22 top-28  text-white max-w-5xl">
          <h1 className="text-1xl sm:text-2xl md:text-[44px] font-bold leading-tight drop-shadow-lg">
            Where Premium Properties
            <br />
            Meet Perfect Opportunities
          </h1>

          <p className="mt-5 text-xs md:text-[15px] font-bold text-gray-100 leading-relaxed max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting <br />
            industry. Lorem Ipsum has been the industry's standard.
          </p>

          <button className="mt-8 bg-white text-green-600 font-semibold px-7 md:px-6 py-3 md:py-3 rounded-xl shadow-lg hover:bg-green-600 hover:text-white transition-all duration-300">
            Explore Now →
          </button>
        </div>
      </div>

      {/* NAV CARD */}
      <div className="w-full px-4 md:px-25 -mt-16 md:-mt-20 relative z-30">
        <div className="bg-white rounded-2xl shadow-lg p-6">

          {/* Tabs */}
          <div className="flex gap-6 md:gap-10 border-b pb-3 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="relative font-semibold text-gray-700 whitespace-nowrap"
              >
                {tab}

                {activeTab === tab && (
                  <span className="absolute left-0 -bottom-3 w-full h-[3px] bg-green-600 rounded-full animate-[slide_0.3s_ease]"></span>
                )}
              </button>
            ))}
          </div>

          {/* SEARCH */}
          <div className="mt-6 flex flex-col md:flex-row items-center gap-4">

            {/* Dropdown */}
            <div className="flex items-center gap-2  py-3 ">
              <span className="font-semibold text-2xl md:text-xl items-start text-gray-600 ">All Residential</span>
              <FiChevronDown className="text-gray-600" size={20} />
              <hr className=" hidden lg:block w-20 text-gray-200 rotate-90 mb-3 " />
            </div>
           

            {/* Search */}
            <div className="flex items-center gap-3 border-4 md:border-0 px-3 md:px-0 py-3 rounded-xl  md:flex-1">
              <FiSearch size={22} className="text-gray-500 " />
              <input
                type="text"
                placeholder='Search "Kochi"'
                className="w-full text-2xl md:text-xl text-gray-700" 
              />
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <div className="bg-blue-50 p-3 rounded-full cursor-pointer hover:bg-blue-100">
                <FiTarget size={20} className="text-blue-600" />
              </div>
              <div className="bg-blue-50 p-3 rounded-full cursor-pointer hover:bg-blue-100">
                <FiMic size={20} className="text-blue-600" />
              </div>
            </div>

            {/* Button */}
            <button className="bg-green-600 text-white  px-6 py-2 rounded-[6px] shadow hover:bg-green-900">
              Get Started
            </button>
          </div>
        </div>
      </div>
      <div className="bg-white w-full h-[5vh]">

      </div>
    </div>

  );
}
