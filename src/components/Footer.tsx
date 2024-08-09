import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Footer = () => {
  return (
    <div className={`mt-[50px] md:mt-[100px] flex flex-col md:flex-row justify-center items-center ${poppins.className}`}>
      <div className="text-center mb-8 md:mb-0 md:mr-8">
        <img src="./logo.png" alt="food-logo" className="mx-auto" />
        <p className="w-[90%] md:w-[336px] h-auto md:h-[82px] mx-auto mt-4">
          Explore your Taste with special food in the special place, that will
          make you happy. I try to write something without lorem ipsum.
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <h4 className="text-black-900 font-black mb-2">Support</h4>
          <div className="flex flex-col space-y-2">
            <a href="#help" className="text-gray-500 hover:underline">
              Help Center
            </a>
            <a href="#safety-info" className="text-gray-500 hover:underline">
              Safety Information
            </a>
            <a href="#cancelation" className="text-gray-500 hover:underline">
              Cancellation Option
            </a>
            <a href="#report" className="text-gray-500 hover:underline">
              Report Complaint
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-black-900 font-black mb-2">Community</h4>
          <div className="flex flex-col space-y-2">
            <a href="#services" className="text-gray-500 hover:underline">
              Services
            </a>
            <a href="#blog" className="text-gray-500 hover:underline">
              Blog
            </a>
            <a href="#support" className="text-gray-500 hover:underline">
              Support
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
