"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";

export default function BlogSection() {
  const blogs = [
    {
      id: 1,
      image: "/image/blog1.png", 
      author: "Erin Bun",
      date: "jun, 2025",
      title: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting.",
    },
    {
      id: 2,
      image: "/image/blog2.png",
      author: "Erin Bun",
      date: "jun, 2025",
      title: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting.",
    },
    {
      id: 3,
      image: "/image/blog3.png",
      author: "Erin Bun",
      date: "jun, 2025",
      title: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting.",
    }
  ];

  return (
    <section className="w-full px-6 md:px-20 max-w-[2700px] py-20 bg-white">
      {/* TITLE */}
      <div className="text-center max-w-2xl mx-auto px-4">
        <p className="text-xs md:text-sm tracking-wide text-gray-500 font-semibold">
          OUR BLOGS
        </p>
        <h2 className="text-1xl text-black md:text-3xl font-bold mt-3">
          Your Gateway To Exceptional Properties
        </h2>
        <p className="mt-3 text-gray-600 text-xs md:text-xm lg:text-base leading-relaxed">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
        </p>
      </div>

      {/* BLOG GRID */}
      <div className="max-w-[1900px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16 px-5 md:px-10">

        {blogs.map((blog) => (
          <div key={blog.id} className="w-full">
            
            {/* IMAGE */}
            <div className="relative w-full h-[260px] rounded-2xl overflow-hidden shadow">
              <Image
                src={blog.image}
                alt="Blog Image"
                fill
                className="object-cover w-full h-full"
              />
            </div>

            {/* INFO */}
            <div className="mt-4">
              <p className="text-gray-500 text-xs">
                {blog.author} • {blog.date}
              </p>

              <h3 className="font-bold text-xs md:text-lg mt-2 leading-snug text-black">
                {blog.title}
              </h3>

              <button className="text-[#2D7462] mt-3 text-xs md:text-base font-medium hover:underline">
                Detail Stories
              </button>
            </div>

          </div>
        ))}

      </div>

      {/* VIEW ALL BUTTON */}
      <div className="text-center mt-7 md:mt-12">
        <button className="bg-[#2D7462] text-white px-5 py-2 md:px-8 md:py-3 rounded-lg text-xs  md:text-sm flex items-center gap-2 mx-auto hover:bg-[#214f43] transition">
          View All <FiArrowRight size={18} />
        </button>
      </div>
    </section>
  );
}
