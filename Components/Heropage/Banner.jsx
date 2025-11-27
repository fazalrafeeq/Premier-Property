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
  const [activeType, setActiveType] = useState("All Residential");
  const [openTypeDropdown, setOpenTypeDropdown] = useState(false);

  const tabs = ["Buy", "Rent", "Plots/Land", "New Launch", "Projects"];
  const propertyTypes = ["All Residential", "Apartment", "Villa", "Plot", "Commercial"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const handleExploreClick = () => {
    console.log("Explore clicked");
  };

  const handleGetStarted = () => {
    console.log("Get Started clicked");
  };

  return (
    <div className="relative w-full max-w-[2700px] bg-white mx-auto">

      {/* HERO SLIDER */}
      <div className="relative h-[75vh] w-full overflow-hidden">
        <Image
          src={images[current]}
          fill
          className="object-cover transition-all duration-700"
          alt="Banner"
          priority
        />

        <div className="absolute inset-0 bg-black/50"></div>

        {/* TEXT */}
        <div className="relative z-20 px-6 lg:px-22 top-28 text-white max-w-7xl">
          <h1 className="text-2xl md:text-[44px] lg:text-[58px] font-bold leading-tight">
            Where Premium Properties
            <br />
            Meet Perfect Opportunities
          </h1>

          <p className="mt-5 lg:mt-1 text-xs md:text-[16px] lg:text-[20px] font-medium text-gray-200 max-w-xl">
            Lorem Ipsum is simply dummy text of the printing and typesetting <br />
            industry. Lorem Ipsum has been the industry's standard.
          </p>

          {/* Explore Now Button */}
          <button
            onClick={handleExploreClick}
            className="
              mt-8 lg:mt-5
              bg-white text-green-600 
              font-semibold 
              px-7 py-3 
              rounded-xl shadow-lg 
              transition-all duration-200 
              active:scale-95 active:bg-green-600 active:text-white
              hover:bg-green-600 hover:text-white
            "
          >
            Explore Now →
          </button>
        </div>
      </div>

      {/* NAV CARD */}
      <div className="w-full px-6 md:px-25 -mt-16 md:-mt-20 relative z-30">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">

          {/* TABS */}
          <div className="flex gap-6 md:gap-10 border-b pb-3 pt-2 overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative text-lg md:text-xl font-semibold whitespace-nowrap transition-all
                  ${activeTab === tab 
                    ? "text-black" 
                    : "text-gray-400 hover:text-black"}
                `}
              >
                {tab}

                {activeTab === tab && (
                  <span className="absolute left-0 -bottom-3 w-full h-[3px] bg-green-600 rounded-full"></span>
                )}
              </button>
            ))}
          </div>

          {/* SEARCH SECTION */}
          <div className="mt-6 flex flex-col md:flex-row items-center gap-4">

            {/* TYPE DROPDOWN */}
            <div className="relative">
              <button 
                onClick={() => setOpenTypeDropdown(!openTypeDropdown)} 
                className="flex items-center gap-2 py-3 font-semibold text-lg text-gray-700"
              >
                {activeType}
                <FiChevronDown size={20} />
                 <hr className="w-20 text-gray-200 rotate-90 px-12.5 hidden lg:block " />
              </button>

              {openTypeDropdown && (
                <div className="absolute top-12 left-0 bg-white shadow-lg rounded-lg w-48 z-40 border">
                  {propertyTypes.map((type) => (
                    <p 
                      key={type}
                      onClick={() => {
                        setActiveType(type);
                        setOpenTypeDropdown(false);
                      }}
                      className="px-4 py-2 cursor-pointer hover:bg-green-100 text-gray-700"
                    >
                      {type}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* SEARCH BAR (Mobile background only) */}
            <div className="
              flex items-center gap-3 w-full md:flex-1 
              px-0 py-3 rounded-xl 
              bg-gray-100 md:bg-transparent
            ">
              <FiSearch size={22} className="text-gray-500" />
              <input
                type="text"
                placeholder='Search "Kochi"'
                className="w-full bg-transparent outline-none text-lg text-gray-700 placeholder-gray-500"
              />
            </div>

            {/* ICONS */}
            <div className="flex items-center gap-4">
              <div className="bg-blue-50 p-3 rounded-full cursor-pointer hover:bg-blue-100 active:scale-90">
                <FiTarget size={20} className="text-blue-500" />
              </div>
              <div className="bg-blue-50 p-3 rounded-full cursor-pointer hover:bg-blue-100 active:scale-90">
                <FiMic size={20} className="text-blue-500" />
              </div>
            </div>

            {/* GET STARTED BUTTON */}
            <button
              onClick={handleGetStarted}
              className="
                bg-green-600 text-white 
                px-6 py-3 
                rounded-md shadow 
                transition-all duration-200
                active:scale-95 
                hover:bg-green-800
              "
            >
              Get Started
            </button>

          </div>
        </div>
      </div>

      {/* Spacer */}
      <div className="bg-white w-full h-[6vh]"></div>
    </div>
  );
}
