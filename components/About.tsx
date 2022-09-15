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
    <section
      id="about"
      className="bg-[#dce0e9] flex flex-col items-center xl:block "
    >
      <div className="text-center xl:text-start xl:ml-8 2xl:ml-52">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold pt-16 lg:pt-32 ">
          Turning Your
        </h2>
        <br />
        <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold   ">
          <span className="text-[#5889F1] pr-1 md:pr-8 ">
            <HiSparkles className="inline text-[#BED1FB]" />
            Imagination
            <HiSparkles className="inline text-[#6187FF]" />
          </span>
          Into Reality
        </h2>
      </div>

      <div className="text-center sm:text-start  flex flex-col xl:flex-row items-center md:gap-12 xl:ml-8  xl:justify-center  pt-12  ">
        <div className="px-8 text-xs sm:text-sm md:flex-1 xl:flex-none text-1xl text-start sm:text-center md:text-start text-[#081944] px-8 sm:px-4 w-96 h-[400px] sm:w-[500px] md:w-[700px] xl:h-96 xl:w-96  opacity-80 ">
          <p className="text-center xl:text-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
            magna euismod rhoncus adipiscing pulvinar. Dui volutpat elit
            tincidunt ullamcorper tincidunt. Volutpat semper ac turpis urna dui
            id.
          </p>
          <ul className="sm:text-center mx-8 xl:text-start list-disc pt-2 sm:ml-4 leading-8">
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

        <div className="md:flex-1 xl:flex-none shadow-2xl max-w-[650px] md:max-w-[730px] flex flex-col md:flex-row items-center max-h-[750]  md:max-h-[850px] xl:h-96 rounded-xl bg-[#e5e7eb]">
          <div className="pt-4 sm:pt-8 px-4 sm:px-24 md:px-8 md:px-0 md:py-12  md:pl-8 ">
            <div className="w-[260px] h-[52px] mb-2 md:mb-6   bg-slate-100 rounded-xl flex">
              <div className="bg-[#6187FF] rounded-full flex justify-center items-center px-2 ">
                <HiPuzzle className="text-white  w-9 h-6 " />
              </div>
              <h5 className="font-bold px-2">Development customized for you</h5>
            </div>
            <div>
              <Image
                src={blankImg}
                width="273px"
                height="171px"
                className="rounded-xl shadow-2xl  "
              />
            </div>
          </div>
          <div>
            <AiOutlineArrowDown className="w-8 h-8 text-indigo-600 md:-rotate-90 md:mx-4" />
          </div>

          <div className="mt-2 md:mt-0  md:py-12  md:pr-8 pb-8 sm:pb-4  ">
            <div>
              <Image
                src={socialImg}
                width="273px"
                height="171px"
                className="rounded-xl shadow-2xl "
              />
            </div>

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
        className=" py-24 lg:px-16 xl:px-0 2xl:flex 2xl:gap-16 lg:p-7 grid md:grid-cols-2 xl:grid-cols-4  gap-4  md:gap-8 lg:gap-16   mt-8 justify-items-center  justify-center items-center"
      >
        <article className=" w-64 h-64 2xl:w-80 bg-[#f0f2f6] shadow-2xl rounded-xl flex flex-col items-center justify-center text-center o ">
          <div className="w-14 h-14 bg-white rounded-2xl rotate-45  mb-5 flex items-center justify-center  ">
            <HiCode className="-rotate-45 text-[#6187FF] w-8 h-6" />
          </div>
          <h5 className="font-bold text-[#081944]">Software Development</h5>
          <p className="opacity-60 text-[#081944;] pt-3 px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
            magna.
          </p>
        </article>
        <article className=" w-64 h-64 2xl:w-80 bg-[#f0f2f6] shadow-2xl rounded-xl flex flex-col items-center justify-center text-center  ">
          <div className="w-14 h-14 bg-white rounded-2xl rotate-45  mb-5 flex items-center justify-center ">
            <BsFillLaptopFill className="-rotate-45 text-[#6187FF] w-9 h-6" />
          </div>
          <h5 className="font-bold text-[#081944]">Website Development</h5>
          <p className="opacity-60 text-[#081944;] px-2 pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
            magna.
          </p>
        </article>
        <article className=" w-64 h-64 2xl:w-80 bg-[#f0f2f6] shadow-2xl rounded-xl flex flex-col items-center justify-center text-center ">
          <div className="w-14 h-14 bg-white rounded-2xl rotate-45  mb-5 flex items-center justify-center ">
            <MdDesignServices className="-rotate-45 text-[#6187FF] w-9 h-6" />
          </div>
          <h5 className="font-bold text-[#081944]">UX/UI £ Graphic Design</h5>
          <p className="opacity-60 text-[#081944;] px-2 pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
            magna.
          </p>
        </article>
        <article className=" w-64 h-64 2xl:w-80 bg-[#f0f2f6] shadow-2xl rounded-xl flex flex-col items-center justify-center text-center  ">
          <div className="w-14 h-14 bg-white rounded-2xl rotate-45  mb-5 flex items-center justify-center ">
            <HiChatAlt2 className="-rotate-45 text-[#6187FF] w-9 h-6" />
          </div>
          <h5 className="font-bold text-[#081944]">Digital Marketing</h5>
          <p className="opacity-60 text-[#081944;] px-2 pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
            magna.
          </p>
        </article>
      </motion.div>
    </section>
  );
}

export default About;
