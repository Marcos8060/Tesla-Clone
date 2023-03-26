"use client";
import React, { useState } from "react";
import Link from "next/link";
import OverDrawer from "@/components/overDrawer";
import { TfiWorld } from "react-icons/tfi";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import Footer from "@/components/Footer";

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Overview = () => {
  const [isOpen, setIsOpen] = useState(false);

  const rules = {
    loop: true,
    center: false,
    items: 1,
    margin: 0,
    autoplay: true,
    dots: false,
    autoplayTimeout: 4000,
    smartSpeed: 450,
    // nav: true,
    // navText: [<FaAngleLeft />, <FaAngleRight />],
    responsive: {
      0: {
        items: 1,
        // nav: true,
      },
      600: {
        items: 1,
        // nav: true,
      },
      1000: {
        items: 1,
        // nav: true,
      },
    },
  };

  return (
    <>
      <div className="flex items-center justify-between px-8 py-4">
        <Link href="/">
          <svg
            className="tds-icon tds-icon-logo-wordmark tds-site-logo-icon w-32 block"
            viewBox="0 0 342 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
              fill="currentColor"
            ></path>
          </svg>
          {/* <p className="px-3 py-1 text-black">Tesla</p> */}
        </Link>
        <div>
          <button
            className="text-secondary flex items-center gap-4 cursor-pointer text-sm bg-transparent hover:bg-black text-black hover:text-white px-3 py-2 rounded transition duration-700 ease-in-out"
            onClick={() => setIsOpen(true)}
          >
            <TfiWorld className="text-xl" />
            <p className="">US</p>
          </button>
          <OverDrawer isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </div>
      <div className="sm:flex flex-col px-8">
        <div className="sm:w-6/12 w-full mx-auto">
          <OwlCarousel {...rules}>
            <div className="flex items-center justify-center h-screen">
              <img className="object-cover" src="/images/drive1.png" alt="" />
            </div>
            <div className="flex items-center justify-center h-screen">
              <img className="object-cover" src="/images/drive1.png" alt="" />
            </div>
            <div className="flex items-center justify-center h-screen">
              <img className="object-cover" src="/images/drive1.png" alt="" />
            </div>
            <div className="flex items-center justify-center h-screen">
              <img className="object-cover" src="/images/drive1.png" alt="" />
            </div>
          </OwlCarousel>
        </div>

        <div className="sm:w-3/12 w-full">
          <section>
            <div className="bg-black p-4 rounded text-white">
              <p className="text-sm leading-6">
                $7,500 Federal Tax Credit New Model 3 and Model Y vehicles
                qualify for a federal tax credit for eligible buyers. This
                $7,500 credit is in effect for deliveries taken before an update
                to the federal guidance, which Treasury and the IRS intend to
                issue no later than March 31, 2023.See Details
              </p>
            </div>
            <div className="flex flex-col items-center justify-center my-8 space-y-5">
              <h1 className="font-bold text-4xl">Model 3</h1>
              <p className="text-gray-700">Est. Delivery: Mar 2023</p>
              <p className="text-gray-700 underline">Enter Delivery ZIP Code</p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Overview;
