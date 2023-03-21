import React from "react";
import Navbar from "./Navbar";
import { BsChevronDown } from "react-icons/bs";

const Hero2 = () => {
  return (
    <>
      <section id="hero2" className="hero2_img h-screen py-24 object-none">
        <div className="space-y-4">
          <h1 className="text-center text-black font-bold text-2xl">Model Y</h1>
          <p className="text-center text-black text-xl">
            Leasing starting at $349/mo
          </p>
        </div>
        <div className="flex gap-4 flex-col h-96">
          <div className="flex justify-center mt-auto gap-4">
            <button className="rounded bg-[#3A3E42] px-24 py-2 text-white font-semibold">
              Custom Order
            </button>
            <button className="rounded bg-[#E9E9E8] px-24 py-2 text-black font-semibold">
              Demo Drive
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center my-4 text-black cursor-pointer">
          <a href="#hero3">
            <BsChevronDown id="hero2" className="text-xl font-bold" />
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero2;
