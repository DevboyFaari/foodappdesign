import React from "react";

import { Alice } from "next/font/google";

const alice = Alice({
  subsets: ["latin"],
  weight: "400",
});

const Nody = () => {
  return (
    <div className="flex h-[900px] w-full overflow-x-hidden">
      <div className="flex-1 mt-[80px]">
        {" "}
        {/*------left side-------*/}
        <h1
          className={`w-[40%] h-[82px] text-[70px] mt-[90px] font-[serif] text-7xl whitespace-nowrap ${alice.className}`}
        >
          You've Got Questions.
        </h1>
        <h1
          className={`text-[70px] mt-[-5px] h-[82px]  font-[serif] text-7xl whitespace-nowrap ${alice.className}`}
        >
          We've Got Taste.
        </h1>
        <h1 className="text-[24px] font-[poppins] w-[674px] mt-3 h-[72px] ">
          Explore your Taste with special food in the special place. This text
          don’t have any meaning
        </h1>
        <div className="flex absolute">
          <button className="w-[137px] h-[44px] py-[10px] px-[20px] bg-[#04B90B] mt-4 text-white rounded-lg">
            Order Now!
          </button>
          <h1 className="absolute left-[150px] bottom-[10px] font-medium whitespace-nowrap  text-[#04B90B] ">
            Explore menu
          </h1>
        </div>
        <div className="flex bg-[#F4F5F6] w-[536px] h-[134px] mt-[120px] rounded-2xl">
          <span className="flex-1 flex justify-center items-center w-[100px] text-center font-bold text-[#777E90] mr-[300px]">
            9+
            <br /> years of service
          </span>
        </div>
        <svg
          className="ml-[290px] mt-[-110px]"
          width="1"
          height="68"
          viewBox="0 0 1 68"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0.5"
            y1="2.18557e-08"
            x2="0.499997"
            y2="68"
            stroke="#E6E8EC"
          />
        </svg>
        <span className="flex-1 justify-center  w-[200px] absolute text-center font-bold text-[#777E90] ml-[300px] mt-[-68px]">
          120+
          <br /> stores in the world.
        </span>
      </div>
      <div className="flex-1 mt-[80px]">
        {" "}
        {/*------right side-------*/}
        <svg
          className="mt-[90px] ml-[-193px]"
          width="810"
          height="547"
          viewBox="0 0 724 647"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx="700.382"
            cy="681.446"
            rx="711.947"
            ry="662.5"
            transform="rotate(142.342 694.382 681.446)"
            fill="#DDF3D8"
          />
        </svg>
        <img
          src="kamchi.png"
          alt="noodle-bowl"
          className="w-[510px] mt-[-590px] mr-[110px]"
        />
        <img
          src="bowl.png"
          alt="noodle-bowl"
          className="w-[90px] mt-[-460px] ml-[500px]"
        />
        <svg
          className="mt-[288px]"
          width="367"
          height="143"
          viewBox="0 0 367 143"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3.20753 10.4768L0.253104 15.699L311.491 192.677L317.429 182.207L3.20753 10.4768ZM321.384 184.356L315.396 194.914L352.309 216.052L358.694 204.636L321.384 184.356Z"
            fill="#2F363A"
          />
          <path
            d="M317.429 182.207L311.491 192.677L315.396 194.914L321.384 184.356L317.429 182.207Z"
            fill="#F7E89D"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.66112 0.8365L5.78241 6.10079L319.544 178.566L325.33 168.011L8.66112 0.8365ZM329.315 170.103L323.481 180.746L360.695 201.349L366.915 189.842L329.315 170.103Z"
            fill="#2F363A"
          />
          <path
            d="M325.33 168.011L319.544 178.566L323.481 180.746L329.315 170.103L325.33 168.011Z"
            fill="#F7E89D"
          />
        </svg>
        <svg
          className="mt-[-180px]"
          width="24"
          height="76"
          viewBox="0 0 54 76"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_1482_43)">
            <rect
              x="35.782"
              y="0.0625"
              width="20"
              height="72"
              transform="rotate(29.0637 35.782 0.0625)"
              fill="#F7E89D"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_1482_43"
              x="0.805664"
              y="0.0625"
              width="52.458"
              height="75.6494"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="3" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.3225 0 0 0 0 0.3126 0 0 0 0 0.2775 0 0 0 1 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_1482_43"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_1482_43"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default Nody;
