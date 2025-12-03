"use client";

import Image from "next/image";
import { FiPlus, FiChevronDown, FiHeadphones } from "react-icons/fi";
import { useState } from "react";

export default function FaqSection() {
  return (
    <section className="w-full py-20 bg-white relative overflow-hidden">

      {/* Decorative Background Pattern */}
      <img
        src="/image/pattern-light.png"
        className="absolute w-fill opacity-100 -z-10 pointer-events-none"
      />

      <div className="max-w-[1900px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 px-6 lg:px-20">

        {/* LEFT SIDE */}
        <div className="relative w-full">

          <div className="relative w-full h-[380px] md:h-[460px] lg:h-[500px] rounded-3xl overflow-hidden shadow-xl">
            <Image
              src="/image/faq-main.png"
              alt="FAQ Image"
              fill
              className="object-cover w-full h-full"
              priority
            />

            {/* SUPPORT BOX */}
            <div className="absolute bottom-0 right-0 w-full pl-28">
              <div className="bg-[#2D7462] rounded-tl-2xl rounded-br-2xl p-5 flex items-start gap-4 shadow-lg">

                <div className="bg-white/20 w-12 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full text-white">
                  <FiHeadphones size={20} />
                </div>

                <div>
                  <h3 className="text-white text-xm md:text-lg font-semibold">24/7 Support</h3>
                  <p className="text-white/80 text-xs md:text-sm">
                    Have any questions? Contact Us!
                  </p>
                </div>

              </div>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE FAQ */}
        <div className="w-full">
          <p className="text-sm text-gray-700 font-semibold">FAQ</p>

          <h2 className="text-xm sm:text-3xl md:text-4xl text-black font-bold mt-2 leading-snug">
            If You Want To Know <br /> Frequently Ask Questions
          </h2>

          <div className="mt-10 text-xs md:text-base space-y-6   ">

            <FAQItem
              question="How do I search for properties on premium property exports?"
              answer="You can easily search by location, price, type, or amenities. Advanced filters help you narrow it down."
            />

            <FAQItem
              question="How do I contact customer support?"
              answer="You can reach our support team anytime using live chat, phone, or email — available 24/7."
            />

            <FAQItem  
              question="Can I schedule a site visit?"
              answer="Yes, you can book appointments through the website or by contacting our support team."
            />

            <FAQItem
              question="Are there any service charges?"
              answer="Service charges may apply depending on the property type. Check details on each listing page."
            />

          </div>
        </div>
      </div>
    </section>
  );
}

/* FAQ ITEM WITH OPEN/CLOSE */
function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="w-full bg-white rounded-xl shadow-md px-6 py-5 cursor-pointer hover:bg-gray-200 transition"
      onClick={() => setOpen(!open)}
    >
      {/* TOP SECTION */}
      <div className="flex items-center justify-between">
        <p className="text-black font-medium">{question}</p>

        <div
          className={`text-[#2D7462] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          <FiChevronDown size={22} />
        </div>
      </div>

      {/* DROPDOWN ANSWER */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[200px] mt-3" : "max-h-0"
        }`}
      >
        <p className="text-gray-600 text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
