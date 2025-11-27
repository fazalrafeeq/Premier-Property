"use client";
import { useState } from "react";

export default function About2() {
  const [active, setActive] = useState(null);

  const cards = [
    { id: 1, title: "Quality Service", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", icon: "/image/feat-1.png" },
    { id: 2, title: "Trusted Property", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", icon: "/image/feat-2.png" },
    { id: 3, title: "24/7 Availability", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", icon: "/image/feat-3.png" }
  ];

  return (
    <section className="w-full flex justify-center bg-transparent -mt-10 pb-20">
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-[2000px] px-6 md:px-2 lg:px-20">

        {cards.map((card) => {
          const isActive = active === card.id;

          return (
            <div
              key={card.id}
              onMouseEnter={() => setActive(card.id)}   // desktop hover
              onMouseLeave={() => setActive(null)}     // desktop unhover
              onTouchStart={() => setActive(card.id)}  // mobile tap
              className={`
                relative py-5 pl-20 shadow-7xl
                rounded-2xl flex gap-4 cursor-pointer 
                transition-all duration-300
                ${isActive ? "bg-green-900" : "bg-white"}
              `}
            >

              {/* LEFT ICON BOX */}
              <div
                className={`
                  absolute top-0 left-0
                  w-18 h-15 rounded-br-xl rounded-tl-xl
                  flex justify-center items-center transition-all duration-300
                  ${isActive ? "bg-white" : "bg-green-900"}
                `}
              >
                <img
                  src={card.icon}
                  className={`
                    w-6 h-6 transition-all duration-300
                    ${isActive ? "invert brightness-100" : ""}
                  `}
                />
              </div>

              {/* TEXT BLOCK */}
              <div>
                <h3
                  className={`
                    font-semibold text-lg transition-all duration-300
                    ${isActive ? "text-white" : "text-black"}
                  `}
                >
                  {card.title}
                </h3>

                <p
                  className={`
                    mt-2 text-sm leading-relaxed transition-all duration-300
                    ${isActive ? "text-white/80" : "text-gray-600"}
                  `}
                >
                  {card.desc}
                </p>
              </div>

            </div>
          );
        })}

      </div>
    </section>
  );
}
