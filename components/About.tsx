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
      className="bg-[#dce0e9] py-8 flex flex-col items-center  lg:pl-16  "
    >
      <div className="max-w-[1600px]">
        <div className="lg:w-full lg:mx-auto flex justify-center lg:justify-start   ">
          <div className="text-center lg:text-start   ">
            {" "}
            <h2 className="text-2xl sm:text-3xl md:text-4xl 4xl:text-6xl font-bold pt-16 lg:pt-32 ">
              Turning Your
            </h2>
            <br />
            <h2 className=" text-2xl sm:text-3xl md:text-4xl  4xl:text-6xl font-bold   ">
              <span className="text-[#5889F1] pr-1  ">
                <HiSparkles className="inline text-[#BED1FB]" />
                Imagination
                <HiSparkles className="inline text-[#6187FF]" />
              </span>
              Into Reality
            </h2>
          </div>
        </div>

        <div className="lg:w-full lg:mx-0  text-center sm:text-start  flex flex-col xl:flex-row items-center justify-center md:gap-12  xl:justify-center  pt-12  ">
          <div className="sm:w-full md:w-[700px] mb-48 xs:mb-2 text-xs sm:text-sm 2xl:text-base md:flex-1 xl:flex-none text-1xl text-center md:text-center text-[#081944] px-2 xs:px-8 sm:px-4 max-w-[235px] xs:max-w-[400px] max-h-[400px] md:max-w-[700px] lg:max-w-[800px] md:max-h-[400px] sm:h-[500px]  xl:h-96 xl:w-96  opacity-80 ">
            <div className="text-center md:text-start md:w-[99%] ">
              <p className="w-[99%] mx-auto md:mx-0 text-center lg:text-start px-2 xs:px-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Fringilla magna euismod rhoncus adipiscing pulvinar. Dui
                volutpat elit tincidunt ullamcorper tincidunt. Volutpat semper
                ac turpis urna dui id.
              </p>
            </div>

            <ul className="w-[70%] md:w-[99%] text-center lg:text-start m-auto md:m-0 xl:text-start list-disc pt-2  leading-8">
              <li>
                At leo commodo scelerisque vitae fames metus felis. Ultrices
                enim fermentum, ipsum, nisl.
              </li>
              <li>
                At leo commodo scelerisque vitae fames metus felis. Ultrices
                enim fermentum, ipsum, nisl
              </li>
              <li>
                At leo commodo scelerisque vitae fames metus felis. Ultrices
                enim fermentum, ipsum, nisl
              </li>
            </ul>
          </div>

          <div className="md:flex-1 xl:flex-none shadow-2xl w-[200px] xs:w-[292px]   sm:w-[500px] md:w-[730px] flex flex-col md:flex-row md:justify-center items-center max-h-[750]  md:max-h-[850px] xl:h-96 xl:w-[610px] 2xl:w-[680px] rounded-xl bg-[#e5e7eb]">
            <div className="  w-[180px] xs:w-[250px] pt-4 sm:pt-8     md:py-12  ">
              <div className=" w-[180px] xs:w-[250px] h-[52px] mb-2 md:mb-6   bg-slate-100 rounded-xl flex">
                <div className="bg-[#6187FF] rounded-full flex justify-center items-center px-2 ">
                  <HiPuzzle className="text-white  w-9 h-6 " />
                </div>
                <h5 className="text-xs xs:text-base font-bold px-2">
                  Development customized for you
                </h5>
              </div>
              <div className="w-[180px] xs:w-[250px]">
                <Image
                  src={blankImg}
                  className="rounded-xl shadow-2xl w-[180px] xs:w-[250px]  "
                />
              </div>
            </div>
            <div>
              <AiOutlineArrowDown className="w-8 h-8 text-indigo-600 md:-rotate-90 md:mx-4" />
            </div>

            <div className="w-[180px] xs:w-[250px] mt-2 md:mt-0  md:py-12  md:pr-8 pb-8 sm:pb-4  ">
              <div className="w-[180px] xs:w-[250px]">
                <Image
                  src={socialImg}
                  width="273px"
                  height="171px"
                  className="rounded-xl shadow-2xl "
                />
              </div>

              <div className="w-[180px] xs:w-[250px] h-[52px] md:mt-6 bg-slate-100 rounded-xl flex">
                <Image
                  src={smallImg}
                  width="42px"
                  height="28px"
                  className="px-4"
                />
                <h5 className="font-bold px-4 text-xs xs:text-base">
                  Design and usability advices
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
