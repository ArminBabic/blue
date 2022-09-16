import React, { useEffect } from "react";
import { HiSparkles, HiCode, HiChatAlt2, HiPuzzle } from "react-icons/hi";
import { BsFillLaptopFill } from "react-icons/bs";
import { MdDesignServices } from "react-icons/md";

import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

function Services() {
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
    <section id="services" className=" bg-[#dce0e9] py-24">
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        id="services"
        className="  lg:px-16 xl:px-0 2xl:flex 2xl:gap-16 lg:p-7 grid md:grid-cols-2 xl:grid-cols-4  gap-4  md:gap-8 lg:gap-16    justify-items-center  justify-center items-center"
      >
        <article className=" w-[200px] xs:w-[256px] h-[256px] 2xl:w-80 bg-[#f0f2f6] shadow-2xl rounded-xl flex flex-col items-center justify-center text-center o ">
          <div className="w-14 h-14 bg-white rounded-2xl rotate-45  mb-5 flex items-center justify-center  ">
            <HiCode className="-rotate-45 text-[#6187FF] w-8 h-6" />
          </div>
          <h5 className="font-bold text-[#081944]">Software Development</h5>
          <p className="opacity-60 text-[#081944;] pt-3 px-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
            magna.
          </p>
        </article>
        <article className="w-[200px] xs:w-[256px] h-[256px] 2xl:w-80 bg-[#f0f2f6] shadow-2xl rounded-xl flex flex-col items-center justify-center text-center  ">
          <div className="w-14 h-14 bg-white rounded-2xl rotate-45  mb-5 flex items-center justify-center ">
            <BsFillLaptopFill className="-rotate-45 text-[#6187FF] w-9 h-6" />
          </div>
          <h5 className="font-bold text-[#081944]">Website Development</h5>
          <p className="opacity-60 text-[#081944;] px-2 pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
            magna.
          </p>
        </article>
        <article className="w-[200px] xs:w-[256px] h-[256px] 2xl:w-80 bg-[#f0f2f6] shadow-2xl rounded-xl flex flex-col items-center justify-center text-center ">
          <div className="w-14 h-14 bg-white rounded-2xl rotate-45  mb-5 flex items-center justify-center ">
            <MdDesignServices className="-rotate-45 text-[#6187FF] w-9 h-6" />
          </div>
          <h5 className="font-bold text-[#081944]">UX/UI £ Graphic Design</h5>
          <p className="opacity-60 text-[#081944;] px-2 pt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
            magna.
          </p>
        </article>
        <article className=" w-[200px] xs:w-[256px] h-[256px] 2xl:w-80 bg-[#f0f2f6] shadow-2xl rounded-xl flex flex-col items-center justify-center text-center  ">
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

export default Services;
