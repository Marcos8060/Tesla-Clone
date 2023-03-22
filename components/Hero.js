"use client";
import React from "react";
import { BsChevronDown } from "react-icons/bs";
import Link from "next/link";

const Hero = () => {

        const handleScroll = (e) => {
          e.preventDefault();
          const section = document.querySelector('#hero2');
          section.scrollIntoView({ behavior: 'smooth' });
        }

  return (
    <>
      <section className="hero_img h-screen md:py-28 py-32">
        <div className="space-y-4">
          <h1 className="text-center text-black font-bold text-4xl">Model 3</h1>
          <p className="text-center text-black text-xl">
            Leasing starting at $349/mo
          </p>
        </div>
        <div className="flex items-center justify-center gap-4 flex-col mx-auto md:h-[60vh] h-[65vh]">
          <div className="md:flex grid justify-center mt-auto gap-4">
            <Link href="/overview" type="button" className="rounded bg-[#3A3E42] px-24 py-2 text-white font-semibold">
              Custom Order
            </Link>
            <Link href="/drive" type="button" className="rounded bg-[#E9E9E8] px-24 py-2 text-black font-semibold">
              Demo Drive
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center my-2 text-black cursor-pointer">
          <a href="#hero2">
            <BsChevronDown
            onClick={handleScroll}
              id="hero2"
              className="text-xl font-bold animate-bounce"
            />
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
