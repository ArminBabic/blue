import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

import { useInView } from "react-intersection-observer";

function Values() {
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
    <section className="values flex flex-col items-center justify-center py-20 ">
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="max-w-[750px] text-center px-8 "
      >
        <h2 className="text-white text-4xl lg:text-5xl font-medium max-w-[724px]">
          We care about...{" "}
          <span className="underline underline-offset-8 text-[#C2D5FE]">
            People
          </span>
        </h2>

        <p className="justify-self-start max-w-[526px] py-6 text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          massa tincidunt tincidunt massa elit elit tortor. A odio donec et, cum
          at ut gravida. Tellus sit nulla blandit ac tincidunts.
        </p>
        <button className="text-white px-8 py-2 bg-[#6187FF] rounded-3xl hover:scale-105 transition duration-[.4s] ">
          Contact Us
        </button>
      </motion.div>
    </section>
  );
}

export default Values;
