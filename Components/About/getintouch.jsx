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
    <section className="relative min-h-screen w-full py-20 bg-gradient-to-r from-gray-50 to-gray-100 overflow-hidden">

      {/* Background Image */}
      <Image
        src="/image/city-bg.png"
        alt="background"
        fill
        className="object-cover opacity-30"
        priority
      />

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-500">
            GET IN TOUCH
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mt-4 leading-snug">
            Your Gateway To Exceptional Properties
          </h2>

          <p className="mt-5 text-gray-600 max-w-lg text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          {/* ✅ Info Cards */}
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
            <h4 className="font-semibold mb-3 text-lg text-black">
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

          <h3 className="text-2xl font-bold text-black">Get In Touch</h3>
          <p className="text-gray-500 text-sm mt-1 mb-6">
            Lorem Ipsum is simply dummy text of the printing.
          </p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <Input label="Your Name" placeholder="John Doe" />
            <Input label="Email Address" placeholder="johndoe@gmail.com" />
            <Input label="Phone" placeholder="+91 0000000000" />

            <div>
              <label className="text-sm font-medium">Select Subject</label>
              <select className="w-full mt-2 px-4 py-3 bg-gray-50 border rounded-lg">
                <option>Select Subject</option>
                <option>Property Inquiry</option>
                <option>Booking</option>
                <option>Consultation</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="text-sm font-medium">Message</label>
              <textarea
                rows="4"
                className="w-full mt-2 px-4 py-3 bg-gray-50 border rounded-lg"
                placeholder="Enter your message"
              />
            </div>

 <button 
  type="submit"
  className="
    md:col-span-2 
    inline-flex items-center justify-center 
    bg-[#2D7462] text-white 
    px-6 py-2 
    rounded-lg 
    text-sm font-medium 
    w-fit 
    hover:bg-[#214f43] transition
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

/* ✅ INFO CARD COMPONENT */
function InfoCard({ icon, title, value }) {
  return (
    <div
      tabIndex={0}
      className="
        group cursor-pointer rounded-xl p-6 shadow-lg 
        bg-white text-black
        transition-all duration-300
        hover:bg-[#2D7462] hover:text-white
        active:bg-[#2D7462] active:text-white
        focus:bg-[#2D7462] focus:text-white
      "
    >
      <div className="flex items-center gap-3 mb-2">

        {/* ICON */}
        <div className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 group-hover:bg-white group-hover:text-[#2D7462] transition">
          {icon}
        </div>

        {/* TITLE - ONE LINE ONLY */}
        <h4 className="font-semibold truncate whitespace-nowrap">
          {title}
        </h4>
      </div>

      {/* TEXT */}
      <p className="text-sm leading-relaxed">
        {value}
      </p>
    </div>
  );
}

/* ✅ SOCIAL ICON */
function Social({ icon }) {
  return (
    <div className="w-10 h-10 rounded-full bg-[#2D7462] text-white flex items-center justify-center hover:bg-[#214f43] transition cursor-pointer">
      {icon}
    </div>
  );
}

/* ✅ INPUT FIELD */
function Input({ label, placeholder }) {
  return (
    <div>
      <label className="text-sm font-medium">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full mt-2 px-4 py-3 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D7462]/40"
      />
    </div>
  );
}
