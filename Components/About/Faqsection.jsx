"use client";

import Image from "next/image";
import { FiPlus, FiChevronRight, FiHeadphones } from "react-icons/fi";

export default function FaqSection() {
  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">

      {/* Decorative Background Pattern */}
      <img
        src="/image/pattern-light.png"
        className="absolute w-fill  opacity-100  -z-10 pointer-events-none"

      />
      
      <div className="max-w-[1900px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 px-6 lg:px-20">

        {/* LEFT SIDE IMAGE CARD */}
        <div className="relative w-full">

          {/* Main Image */}
          <div className="relative w-full h-[380px] md:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/image/faq-main.png"   
              alt="FAQ Image"
              fill
              className="object-cover w-full h-full"
              priority
            />
          </div>

          {/* Bottom Support Card */}
          <div className="absolute bottom-0 right-0 w-full pl-28 ">
            <div className="bg-[#2D7462] rounded-r-xl p-5 flex items-start gap-4 shadow-lg">

              <div className="bg-white/20 w-10 h-10 flex items-center justify-center rounded-full text-white">
                <FiHeadphones size={20} />
              </div>

              <div>
                <h3 className="text-white text-lg font-semibold">24/7 Support</h3>
                <p className="text-white/80 text-sm">
                  Have any questions? Contact Us!
                </p>
              </div>

            </div>
          </div>
        </div>

        {/* RIGHT SIDE FAQ */}
        <div className="w-full">
          <p className="text-sm text-gray-600 font-semibold">FAQ</p>

          <h2 className="text-3xl md:text-4xl font-bold mt-2 leading-snug">
            If You Want To Know <br /> Frequently Ask Questions
          </h2>

          {/* FAQ Items */}
          <div className="mt-10 space-y-5">

            <FAQItem text="How do I search for properties on premium property exports?" />
            <FAQItem text="How do I search for properties on premium property exports?" active />
            <FAQItem text="How do I search for properties on premium property exports?" />
            <FAQItem text="How do I search for properties on premium property exports?" />

          </div>
        </div>
      </div>
    </section>
  );
}

/* FAQ ITEM COMPONENT */
function FAQItem({ text, active }) {
  return (
    <div
      className="
        w-full bg-white rounded-xl shadow-md 
        px-6 py-5 flex items-center justify-between 
        hover:shadow-lg transition cursor-pointer
      "
    >
      <p className="text-gray-700 font-medium">{text}</p>

      {/* Right Icon */}
      <div className="text-[#2D7462]">
        {active ? <FiChevronRight size={20} /> : <FiPlus size={20} />}
      </div>
    </div>
  );
}
