import React from "react";

const Hero6 = () => {
  return (
    <>
      <section className="hero6_img h-screen py-28 object-none">
        <div className="space-y-4">
          <h1 className="text-center text-black font-bold text-4xl">
            Solar Roof
          </h1>
          <p className="text-center text-black">
            Produce Clean Energy From Your Roof
          </p>
        </div>
        <div className="flex gap-4 flex-col md:h-[60vh] h-[70vh]">
          <div className="md:flex grid justify-center mt-auto gap-4">
            <button className="rounded bg-[#3A3E42] px-24 py-2 text-white font-semibold">
              Order Now
            </button>
            <button className="rounded bg-[#E9E9E8] px-24 py-2 text-black font-semibold">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero6;
