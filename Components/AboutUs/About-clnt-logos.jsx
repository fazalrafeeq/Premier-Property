"use client";

import Image from "next/image";

export default function ClientLogos() {
  return (
    <section className="w-full py-16 bg-white flex justify-center">
      <div className="max-w-[2000px] w-full px-6 md:px-20">

        {/* Title */}
        <h2 className="text-center  text-xl text-black  md:text-3xl font-semibold mb-14">
          1200k More Connect With Our Customers
        </h2>

        {/* Logo Row */}
        <div className="
          flex flex-wrap 
          items-center justify-center 
          gap-5 md:gap-16 lg:gap-20
          w-full
        ">
          
          {/* Logo 1 */}
          <div className="flex justify-center">
            <Image
              src="/image/abt-client-logo.png"
              alt="Client Logo"
              width={140}
              height={50}
              className="w-auto h-10 sm:h-12 md:h-14 object-contain"
            />
            
          </div>

          {/* Logo 2 */}
          <div className="flex justify-center">
            <Image
              src="/image/abt-client-logo.png"
              alt="Client Logo"
              width={140}
              height={50}
              className="w-auto h-10 sm:h-12 md:h-14 object-contain"
            />
            
          </div>

          {/* Logo 3 */}
          <div className="flex justify-center">
            <Image
              src="/image/abt-client-logo.png"
              alt="Client Logo"
              width={140}
              height={50}
              className="w-auto h-10 sm:h-12 md:h-14 object-contain"
            />
            
          </div>

          {/* Logo 4 */}
          <div className="flex justify-center">
            <Image
              src="/image/abt-client-logo.png"
              alt="Client Logo"
              width={140}
              height={50}
              className="w-auto h-10 sm:h-12 md:h-14 object-contain"
            />
            
          </div>

          {/* Logo 5 */}
          <div className="flex justify-center">
            <Image
              src="/image/abt-client-logo.png"
              alt="Client Logo"
              width={140}
              height={50}
              className="w-auto h-10 sm:h-12 md:h-14 object-contain"
            />
            
          </div>

        </div>

      </div>
    </section>
  );
}
