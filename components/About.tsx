import React, { useEffect } from "react";
import Image from "next/image";
import blankImg from "../images/blank-img.png";
import socialImg from "../images/social-img.png";
import smallImg from "../images/small-pic.png";

import { AiOutlineArrowDown } from "react-icons/ai";

import { HiSparkles, HiCode, HiChatAlt2, HiPuzzle } from "react-icons/hi";
import { BsFillLaptopFill } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

function About() {
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
    <section id="about" className="bg-[#dce0e9]">
      <div className="text-center lg:text-start">
        <h2 className="text-5xl lg:text-6xl font-bold pt-16 lg:pt-32 lg:ml-32 md:ml-20 ml-12">
          Turning Your
        </h2>
        <br />
        <h2 className=" text-5xl lg:text-6xl font-bold  lg:ml-20 md:ml-8 ml-12 ">
          <span className="text-[#5889F1] pr-8 ">
            <HiSparkles className="inline text-[#BED1FB]" />
            Imagination
            <HiSparkles className="inline text-[#6187FF]" />
          </span>
          Into Reality
        </h2>
      </div>

      <div className="text-center sm:text-start flex lg:flex-row flex-col items-center  justify-around  pt-12  ">
        <div className="  text-1xl  text-[#081944] h-96 w-96  opacity-60 ">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
            magna euismod rhoncus adipiscing pulvinar. Dui volutpat elit
            tincidunt ullamcorper tincidunt. Volutpat semper ac turpis urna dui
            id.
          </p>
          <ul className="list-disc pt-2 sm:ml-4 leading-8">
            <li>
              At leo commodo scelerisque vitae fames metus felis. Ultrices enim
              fermentum, ipsum, nisl.
            </li>
            <li>
              At leo commodo scelerisque vitae fames metus felis. Ultrices enim
              fermentum, ipsum, nisl
            </li>
            <li>
              At leo commodo scelerisque vitae fames metus felis. Ultrices enim
              fermentum, ipsum, nisl
            </li>
          </ul>
        </div>

        <div className="shadow-2xl max-w-[750px] flex flex-col md:flex-row items-center   max-h-[850px] rounded-xl bg-[#e5e7eb]">
          <div className="pt-4 px-8 md:px-0 md:py-12 md:pl-8">
            <div className="w-[260px] h-[52px] mb-2 md:mb-6   bg-slate-100 rounded-xl flex">
              <div className="bg-[#6187FF] rounded-full flex justify-center items-center px-2 ">
                <HiPuzzle className="text-white  w-9 h-6 " />
              </div>
              <h5 className="font-bold px-2">Development customized for you</h5>
            </div>

            <Image
              src={blankImg}
              width="273px"
              height="171px"
              className="rounded-xl shadow-2xl  "
            />
          </div>
          <div>
            <AiOutlineArrowDown className="w-8 h-8 text-indigo-600 md:-rotate-90 md:mx-4" />
          </div>

          <div className="mt-2 md:mt-0 pb-4 md:py-12 md:pr-8 ">
            <Image
              src={socialImg}
              width="273px"
              height="171px"
              className="rounded-xl shadow-2xl "
            />
            <div className="w-[260px] h-[52px] md:mt-6 bg-slate-100 rounded-xl flex">
              <Image
                src={smallImg}
                width="42px"
                height="28px"
                className="px-4"
              />
              <h5 className="font-bold px-4">Design and usability advices</h5>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        id="services"
        className=" py-24 lg:p-7 grid md:grid-cols-2 lg:grid-cols-4  gap-4 justify-items-center  justify-center items-center"
      >
        <article className="w-64 h-64 bg-[#f0f2f6] shadow-2xl rounded-xl flex flex-col items-center justify-center text-center o ">
          <div className="w-14 h-14 bg-white rounded-2xl rotate-45  mb-5 flex items-center justify-center  ">
            <HiCode className="-rotate-45 text-[#6187FF] w-8 h-6" />
          </div>
          <h5 className="font-bold text-[#081944]">Software Development</h5>
          <p className="opacity-60 text-[#081944;] pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
            magna.
          </p>
        </article>
        <article className="w-64 h-64 bg-[#f0f2f6] shadow-2xl rounded-xl flex flex-col items-center justify-center text-center  ">
          <div className="w-14 h-14 bg-white rounded-2xl rotate-45  mb-5 flex items-center justify-center ">
            <BsFillLaptopFill className="-rotate-45 text-[#6187FF] w-9 h-6" />
          </div>
          <h5 className="font-bold text-[#081944]">Website Development</h5>
          <p className="opacity-60 text-[#081944;] pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
            magna.
          </p>
        </article>
        <article className="w-64 h-64 bg-[#f0f2f6] shadow-2xl rounded-xl flex flex-col items-center justify-center text-center ">
          <div className="w-14 h-14 bg-white rounded-2xl rotate-45  mb-5 flex items-center justify-center ">
            <MdDesignServices className="-rotate-45 text-[#6187FF] w-9 h-6" />
          </div>
          <h5 className="font-bold text-[#081944]">UX/UI £ Graphic Design</h5>
          <p className="opacity-60 text-[#081944;] pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
            magna.
          </p>
        </article>
        <article className="w-64 h-64 bg-[#f0f2f6] shadow-2xl rounded-xl flex flex-col items-center justify-center text-center  ">
          <div className="w-14 h-14 bg-white rounded-2xl rotate-45  mb-5 flex items-center justify-center ">
            <HiChatAlt2 className="-rotate-45 text-[#6187FF] w-9 h-6" />
          </div>
          <h5 className="font-bold text-[#081944]">Digital Marketing</h5>
          <p className="opacity-60 text-[#081944;] pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
            magna.
          </p>
        </article>
      </motion.div>
    </section>
  );
}

export default About;
