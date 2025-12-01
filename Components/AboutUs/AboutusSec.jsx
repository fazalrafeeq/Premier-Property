export default function AboutSection() {
  return (
    <section className="relative mx-w-[2700px] py-20 px-6 md:px-30  bg-white overflow-hidden">

      {/* Dotted Background Pattern */}
      <div className="absolute inset-0 bg-[url('/image/Abt-patternsdots.png')] opacity-80 bg-cover pointer-events-none" />

      <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-[1900px] mx-auto">

        {/* LEFT TEXT CONTENT */}
        <div>
          <p className="text-sm font-semibold  text-gray-600 tracking-widest">
            WHO WE ARE
          </p>

          <h2 className="mt-3 text-xl md:text-4xl font-bold text-gray-900 leading-tight">
            Passionate Experts Defining Premium <br /> Living Standards.
          </h2>

          {/* Highlighted Quote */}
          <div className="mt-6 border-l-4 border-green-600 pl-4">
            <p className="text-xs lg:text-xl text-gray-700 font-medium">
              Lorem Ipsum is simply dummy text of the printing and typesetting 
              industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
          </div>

          <p className="mt-6 text-xs lg:text-sm 2xl:text-base text-gray-600 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem 
            Ipsum has been the industry's standard dummy text ever since the 1500s...
          </p>

          {/* BUTTONS */}
          <div className="mt-8 flex flex-wrap gap-4">
            <button className="px-3 py-3 bg-green-700 text-xs md:text-xm text-white font-semibold rounded-md shadow hover:bg-green-800 transition">
              Explore Our Services →
            </button>

            <button className="px-3 py-3 border border-green-700 text-xs md:text-xm text-green-700 font-semibold rounded-md hover:bg-green-50 transition">
              Learn More →
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE AREA */}
        <div className="relative">
          <div className="w-full rounded-2xl overflow-hidden">

            {/* 👉 Fixed Responsive Heights */}
            <img
              src="/image/aboutus-photo.png"
              alt="Cleaning Service"
              className="
                w-full object-cover shadow-lg rounded-2xl
                h-[220px]        /* mobile */
                sm:h-[300px]     /* small screens */
                md:h-[380px]     /* tablets */
                lg:h-[480px]     /* desktops */
                xl:h-[480px]     /* large desktops */
              "
            />
          </div>

          {/* Floating Badge */}
          <div className="absolute -bottom-6 -right-6 bg-white shadow-xl rounded-full w-32 h-32 flex flex-col items-center justify-center border">
            <p className="text-green-700 text-3xl font-bold">500+</p>
            <p className="text-gray-600 font-medium">Properties</p>
          </div>
        </div>

      </div>
    </section>
  );
}
