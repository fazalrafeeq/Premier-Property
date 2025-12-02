"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function CleaningSection() {
  const stats = [
    { number: "208K", label: "Instagram " },
    { number: "506K", label: "Youtube" },
    { number: "4.8", label: "Google ", stars: true },
    { number: "300K", label: "Facebook" },
    { number: "111K", label: "Twitter" },
  ];

  return (
    <section className="w-full bg-white md:py-10 py-5 px-4 md:px-30">
      <div className="max-w-[1900px] mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-black">
          Keeping The Environment
        </h2>

        <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold text-black mt-1">
          Clean Together
        </h3>

        <p className="text-gray-500 text-xs md:text-sm font-light mt-7 max-w-xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>

        {/* TOP IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <AnimatedImage><TopImage src="/image/cl-img1.png" /></AnimatedImage>
          <AnimatedImage><TopImage src="/image/cl-img2.png" /></AnimatedImage>
          <AnimatedImage><TopImage src="/image/cl-img3.png" /></AnimatedImage>
        </div>

        {/* IMAGE 4 & 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <AnimatedImage><ImageBlock src="/image/cl-img4.png" /></AnimatedImage>
          <AnimatedImage><ImageBlock src="/image/cl-img5.png" /></AnimatedImage>
        </div>

        {/* STATS SECTION (Animated) */}
        <AnimatedImage>
          <div className="mt-16">
            <div className="grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5 md:gap-8 gap- items-center justify-center text-center">
              {stats.map((item, i) => (
                <div key={i} className="flex flex-col items-center justify-center">
                  
                  <h3 className="md:text-2xl lg:text-4xl text-xs font-semibold text-black">
                    {item.number}
                  </h3>

                  {item.stars && (
                    <div className="flex justify-center md:gap-4 my-1 text-green-600 text-xs">
                      ★ ★ ★ ★ ★
                    </div>
                  )}

                  <p className="text-gray-500 text-xs md:text-sm font-bold text-center">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedImage>
      </div>
    </section>
  );
}

/* TOP IMAGE COMPONENT */
function TopImage({ src }) {
  return (
    <div className="overflow-hidden rounded-xl shadow-md">
      <Image
        src={src}
        alt="cleaning"
        width={400}
        height={400}
        className="w-full h-[370px] object-cover"
      />
    </div>
  );
}

/* BOTTOM IMAGE COMPONENT */
function ImageBlock({ src }) {
  return (
    <div>
      <div className="overflow-hidden rounded-xl shadow-lg">
        <Image
          src={src}
          alt="image"
          width={600}
          height={400}
          className="w-full h-[370px] object-cover"
        />
      </div>

      <p className="mt-4 text-gray-600 text-xs leading-relaxed text-left">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry...
      </p>
    </div>
  );
}

/* ✨ ANIMATION WRAPPER COMPONENT */
function AnimatedImage({ children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // Detect when image enters the screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.5}
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`
        transition-all duration-[900ms] ease-out 
        ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
      `}
    >
      {children}
    </div>
  );
}
