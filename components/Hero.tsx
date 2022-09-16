import React, { useEffect } from "react";
import Image from "next/image";
import { HiChatAlt2, HiLightBulb } from "react-icons/hi";

import iconMan from "../images/man-icon.png";
import icon2 from "../images/icon2.png";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

function Hero() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  const boxVariant = {
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hidden: { opacity: 0, scale: 0 },
  };

  return (
    <section
      id="hero"
      className=" hero xl:ml-16 pb-16 mt-20 sm:mt-36 flex flex-col sm:grid sm:grid-cols-3 sm:justify-items-center lg:justify-items-start  items-center lg:items-start lg:ml-16  xl:flex-row "
    >
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="text-center  lg:text-start xl:ml-32 sm:col-span-3"
      >
        <h1 className="text-4xl md:text-6xl lg:text-5xl lg:font-bold text-white mt:150px pb-16 lg:pb-0  ">
          Full In-House
          <br />
          <span className=" h text-[#CCDCFF] ">IT Solutions</span>
          <br />£ Services Company
        </h1>
        <p className="text-white text-base my-4 lg:my-16 px-8 lg:px-0 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          <br />
          massa tincidunt tincidunt massa elit elit tortor. A odio donec et, cum
          at
          <br />
          ut gravida. Tellus sit nulla blandit ac tincidunts.
        </p>

        <button className="text-white px-4 xs:px-16 lg:px-8 py-2 bg-[#6187FF] rounded-3xl hover:scale-105 transition duration-[.4s] my-1 xs:my-12 lg:mb-48">
          Contact Us
        </button>
      </motion.div>

      <article className="sm:col-span-1 my-2 xs:my-3 w-[80%]  sm:w-[205px] lg:h-[60px]     flex items-center   lg:absolute top-52 right-72 xl:max-w-[217px] max-h-[100px] xs:max-h-[52px] backdrop-opacity-10 backdrop-invert bg-white/20 rounded-xl ">
        <div className="bg-indigo-500 flex justify-center items-center p-2 m-2 rounded-full">
          <HiChatAlt2 className="img-popup text-white w-7 h-7 " />
        </div>
        <div className="md:max-w-[164px] xl:max-w-[194px]">
          <p className="text-white px-2 text-xs sm:text-sm opacity-80">
            IT Consulting for your everyday concerns
          </p>
        </div>
      </article>
      <article className="sm:col-span-1 my-2 xs:my-3 w-[80%]  sm:w-[205px] lg:h-[60px]   flex items-center lg:justify-around   lg:absolute bottom-80 right-[580px]  2xl:max-w-[217px] max-h-[100px] xs:max-h-[58px] backdrop-opacity-10 backdrop-invert bg-white/20 rounded-xl  ">
        <div className="flex items-center p-2 m-2">
          <Image
            className=" w-[42px] h-[42px] mx-2"
            src={iconMan}
            alt="hero-popup-img"
          />
        </div>

        <div className=" md:max-w-[164px]">
          <p className="text-white p-2 text-xs sm:text-sm opacity-80">
            Dedicated team of experts at your hand
          </p>
        </div>
      </article>
      <article className="sm:col-span-1 my-2 xs:my-3 w-[80%]   sm:w-[205px] lg:h-[60px]    flex items-center   lg:absolute bottom-32 opacity-80 right-80 xl:max-w-[217px] max-h-[100px] xs:max-h-[52px]  backdrop-opacity-10 backdrop-invert bg-white/20 rounded-xl ">
        <div className="bg-[#6187FF] flex justify-center items-center p-2 rounded-full m-2">
          <HiLightBulb className="text-white w-6 h-6" />
        </div>

        <div className="md:max-w-[164px]">
          <p className="text-white p-2 text-xs sm:text-sm opacity-80">
            Creative solutions designed to suit you
          </p>
        </div>
      </article>
    </section>
  );
}

export default Hero;
