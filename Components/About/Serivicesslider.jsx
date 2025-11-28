"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function ServicesSection() {

  const services = [
    { title: "Real-Estate Ad Videos", desc: "Lorem ipsum is simply dummy text of the printing industry.", icon: "/image/service-1.png" },
    { title: "Rental Solutions", desc: "Lorem ipsum is simply dummy text of the printing industry.", icon: "/image/service-2.png" },
    { title: "Property Maintenance & Management", desc: "Lorem ipsum is simply dummy text of the printing industry.", icon: "/image/service-3.png" },
    { title: "Interior Design Services", desc: "Lorem ipsum is simply dummy text of the printing industry.", icon: "/image/service-1.png" },
    { title: "Property Consultation", desc: "Lorem ipsum is simply dummy text of the printing industry.", icon: "/image/service-2.png" },
    { title: "Smart Property Solutions", desc: "Lorem ipsum is simply dummy text of the printing industry.", icon: "/image/service-3.png" },
  ];

  const [index, setIndex] = useState(0);
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const [activeCard, setActiveCard] = useState(null);

  useEffect(() => {
    const updateCards = () => {
      if (window.innerWidth < 768) setCardsPerSlide(1);
      else if (window.innerWidth < 1024) setCardsPerSlide(2);
      else setCardsPerSlide(3);
    };

    updateCards();
    window.addEventListener("resize", updateCards);
    return () => window.removeEventListener("resize", updateCards);
  }, []);

  const totalSlides = Math.ceil(services.length / cardsPerSlide);

  const next = () => {
    if (index < totalSlides - 1) setIndex(index + 1);
  };

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <section className="w-full bg-white py-20">

      {/* HEADER */}
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center">

          <div>
            <p className="text-sm md:text-lg uppercase tracking-widest text-gray-500 font-semibold">
              OUR SERVICES
            </p>
            <h2 className="mt-2 text-2xl md:text-3xl font-bold text-black">
              What Service We Offer
            </h2>
          </div>

          <div>
            <p className="text-gray-600 text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit,  
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

        </div>
      </div>

      {/* SLIDER */}
      <div className="relative max-w-[1200px] mx-auto px-6 mt-16">

        {/* BACK BUTTON */}
        <button
          onClick={prev}
          disabled={index === 0}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-40"
        >
          <FiChevronLeft size={22} className="text-gray-400" />
        </button>

        {/* FORWARD BUTTON */}
        <button
          onClick={next}
          disabled={index === totalSlides - 1}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center disabled:opacity-40"
        >
          <FiChevronRight size={22} className="text-[#2D7462]" />
        </button>

        {/* SLIDER CONTAINER */}
        <div className="overflow-hidden py-8">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >

            {services.map((item, i) => {
              const isActive = activeCard === i;

              return (
                <div
                  key={i}
                  className="min-w-full md:min-w-[70%] lg:min-w-[33.333%] px-5"
                >

                  {/* CARD */}
                  <div
                    onClick={() => setActiveCard(i)}
                    className={`
                      h-full flex flex-col justify-between 
                      p-8 rounded-2xl cursor-pointer transition-all duration-300
                      ${isActive ? "bg-[#2D7462]" : "bg-white"}
                      hover:bg-[#2D7462] group

                      /* ✅ VISIBLE TOP + BOTTOM SHADOW */
                      shadow-[0_12px_35px_rgba(0,0,0,0.15)]
                      hover:shadow-[0_18px_50px_rgba(0,0,0,0.2)]
                    `}
                  >

                    {/* ICON */}
                    <div className="w-14 h-14 mb-5">
                      <Image
                        src={item.icon}
                        alt="icon"
                        width={56}
                        height={56}
                        className={`transition ${
                          isActive
                            ? "invert brightness-0"
                            : "group-hover:invert group-hover:brightness-0"
                        }`}
                      />
                    </div>

                    {/* CONTENT */}
                    <div>
                      <h3 className={`text-lg font-bold transition ${
                        isActive 
                          ? "text-white" 
                          : "text-black group-hover:text-white"
                      }`}>
                        {item.title}
                      </h3>

                      <p className={`mt-3 text-sm transition ${
                        isActive 
                          ? "text-white/90" 
                          : "text-gray-600 group-hover:text-white/90"
                      }`}>
                        {item.desc}
                      </p>
                    </div>

                    {/* BUTTON */}
                    <a 
                      href="#"
                      className={`mt-6 text-sm font-semibold transition ${
                        isActive
                          ? "text-white"
                          : "text-[#2D7462] group-hover:text-white"
                      }`}
                    >
                      Read More →
                    </a>

                  </div>

                </div>
              );
            })}

          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-8 gap-3">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3.5 h-3.5 rounded-full transition ${
                index === i ? "bg-[#2D7462]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
