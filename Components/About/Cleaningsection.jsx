import Image from "next/image";

export default function CleaningSection() {
  const stats = [
    { number: "208K", label: "Lorem " },
    { number: "208K", label: "Lorem " },
    { number: "4.8", label: "Lorem ", stars: true },
    { number: "208K", label: "Lorem " },
    { number: "208K", label: "Lorem " },
  ];

  return (
    <section className="w-full  bg-white md:py-10  py-5 px-4 md:px-30">
      <div className="max-w-[1900px] mx-auto text-center">

        {/* TITLE */}
        <h2 className="text-lg md:text-2xl lg:text-3xl font-semibold text-black">
          Keeping The Environment
        </h2>

        <h3 className="text-lg md:text-2xl lg:text-3xl font-semibold text-black mt-1">
          Clean Together
        </h3>

        <p className="text-gray-500 text-xs md:text-xm font-light mt-7 max-w-xl mx-auto">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever.
        </p>

        {/* TOP IMAGES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <TopImage src="/image/cl-img1.png" />
          <TopImage src="/image/cl-img2.png" />
          <TopImage src="/image/cl-img3.png" />
        </div>

        {/* IMAGE 4 & 5 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <ImageBlock src="/image/cl-img4.png" />
          <ImageBlock src="/image/cl-img5.png" />
        </div>

        {/* ✅ STATS SECTION */}
        <div className="mt-16">

          <div className="
            grid grid-cols-5 sm:grid-cols-5 md:grid-cols-5  
            md:gap-8 gap- items-center justify-center text-center 

          ">
            {stats.map((item, i) => (
              <div 
                key={i}
                className="flex flex-col items-center justify-center "
              >
                {/* NUMBER */}
                <h3 className="md:text-2xl lg:text-4xl  text-xs font-semibold text-black">
                  {item.number}
                </h3>

                {/* STARS - CENTER FIXED */}
                {item.stars && (
                  <div className="flex justify-center md:gap-4 my-1 text-green-600 text-xs">
                    ★ ★ ★ ★ ★
                  </div>
                )}

                {/* LABEL */}
                <p className="text-gray-500 text-xs text-center">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}

/* TOP IMAGE COMPONENT */
function TopImage({ src }) {
  return (
    <div className="overflow-hidden rounded-xl shadow-md">
      <Image
        src={src}
        alt="cleaning"
        width={400}
        height={400}
        className="w-full h-[370px] object-cover"
      />
    </div>
  );
}

/* BOTTOM IMAGE COMPONENT */
function ImageBlock({ src }) {
  return (
    <div>
      <div className="overflow-hidden rounded-xl shadow-lg">
        <Image
          src={src}
          alt="image"
          width={600}
          height={400}
          className="w-full h-[370px] object-cover"
        />
      </div>

      <p className="mt-4 text-gray-600 text-xs leading-relaxed text-left">
       Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.
      </p>
    </div>
  );
}
