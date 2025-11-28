"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function Stats() {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState([0, 0, 0, 0]);

  const stats = [
    { value: 1245, label: "Happy Clients", icon: "/image/stat-1.png" },
    { value: 3452, label: "Projects Completed", icon: "/image/stat-2.png" },
    { value: 1, label: "Years of Experience", icon: "/image/stat-3.png" },
    { value: 20, label: "Professional Team", icon: "/image/stat-4.png" }
  ];

  // ✅ Detect when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); // only once
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // ✅ Count animation starts only when visible
  useEffect(() => {
    if (!visible) return;

    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 1500;
      const increment = Math.ceil(end / (duration / 20));

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }

        setCounts((prev) => {
          const newCounts = [...prev];
          newCounts[index] = start;
          return newCounts;
        });
      }, 20);
    });
  }, [visible]);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-[#0F362C] py-16"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* ✅ Responsive Grid */}
        <div className="
          grid grid-cols-2 
          lg:grid-cols-4 
          gap-10 
          text-center
        ">
          {stats.map((item, i) => (
            <div
              key={i}
              className={`
                flex flex-col items-center justify-center
                transition-all duration-500
                ${visible ? "opacity-100 animate-fadeUp" : "opacity-0"}
                hover:scale-110
              `}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              <Image
                src={item.icon}
                alt={item.label}
                width={48}
                height={48}
                className="mb-4 md:w-10 w-5"
              />

              <p className="md:text-2xl text-1xl font-bold text-white">
                {counts[i]}+
              </p>

              <p className="text-xs md:text-sm text-gray-400 mt-1 whitespace-nowrap">
                {item.label}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* ✅ Animation */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease forwards;
        }
      `}</style>
    </section>
  );
}
