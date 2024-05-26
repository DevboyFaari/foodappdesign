import React from "react";
import { Alice } from "next/font/google";
const alice = Alice({
  subsets: ["latin"],
  weight: "400",
});

const Details = () => {
  return (
    <div>
      <h1
        className={`text-[50px] flex justify-center items-center relative top-[-140px] ${alice.className}`}
      >
        Today <span className="text-[#04B90B]">special</span> offers
      </h1>
      <div className="flex justify-center items-center relative top-[-140px]">
        <span className="text-[#777E90] text-[20px] mt-[-20px] text-center">
          Best cooks and best delivery guys all at your service. Hot tasty
          <br />
          food will reach you in 60 minutes.
        </span>
      </div>
    </div>
  );
};

export default Details;
