import React, { useState, useRef, useEffect } from "react";
import Drawer from "./drawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="-mb-24 z-40 fixed w-full">
        <p className="text-center py-4 text-sm text-gray-700 bg-white">
          New Model 3 and Model Y vehicles qualify for a federal tax credit for
          eligible buyers. Learn More
        </p>
        <div className="flex items-center justify-between sm:px-16 px-4 py-2">
          <div>
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
          </div>
          <nav className="md:block hidden">
            <ul className="flex items-center gap-8 text-black">
              <li className="">Model S</li>
              <li className="">Model 3</li>
              <li className="">Model X</li>
              <li className="">Model Y</li>
              <li className="">Solar Roof</li>
              <li className="">Solar Panels</li>
              <li className="">Powerwall</li>
            </ul>
          </nav>
          <div className="md:block hidden">
            <ul className="flex items-center gap-8 text-black">
              <li className="">Shop</li>
              <li className="">Account</li>
              <li className="">Menu</li>
            </ul>
          </div>
          <div className="md:hidden block">
            <button
              className="text-secondary text-2xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            >
              Menu
            </button>
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
