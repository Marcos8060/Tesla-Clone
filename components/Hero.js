"use client";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const Hero = () => {

        const handleScroll = (e) => {
          e.preventDefault();
          const section = document.querySelector('#hero2');
          section.scrollIntoView({ behavior: 'smooth' });
        }

  return (
    <>
      <section className="hero_img h-screen py-28">
        <div className="space-y-4">
          <h1 className="text-center text-black font-bold text-4xl">Model 3</h1>
          <p className="text-center text-black text-xl">
            Leasing starting at $349/mo
          </p>
        </div>
        <div className="flex gap-4 flex-col h-[60vh]">
          <div className="flex justify-center mt-auto gap-4">
            <button className="rounded bg-[#3A3E42] px-24 py-2 text-white font-semibold">
              Custom Order
            </button>
            <button className="rounded bg-[#E9E9E8] px-24 py-2 text-black font-semibold">
              Demo Drive
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center my-2 text-black cursor-pointer">
          <a href="#hero2">
            <BsChevronDown
            onClick={handleScroll}
              id="hero2"
              className="text-xl font-bold hover:animate-bounce"
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
