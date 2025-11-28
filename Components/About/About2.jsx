"use client";
import { useEffect, useRef, useState } from "react";

export default function About2() {
  const [active, setActive] = useState(null);
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  const cards = [
    { id: 1, title: "Quality Service", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", icon: "/image/feat-1.png" },
    { id: 2, title: "Trusted Property", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", icon: "/image/feat-2.png" },
    { id: 3, title: "24/7 Availability", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.", icon: "/image/feat-3.png" }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="w-full flex justify-center bg-[#0F362C] pb-0"
    >
      <div className="grid md:grid-cols-3 gap-6 w-full max-w-[2000px] px-6 -mt-16 md:px-2 lg:px-24">
        {cards.map((card, i) => {
          const isActive = active === card.id;

          return (
            <div
              key={card.id}
              onMouseEnter={() => setActive(card.id)}
              onMouseLeave={() => setActive(null)}
              onTouchStart={() => setActive(card.id)}
              style={{ transitionDelay: `${i * 0.2}s` }}
              className={`
                relative py-5 pl-20 
                rounded-2xl flex gap-4 cursor-pointer 
                shadow-2xl transition-all duration-700 ease-out
                ${visible ? "opacity-100 scale-100" : "opacity-0 scale-90"}
                ${isActive ? "bg-[#2D7462]" : "bg-white"}
              `}
            >

              <div className={`absolute top-0 left-0 w-[72px] h-[60px] rounded-br-xl rounded-tl-xl flex justify-center items-center transition-all duration-300 ${isActive ? "bg-white" : "bg-[#2D7462]"}`}>
                <img
                  src={card.icon}
                  className={`w-6 h-6 transition-all duration-300 ${isActive ? "invert brightness-100" : ""}`}
                />
              </div>

              <div>
                <h3 className={`font-semibold text-sm lg:text-lg transition-all duration-300 ${isActive ? "text-white" : "text-black"}`}>
                  {card.title}
                </h3>

                <p className={`mt-2 text-xs lg:text-sm leading-relaxed transition-all duration-300 ${isActive ? "text-white/80" : "text-gray-600"}`}>
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
