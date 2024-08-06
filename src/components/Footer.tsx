import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  return (
    <div className={`mt-[100px] ml-[-680px] flex justify-center items-center ${poppins.className}`}>
      <div className="text-center">
        <img src="./logo.png" alt="food-logo" className="mx-auto" />
        <p className="w-[336px] h-[82px]">
          Explore your Taste with special food in the special place, that will
          make you happy. I try to write something without lorem ipsum.
        </p>
        <div className="flex relative bottom-[160px] left-[500px]">
          <div className="grid grid-rows-3  gap-2">
            <h4 className="text-black-900 font-black">Support</h4>
            <a href="#help " className="text-grey-500 hover:underline">
              Help Center
            </a>
            <a href="#safety-info" className="text-grey-500 hover:underline">
              Safety Information
            </a>
            <a href="#cancelation" className="text-grey-500 hover:underline">
              Cancellation Option
            </a>
            <a href="#report" className="text-grey-500 hover:underline">
              Report Complaint
            </a>
          </div>
          <div className="flex flex-col justify-center relative left-[100px] bottom-[50px]">
            <h4 className="text-black-900 font-black">Community</h4>
            <a
              href="#services"
              className="text-grey-500 hover:underline mx-2 bottom-[-30px] relative"
            >
              Services
            </a>
            <a
              href="#blog"
              className="text-grey-500 hover:underline mx-2 bottom-[-30px] relative"
            >
              Blog
            </a>
            <a
              href="#support"
              className="text-grey-300 hover:underline mx-2 bottom-[-30px] relative"
            >
              Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
