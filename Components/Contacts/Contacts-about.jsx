"use client";

import Image from "next/image";

export default function ContactSection() {
  return (
    <section
      className="w-full py-24 bg-cover bg-center bg-no-repeat flex justify-center"
      style={{ backgroundImage: "url('/image/contacts-bg.png')" }}
    >
      <div className="max-w-[1900px] w-full px-6 lg:px-27 grid grid-cols-1 lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          {/* Heading */}
          <div className="space-y-4">
            <p className="text-sm font-semibold tracking-wide text-gray-600">
              CONTACT US
            </p>

            <h2 className="text-xl md:text-5xl font-bold leading-snug">
              We Value Your Queries And <br /> Feedback
            </h2>

            <p className="text-gray-600 text-xs md:text-lg leading-relaxed max-w-[90%]">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
          </div>

          {/* INFO CARDS */}
          <div className="space-y-6">

            {/* CARD */}
            <div className="bg-white  rounded-2xl shadow-md  flex items-start gap-5">
              <div className="bg-green-900 rounded-2xl   p-9 flex items-center justify-center">
                <Image src="/image/icon-location.png" width={23} height={35} alt="" />
              </div>
              <div>
                <h3 className="text-xl md:text-xl text-black font-semibold">Address</h3>
                <p className="text-xs md:text-lg  text-gray-600">
                  Lorem Ipsum is simply dummy text of the printing and industry.
                </p>
              </div>
            </div>

            <div className="bg-white text-black rounded-2xl shadow-md flex items-start gap-5">
              <div className="bg-green-900 rounded-2xl   p-9 flex items-center justify-center">
                <Image src="/image/icon-phone.png" width={25} height={35} alt="" />
              </div>
              <div>
                <h3 className="text-xl md:text-xl font-semibold">Mobile</h3>
                <p className= "text-xs md:text-lg  text-gray-600">+91 0000000000</p>
              </div>
            </div>

            <div className="bg-white text-black rounded-2xl shadow-md  flex items-start gap-5">
              <div className="bg-green-900 rounded-2xl  p-9 flex items-center justify-center">
                <Image src="/image/icon-mail.png" width={25} height={35} alt="" />
              </div>
              <div className="" >
                <h3 className="text-xl md:text-xl font-semibold">Email</h3>
                <p className="text-xs md:text-lg  text-gray-600">premm@gmail.com</p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE — FORM */}
        <div className="bg-white shadow-xl rounded-3xl p-10 space-y-6">
          <h3 className="text-1xl md:text-2xl  text-black font-bold">Get In Touch</h3>
          <p className="text-gray-600 text-xs md:text-lg  ">Lorem Ipsum is simply dummy text of the printing.</p>

          <div className="space-y-4">
             <p className="text-black text-xs md:text-lg  font-semibold" >Your name</p>
            <input className="w-full border text-gray-700 border-gray-300 rounded-xl p-4" placeholder="Your name" />
            <p className="text-black text-xs md:text-lg  font-semibold" >Email address</p>
            <input className="w-full  border text-gray-700 border-gray-300 rounded-xl p-4" placeholder="Email address" />
            <p className="text-black text-xs md:text-lg  font-semibold" >Phone</p>
            <input className="w-full border text-gray-700 border-gray-300 rounded-xl p-4" placeholder="Phone" />
            

            <p className="text-black text-xs md:text-lg  font-semibold" >Select subject</p>
            <select className="w-full border text-gray-700 border-gray-300 rounded-xl p-4">
                
              <option>Select subject</option>
            </select>
            

            <p className="text-black text-xs md:text-lg  font-semibold" >Message</p>
            <textarea rows={4} className="w-full border text-gray-700 border-gray-300 rounded-xl p-4" placeholder="Enter message" />

            <button className="bg-green-700 text-white text-xs md:text-lg  rounded-xl px-8 py-3 font-semibold hover:bg-green-800 transition w-fit">
              Submit →
            </button>
          </div>
        </div>

      </div>
       
    </section>
  );
}
