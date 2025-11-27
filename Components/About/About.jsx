export default function About() {
  return (
    <section className="w-full flex justify-center bg-white">
      <div className="w-full max-w-[2000px] px-8 md:px-20 lg:px-28 xl:px-36 py-16">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center">
            <p className="text-xl md:text-2xl font-semibold text-gray-500">
              ABOUT US
            </p>

            {/* FIXED TEXT SIZE FOR XL SCREENS */}
            <h1 className="text-3xl md:text-4xl xl:text-5xl text-black font-bold leading-tight mt-2">
              Explore Real Estate In Popular Indian Cities
            </h1>

            <p className="mt-5 text-gray-600 max-w-3xl text-sm md:text-[15px] leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor.
            </p>

            <div className="grid sm:grid-cols-2 gap-10 mt-10">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-5 h-5">
                    <img src="/image/abt-icon-1.png" alt="icon 1" />
                  </span>
                  <h3 className="font-semibold text-black text-xl">
                    Best Solutions
                  </h3>
                </div>
                <p className="text-gray-600 mt-5 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6">
                    <img src="/image/abt-icon-2.png" alt="icon 2" />
                  </span>
                  <h3 className="font-semibold text-black text-xl">
                    Quality Service
                  </h3>
                </div>
                <p className="text-gray-600 mt-5 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor.
                </p>
              </div>
            </div>

            {/* LEFT SIDE BUTTON ONLY */}
            <div><button className="mt-10 bg-green-900 hover:bg-green-600 transition text-white px-7 py-3 rounded-lg">
              More About Us →
            </button></div>
          </div>

          {/* RIGHT IMAGE WITH RESPONSIVE FIX */}
          <div className="relative w-full flex">
            <img
              src="/image/abt-cleaner.png"
              alt="Cleaning worker"
              className="
                w-full 
                rounded-2xl 
                object-cover
                min-h-[300px]
                sm:min-h-[350px]
                md:min-h-[400px]
                lg:min-h-[480px]
                xl:min-h-[530px]
                2xl:min-h-[600px]
              "
            />

            {/* CONTACT BADGE RESPONSIVE */}
            <div
              className="
                absolute bottom-0 right-0
                w-[150px] sm:w-[240px] md:w-[260px]
                rounded-xl
                overflow-hidden
                shadow-lg
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
