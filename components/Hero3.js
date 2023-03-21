import React from "react";

const Hero3 = () => {
  return (
    <>
      <section className="hero3_img h-screen py-28 object-none">
        <div className="space-y-4">
          <h1 className="text-center text-black font-bold text-4xl">Model S</h1>
          <div className="text-center">
            <a href="/" className="text-center text-black underline">
              Schedule a Demo Drive
            </a>
          </div>
        </div>
        <div className="flex gap-4 flex-col md:h-[60vh] h-[70vh]">
          <div className="md:flex grid justify-center mt-auto gap-4">
            <button className="rounded bg-[#3A3E42] px-24 py-2 text-white font-semibold">
              Custom Order
            </button>
            <button className="rounded bg-[#E9E9E8] px-24 py-2 text-black font-semibold">
              Demo Drive
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero3;
