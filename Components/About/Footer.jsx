"use client";

import { FiFacebook, FiInstagram, FiTwitter, FiYoutube, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#052213] text-white pt-10 ">

      {/* MAIN FOOTER */}
      <div className="max-w-[1900px] mx-auto px-6 lg:px-15 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">

        {/* LOGO + DESCRIPTION */}
        <div className="col-span-1">
          <Image
            src="/image/footer-logo.png"
            alt="logo"
            width={140}
            height={100}
            className="mb-10"
          />

          <p className="text-gray-300 text-xs md:text-xm leading-relaxed max-w-xs">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-6">
            {[
              <FiFacebook />,
              <FiInstagram />,
              <FiTwitter />,
              <FiYoutube />,
            ].map((icon, i) => (
              <div
                key={i}
                className="w-10 h-10 bg-white hover:bg-white/20 transition text-bold rounded-full flex items-center justify-center text-green-400"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="mt-5">
          <h3 className="text-xm  md:text-xl font-semibold mb-3  md:mb-5">Quick Links</h3>
          <ul className="space-y-5 text-gray-300 text-xs md:text-sm">
            <li className="hover:text-white cursor-pointer">Homepage</li>
            <li className="hover:text-white cursor-pointer">All Listings</li>
            <li className="hover:text-white cursor-pointer">All Locations</li>
            <li className="hover:text-white cursor-pointer">Package</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div className="mt-5">
          <h3 className="text-xm md:text-xl font-semibold mb-3  md:mb-5">Services</h3>
          <ul className="space-y-5 text-gray-300 text-xs md:text-sm">
            <li className="hover:text-white cursor-pointer">Real-Estate Ad Videos</li>
            <li className="hover:text-white cursor-pointer">Rental Solutions</li>
            <li className="hover:text-white cursor-pointer">Buying & Selling</li>
            <li className="hover:text-white cursor-pointer">Property Maintenance & Management</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div className="mt-5">
          <h3 className="text-sm md:text-xl font-semibold mb-3  md:mb-5">Get In Touch</h3>

          <div className="flex items-start gap-3 text-gray-300 text-xs md:text-sm mb-4">
            <FiPhone className="mt-1" />
            <span>+91 000000000</span>
          </div>

          <div className="flex items-start gap-3 text-gray-300 text-xs md:text-sm mb-4">
            <FiMail className="mt-1" />
            <span>premiumproperty@gmail.com</span>
          </div>

          <div className="flex items-start gap-3 text-gray-300 text-xs md:text-sm">
            <FiMapPin className="mt-1" />
            <span>
              Mangalassery Tower, Eloor Rd, Opposite Ganapathy Temple, Ernakulam
            </span>
          </div>
        </div>

      </div>

      {/* BOTTOM BAR */}
      <div className="border-t bg-[#031B0F] border-white/10 py-5 mt-4 pt-6">
        <div className="max-w-[1900px] mx-auto px-6 lg:px-15 flex flex-col md:flex-row justify-between items-center text-gray-400 text-xs md:text-sm">

          <p>
            © 2025 PremiumPropertyExports. All rights reserved. Developed by{" "}
            <span className="text-green-300 text-xs md:text-sm cursor-pointer hover:underline">
              Flipmaxx Global LLP
            </span>
          </p>

          <div className="flex gap-8 mt-4 md:mt-0">
            <span className="cursor-pointer text-xs md:text-sm hover:text-white">Privacy Policy</span>
            <span className="cursor-pointer text-xs md:text-sm hover:text-white">Terms & Conditions</span>
          </div>

        </div>
      </div>

    </footer>
  );
}
