'use client'
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";

const Drive = () => {
  const [toggleTab, setToggleTab] = useState(1);
  return (
    <>
      <Navbar />
      <div className="flex flex-col pt-40 px-40">
        <h1 className="text-4xl font-semibold">Schedule a Demo Drive</h1>
        <p>
          Demo Drive a Tesla at a store near you. Drivers must have a valid U.S.
          driver's license and be 18 years of age or older.
        </p>
      </div>
      {toggleTab === 1 ? (
        <>
          <div className="flex items-center justify-center">
            <div className="">
              <img src="/images/drive1.png" alt="" />
            </div>
          </div>
        </>
      ) : toggleTab === 2 ? (
        <>
          <div className="flex items-center justify-center">
            <div className="">
              <img src="/images/drive2.png" alt="" />
            </div>
          </div>
        </>
      ) : toggleTab === 3 ? (
        <>
          <div className="flex items-center justify-center">
            <div className="">
              <img src="/images/drive3.png" alt="" />
            </div>
          </div>
        </>
      ) : toggleTab === 4 ? (
        <>
          <div className="flex items-center justify-center">
            <div className="">
              <img src="/images/drive4.png" alt="" />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}

      <div className="flex items-center justify-center gap-4 mb-24">
        <button
          onClick={() => setToggleTab(1)}
          className={`${
            toggleTab === 1
              ? "border-2 border-blue-700"
              : "border border-gray-700"
          } rounded px-12 py-2 `}
        >
          Model S
        </button>
        <button
          onClick={() => setToggleTab(2)}
          className={`${
            toggleTab === 2
              ? "border-2 border-blue-700"
              : "border border-gray-700"
          } rounded px-12 py-2`}
        >
          Model 3
        </button>
        <button
          onClick={() => setToggleTab(3)}
          className={`${
            toggleTab === 3
              ? "border-2 border-blue-700"
              : "border border-gray-700"
          } rounded px-12 py-2`}
        >
          Model X
        </button>
        <button
          onClick={() => setToggleTab(4)}
          className={`${
            toggleTab === 4
              ? "border-2 border-blue-700"
              : "border border-gray-700"
          } rounded px-12 py-2`}
        >
          Model Y
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Drive;
