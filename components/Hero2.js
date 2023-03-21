import React from "react";

const Hero2 = () => {
  return (
    <>
      <section id="hero2" className="hero2_img h-screen py-24 object-none">
        <div className="space-y-4">
          <h1 className="text-center text-black font-bold text-4xl">Model Y</h1>
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
      </section>
    </>
  );
};

export default Hero2;
