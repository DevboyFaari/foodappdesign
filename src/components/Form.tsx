import React from "react";
import { Alice } from "next/font/google";

const alice = Alice({
  subsets: ["latin"],
  weight: "400",
});

const Form = () => {
  return (
    <div>
      <div
        className={`text-[48px] flex justify-center items-center relative top-[100px] ${alice.className}`}
      >
        Get the Best Taste <span className="text-[#04B90B]">Now!</span>
      </div>
    </div>
  );
};

export default Form;
