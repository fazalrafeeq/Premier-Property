"use client";

import Image from "next/image";

export default function BlogAbout() {
  const blogs = [
    { id: 1, image: "/image/blog1.png", author: "Erin Bun", date: "Jan, 2025", title: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting.", desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever." },

    // All other cards same size
    { id: 2, image: "/image/blog1.png", author: "Erin Bun", date: "Jan, 2025", title: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting." },
    { id: 3, image: "/image/blog1.png", author: "Erin Bun", date: "Jan, 2025", title: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting." },
    { id: 4, image: "/image/blog1.png", author: "Erin Bun", date: "Jan, 2025", title: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting." },
    { id: 5, image: "/image/blog1.png", author: "Erin Bun", date: "Jan, 2025", title: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting." },
    { id: 6, image: "/image/blog1.png", author: "Erin Bun", date: "Jan, 2025", title: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting." },
    { id: 7, image: "/image/blog1.png", author: "Erin Bun", date: "Jan, 2025", title: "Lorem Ipsum Is Simply Dummy Text Of The Printing And Typesetting." },
    
  ];

  return (
    <section className="w-full bg-white px-6 lg:px-27 py-14 max-w-[2100px] mx-auto">

      {/* TITLE */}
      <div className="text-center max-w-xl mx-auto">
        <h2 className="text-xs md:text-2xl text-black font-bold">You Can Enjoy A Variety Of Interesting Stories About Us</h2>
        <p className="mt-2 text-xs md:text-xm text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
      </div>

      {/* FIRST CARD (BIG) */}
      <div className="mt-12">
        <div className="relative w-full h-[260px] sm:h-[320px] md:h-[400px] rounded-xl overflow-hidden">
          <Image src={blogs[0].image} alt="" fill className="object-cover" />
        </div>

        <h3 className="font-semibold text-black text-xs md:text-lg mt-4">
          {blogs[0].title}
        </h3>

        <p className="text-gray-500 text-xs md:text-xm mt-2 max-w-3xl">
          {blogs[0].desc}
        </p>

        <button className="text-green-700 mt-3  text-sm md:text-lg cursor-pointer font-semibold">
          Detail Stories
        </button>
      </div>

      {/* ALL OTHER CARDS SAME */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-14">

        {blogs.slice(1).map((blog) => (
          <div key={blog.id}>
            <div className="relative w-full h-[200px] md:h-[230px] rounded-xl overflow-hidden">
              <Image src={blog.image} alt="" fill className="object-cover" />
            </div>

            <p className="text-gray-500  md:text-xm text-xs mt-3">
              {blog.author} • {blog.date}
            </p>

            <h3 className="font-semibold  text-black text-xs md:text-base  mt-1">
              {blog.title}
            </h3>

            <button className="text-green-700 mt-2 text-sm md:text-lg cursor-pointer  font-semibold">
              Detail Stories
            </button>
          </div>
        ))}

      </div>

    </section>
  );
}
