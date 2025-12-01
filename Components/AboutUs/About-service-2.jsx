import Image from "next/image";

export default function AboutCleaningSection() {
  
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
          <TopImage src="/image/abt-ser-img1.png" />
          <TopImage src="/image/abt-ser-img2.png" />
          <TopImage src="/image/abt-ser-img3.png" />
          <TopImage src="/image/abt-ser-img4.png" />
          <TopImage src="/image/abt-ser-img5.png" />
          <TopImage src="/image/abt-ser-img6.png" />
        </div>

        
      </div>
    </section>
  );
}

/* TOP IMAGE COMPONENT */
function TopImage({ src }) {
  return (
    <div className="overflow-hidden  shadow-md">
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
