import React, { useState, useRef, useEffect } from "react";
import Drawer from "./drawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section
        className="flex items-center justify-between sm:px-16 px-4 py-2 sticky top-0 z-50">
        <div>
          <p className="px-3 py-1 text-black">Tesla</p>
        </div>
        <nav className="md:block hidden">
          <ul className="flex items-center gap-8 text-black">
            <li className="">
              Model S
            </li>
            <li className="">
              Model 3
            </li>
            <li className="">
              Model X
            </li>
            <li className="">
              Model Y
            </li>
            <li className="">
              Solar Roof
            </li>
            <li className="">
              Solar Panels
            </li>
            <li className="">
              Powerwall
            </li>
          </ul>
        </nav>
        <div className="md:block hidden">
          <ul className="flex items-center gap-8 text-black">
            <li className="">
              Shop
            </li>
            <li className="">
              Account
            </li>
            <li className="">
              Menu
            </li>
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
      </section>
    </>
  );
};

export default Navbar;
