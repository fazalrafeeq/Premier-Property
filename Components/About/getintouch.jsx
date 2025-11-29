"use client";

import Image from "next/image";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiFacebook,
  FiInstagram,
  FiTwitter,
  FiYoutube,
} from "react-icons/fi";

export default function GetInTouch() {
  return (
    <section
      className="
        relative 
        min-h-screen 
        
        2xl:min-h-[70vh]
        w-full 
        py-20
        overflow-hidden
      "
    >
      {/* Background Image */}
      <div className="absolute inset-0  bg-white -z-20">
        <Image
          src="/image/get-bg-1.png"
          alt="background"
          fill
          className="object-cover object-center w-full h-full"
          priority
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 to-white/30 -z-10"></div>

      {/* Content */}
      <div className="relative max-w-[1900px] mx-auto px-7 md:px-20 grid grid-cols-1 lg:grid-cols-2 gap-16 z-10">

        {/* LEFT SIDE */}
        <div>
          <p className="uppercase text-xs md:text-sm tracking-widest text-gray-700">
            GET IN TOUCH
          </p>

          <h2 className="text-xl md:text-4xl font-bold mt-4 leading-snug text-black">
            Your Gateway To Exceptional Properties
          </h2>

          <p className="mt-5 text-gray-900 max-w-lg text-xs md:text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
          </p>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">

            <InfoCard
              icon={<FiPhone size={22} />}
              title="Phone Number"
              value="+91 0000000000"
            />

            <InfoCard
              icon={<FiMail size={22} />}
              title="Email Address"
              value="premium@gmail.com"
            />

            <InfoCard
              icon={<FiMapPin size={22} />}
              title="Location"
              value="Lorem Ipsum is simply dummy text"
            />

          </div>

          {/* Social Icons */}
          <div className="mt-10">
            <h4 className="font-semibold mb-3 text-xs md:text-lg text-black">
              Follow Our Social Media
            </h4>

            <div className="flex gap-4">
              <Social icon={<FiFacebook />} />
              <Social icon={<FiInstagram />} />
              <Social icon={<FiTwitter />} />
              <Social icon={<FiYoutube />} />
            </div>
          </div>
        </div>

        {/* RIGHT FORM */}
        <div className="bg-white rounded-2xl shadow-xl p-8">

          <h3 className="text-xl md:text-2xl font-bold text-black">Get In Touch</h3>
          <p className="text-gray-600 text-xs md:text-sm mt-1 mb-6">
            Lorem Ipsum is simply dummy text of the printing.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Input label="Your Name" placeholder="John Doe" />
            <Input label="Email Address" placeholder="johndoe@gmail.com" />
            <Input label="Phone" placeholder="+91 0000000000" />

            <div>
              <label className="text-xs md:text-sm font-bold text-black">Select Subject</label>
              <select className="w-full mt-2 px-4 py-3 bg-gray-50 text-black rounded-lg">
                <option>Select Subject</option>
                <option>Property Inquiry</option>
                <option>Booking</option>
                <option>Consultation</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="text-xs md:text-sm font-bold text-black">Message</label>
              <textarea
                rows="4"
                className="w-full mt-2 px-4 py-3 bg-gray-50 text-black rounded-lg"
                placeholder="Enter your message"
              />
            </div>

            <button
              type="submit"
              className="
                md:col-span-2 
                inline-flex items-center justify-center 
                bg-[#2D7462] text-white 
                px-6 py-2 rounded-lg 
                text-sm font-medium 
                hover:bg-[#214f43] transition
                w-fit
              "
            >
              Submit →
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}


/* ⭐ FINAL INFO CARD — MOBILE TAP + DESKTOP HOVER */
function InfoCard({ icon, title, value }) {
  return (
    <div
      tabIndex={0}
      className="
        group cursor-pointer rounded-xl p-6 shadow-lg 
        bg-white text-black text-xs
        transition-all duration-300 select-none touch-none

        /* Hover + Tap (ALL devices) */
        hover:bg-[#2D7462] 
        hover:text-white
        focus:bg-[#2D7462] 
        focus:text-white
        active:bg-[#2D7462]
        active:text-white
      "
    >
      <div className="flex items-center gap-2 mb-2">

        {/* ICON */}
        <div
          className="
            flex items-center justify-center w-10 h-10 rounded-full 
            bg-gray-100 text-[#2D7462]
            transition-all

            /* Hover + Tap */
            group-hover:bg-white group-hover:text-[#2D7462]
            group-focus:bg-white group-focus:text-[#2D7462]
            group-active:bg-white group-active:text-[#2D7462]
          "
        >
          {icon}
        </div>

        <h4 className="font-bold text-xs truncate whitespace-nowrap">
          {title}
        </h4>
      </div>

      <p className="text-xs leading-relaxed">{value}</p>
    </div>
  );
}


/* SOCIAL ICON */
function Social({ icon }) {
  return (
    <div className="w-10 h-10 rounded-full bg-[#2D7462] text-white flex items-center justify-center hover:bg-[#214f43] transition cursor-pointer">
      {icon}
    </div>
  );
}


/* INPUT FIELD */
function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-xs md:text-sm font-bold text-black">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full mt-2 px-4 py-3 bg-gray-100 text-black rounded-lg focus:outline-none"
      />
    </div>
  );
}
