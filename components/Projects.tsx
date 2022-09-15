import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";
import Image from "next/image";
import project1 from "../images/project1.png";
import project2 from "../images/project2.png";
import project3 from "../images/project3.png";
import project4 from "../images/project4.png";

function Projects() {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const [refe, inViewe] = useInView();

  useEffect(() => {
    if (inView || inViewe) {
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
    <section id="projects" className="bg-[#dce0e9]">
      <div className="text-center lg:text-start py-8">
        <h2 className="text-[#081944] text-4xl md:text-5xl lg:text-6xl font-bold lg:px-32 md:px-12">
          Recent <span className="text-[#5889F1]">Projects</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-4  place-items-center lg:gap-24 mt-9 pb-14">
        <motion.div
          ref={ref}
          variants={boxVariant}
          initial="hidden"
          animate={control}
          className="flex justify-between items-center max-w-[450px]  max-h-[450px] lg:place-self-end"
        >
          <Image src={project1} className="rounded-xl shadow-2xl  " />
        </motion.div>

        <div className="flex justify-center items-center lg:place-self-start">
          <Image
            src={project2}
            width={450}
            height={450}
            className="rounded-xl shadow-2xl "
          />
        </div>

        <div className="flex justify-center items-center lg:place-self-end">
          {" "}
          <Image
            src={project3}
            width={450}
            height={450}
            className="rounded-xl shadow-2xl  "
          />
        </div>

        <div className="flex justify-center items-center lg:place-self-start">
          <Image
            src={project4}
            width={450}
            height={450}
            className="rounded-xl shadow-2xl  "
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
