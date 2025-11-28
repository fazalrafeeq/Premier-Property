export default function About() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[2200px] px-8 md:px-16 lg:px-24 xl:px-28 bg-white pb-32  py-20">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="text-xm md:text-xl font-semibold text-gray-500 tracking-wide">
              ABOUT US
            </p>

            <h1 className="text-2xl md:text-3xl xl:text-[38px] text-black font-bold leading-tight mt-3">
              Explore Real Estate In Popular Indian Cities
            </h1>

            <p className="mt-6 text-gray-600 text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed max-w-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor.
            </p>

            {/* ICONS UNDER TEXT */}
            <div className="grid sm:grid-cols-2 gap-10 mt-10">
              {/* Item 1 */}
              <div>
                <div className="flex items-center gap-3">
                  <img src="/image/abt-icon-1.png" className="w-6 h-6" />
                  <h3 className="font-semibold text-black text-sm sm:text-xl">Best Solutions</h3>
                </div>
                <p className="text-gray-600 mt-3 text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </div>

              {/* Item 2 */}
              <div>
                <div className="flex items-center gap-3">
                  <img src="/image/abt-icon-2.png" className="w-6 h-6" />
                  <h3 className="font-semibold text-black text-sm sm:text-xl ">Quality Service</h3>
                </div>
                <p className="text-gray-600 mt-3 text-[12px] md:text-[14px] lg:text-[16px] leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <button
              className="
                mt-10 bg-[#2D7462] text-white 
                px-10 py-3 
                rounded-md shadow 
                transition-all duration-200
                active:scale-95 
                hover:bg-green-600
              "
            >
              More About Us →
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative w-full">
            <img
              src="/image/abt-cleaner.png"
              alt="Cleaning worker"
              className="
                w-full 
                rounded-2xl 
                object-cover
                min-h-[350px]
                sm:min-h-[400px]
                md:min-h-[450px]
                lg:min-h-[480px]
                xl:min-h-[500px]
              "
            />

            {/* CONTACT BADGE */}
            <div
              className="
                absolute bottom-0 right-0
                w-[160px] sm:w-[230px] md:w-[260px]
                rounded-xl
                overflow-hidden shadow-xl
              "
            >
              <img
                src="/image/cont-num.png"
                alt="Contact Badge"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
