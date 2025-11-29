"use client";

export default function SubscribeSection() {
  return (
    <section className="relative w-full px-6 py-1 md:py-28  md:px-28 max-w-[2700px] overflow-hidden bg-white">

      {/* Background Illustration */}
      <img
        src="/image/subscribe-bg.png"
        alt="background city"
        className="
          absolute inset-x-0 bottom-0 
          w-full 
          object-contain
          opacity-100
          pointer-events-none 
          z-10
        "
      />

      {/* Main Content Box */}
      <div className="
       

        max-w-[1900px] 
        mx-auto 
        shadow-xl 
        rounded-3xl 
        px-8 md:px-15 
        py-12 md:py-15 
        flex flex-col lg:flex-row 
        items-start lg:items-center 
        justify-between 
        gap-10 relative
        z-15 bg-white
      "> 
        
        {/* LEFT TEXT */}
        <div className="max-w-xl">
          <h2 className="text-1xl md:text-2xl lg:text-3xl font-bold leading-snug text-black">
            The Key To Real Estate <br /> Success
          </h2>

          <p className="mt-4 text-gray-600 text-xs md:text-xm leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text.
          </p>
        </div>

        {/* RIGHT INPUT GROUP */}
        <div className="
          flex flex-col sm:flex-row 
          items-center 
          gap-4 
          w-full lg:w-auto
        ">
          <input
            type="email"
            placeholder="Enter your Email"
            className="
              w-full sm:w-[350px]
              px-5 py-3 
              border border-gray-300 
              rounded-lg 
              outline-none 
              focus:ring-2 focus:ring-[#2D7462]/40 
              text-black text-xs md:text-xm
            "
          />

          <button
            className="
              bg-[#2D7462] 
              text-white 
              px-8 py-3 
              rounded-lg 
              text-xs md:text-base
              hover:bg-[#214f43] 
              transition
            "
          >
            Subscribe Now
          </button>
        </div>

      </div>

    </section>
  );
}
