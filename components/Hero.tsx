import React, { useEffect } from "react";
import Image from "next/image";
import notebook from "../images/notebook1.png";
import icon from "../images/icon.png";
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
      className=" flex flex-col justify-between md:flex md:flex-col lg:flex lg:flex-row lg:justify-between  hero lg:ml-24 mt-32 "
    >
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="text-center lg:text-start"
      >
        <h1 className="text-4xl lg:text-5xl lg:font-bold text-white mt:150px pb-16 lg:pb-0  ">
          Full In-House
          <br />
          <span className=" h text-[#CCDCFF] ">IT Solutions</span>
          <br />£ Services Company
        </h1>
        <p className="text-white text-base mt-6 mb-16 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          <br />
          massa tincidunt tincidunt massa elit elit tortor. A odio donec et, cum
          at
          <br />
          ut gravida. Tellus sit nulla blandit ac tincidunts.
        </p>

        <button className="text-white px-8 py-2 bg-[#6187FF] rounded-3xl hover:scale-105 transition duration-[.4s] mb-48">
          Contact Us
        </button>
      </motion.div>
      <div className="hidden lg:block">
        <Image
          className="notebook-img  w-96 h-96 md:w-4/12 md:h-96 shadow-2xl"
          src={notebook}
          placeholder="blur"
          alt="notebook"
        />
      </div>

      {/*   <div>
        <Image
          className="notebook-img"
          src={notebook}
          width={400}
          height={600}
          alt="notebook"
        />
        <article className="flex">
          <Image
            className="img-popup"
            src={icon}
            width={30}
            height={30}
            alt="hero-popup-img"
          ></Image>
          <p className="text-white">IT Consulting for your everyday concerns</p>
        </article>
        <article className="flex">
          <Image
            className="img-popup"
            src={iconMan}
            width={30}
            height={30}
            alt="hero-popup-img"
          ></Image>
          <p className="text-white">Dedicated team of experts at your hand</p>
        </article>
        <article className="flex">
          <Image
            className="img-popup"
            src={icon2}
            width={30}
            height={30}
            alt="hero-popup-img"
          ></Image>
          <p className="text-white">Creative solutions designed to suit you</p>
        </article>
      </div> */}
    </section>
  );
}

export default Hero;
