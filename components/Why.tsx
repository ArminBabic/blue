import React from "react";
import { HiChatAlt2 } from "react-icons/hi";
import { AiFillClockCircle, AiFillStar } from "react-icons/ai";

function Why() {
  return (
    <div id="why" className="flex justify-center py-20 bg-[#C6C6C6] ">
      <section className="bg-[#fff]/50 w-[80%] rounded-xl py-16 shadow-2xl">
        <div className="text-center pb-16">
          <h2 className=" text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
            Why Chose <span className="text-[#5889F1]">BlueDuck</span>
          </h2>
        </div>

        <div className="flex flex-col items-center md:flex-row justify-center gap-12 lg:gap-20">
          <article className=" max-h-[300px] max-w-[200px] flex flex-col items-center">
            <div className="w-14 h-14 bg-white rounded-2xl rotate-45  mb-5 flex items-center justify-center  ">
              <HiChatAlt2 className="-rotate-45 text-[#6187FF] w-8 h-6" />
            </div>

            <h5 className="font-bold text-center  max-w-[176px]">
              Guaraneteed IT Consulting
            </h5>

            <p className="text-center text-[#081944] opacity-60 max-w-[230px] max-h-[76px] pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              magna.
            </p>
          </article>
          <article className=" max-h-[300px] max-w-[200px] flex flex-col items-center">
            <div className="w-14 h-14 bg-white rounded-2xl rotate-45  mb-5 flex items-center justify-center  ">
              <AiFillClockCircle className="-rotate-45 text-[#6187FF] w-8 h-6" />
            </div>

            <h5 className="font-bold text-center max-w-[176px]">
              Guaraneteed Fast Response Time
            </h5>

            <p className="text-center text-[#081944] opacity-60 max-w-[230px] max-h-[76px] pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              magna.
            </p>
          </article>
          <article className=" max-h-[300px] max-w-[200px] flex flex-col items-center">
            <div className="w-14 h-14 bg-white rounded-2xl rotate-45  mb-5 flex items-center justify-center  ">
              <AiFillStar className="-rotate-45 text-[#6187FF] w-8 h-6" />
            </div>

            <h5 className="font-bold text-center  max-w-[176px]">
              Excellence Is Our Standard
            </h5>

            <p className="text-center text-[#081944] opacity-60 max-w-[230px] max-h-[76px] pt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fringilla
              magna.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}

export default Why;
