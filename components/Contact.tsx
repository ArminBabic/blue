import React from "react";
import Image from "next/image";

import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

import arrow from "../images/arrow.png";

function Contact() {
  return (
    <section className="contact flex  justify-around gap-4">
      <div className="text-white w-[80%] flex flex-col md:flex-row justify-around gap-2 py-20">
        <div className="w-full md:w-[49%] flex flex-col  justify-center md:justify-start">
          <h5 className="xs:text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-bold">
            Let's Connect!
          </h5>
          <p className="py-4 text-xs xs:text-base">
            Our team will be happy to assist you!
          </p>

          <div className="flex items-center pb-4 text-xs xs:text-base">
            <HiMail className="w-6" />
            <p>bojan@blueduck.at</p>
          </div>

          <div className="flex items-center pb-4 text-xs xs:text-base">
            <HiPhone className="w-6" />
            <p>+43 665 65 333 201</p>
          </div>

          <div className="flex items-center  pb-4 text-xs xs:text-base">
            <HiLocationMarker className="w-6" />
            <p>Ghegagasse 17, Graz, Austria</p>
          </div>

          <div className="hidden md:block">
            <Image src={arrow} />
          </div>
        </div>

        <div className="w-[98%] md:w-[49%] sm:py-4">
          <form className="">
            <div className="flex flex-col sm:gap-2 sm:flex-row md:flex-col lg:flex-row ">
              <div className="py-4 sm:py-0 w-full ">
                {" "}
                <input
                  type="text"
                  placeholder="Full Name"
                  className="placeholder-white bg-inherit w-full  h-10 md:h-12  pl-4 border border-white rounded-xl"
                />
              </div>
              <div className="w-full">
                {" "}
                <input
                  type="email"
                  placeholder="Your Email"
                  className="placeholder-white bg-inherit w-full  h-10 md:h-12  pl-4 border border-white rounded-xl"
                />
              </div>
            </div>

            <input
              type="text"
              placeholder="Your Message"
              className="placeholder-white bg-inherit w-[100%] pb-56 pl-4  pt-4 border border-white  rounded-xl my-4"
            />

            <div className="text-end ">
              <button
                type="submit"
                className="  sm:px-4 bg-white text-blue-400 w-20 h-10 sm:w-28 sm:h-12 font-bold rounded-[40px] hover:bg-slate-300 hover:shadow-2xl shadow-white"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
