"use client";

import Image from "next/image";

export default function MapSection() {
  return (
    <section className="w-full bg-white  ">
      <div className="w-full h-[450px] bg-white overflow-hidden shadow-lg">
        <Image
          src="/image/map.png"     // change to your map file
          alt="Map Location"
          width={2000}
          height={900}
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
}
