"use client";

import Image from "next/image";

export default function ServiceGallery() {
  return (
    <section className="w-full py-20 bg-white flex justify-center">
      <div className="max-w-[2700px] w-full px-6 md:px-28">

        {/* CENTER BLOCK */}
        <div className="w-full max-w-[1900px] mx-auto flex justify-center">
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full">

            {/* LEFT IMAGE */}
            <div
              className="
                w-full 
                md:w-64 lg:w-72 xl:w-80 
                h-auto 
                md:h-[320px] lg:h-[380px] xl:h-[430px]
                 overflow-hidden
              "
            >
              <Image
                src="/image/Abtser-img1.png"
                alt="Service 1"
                width={1500}
                height={1500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* CENTER IMAGE */}
            <div
              className="
                w-full 
                md:w-[500px] lg:w-[600px] xl:w-[700px]
                h-auto 
                md:h-[320px] lg:h-[380px] xl:h-[430px]
                 overflow-hidden
              "
            >
              <Image
                src="/image/Abtser-img2.png"
                alt="Service 2"
                width={1500}
                height={1500}
                className="w-full h-full object-cover"
              />
            </div>

            {/* RIGHT IMAGE */}
            <div
              className="
                w-full 
                md:w-64 lg:w-72 xl:w-80 
                h-auto 
                md:h-[320px] lg:h-[380px] xl:h-[430px]
                overflow-hidden
              "
            >
              <Image
                src="/image/Abtser-img3.png"
                alt="Service 3"
                width={1500}
                height={1500}
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
