import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@fooddesignapp/components/ui/card";
import { TiStarFullOutline } from "react-icons/ti";

import React from "react";

const Carddetails = () => {
  const foodItems = [
    {
      image: "food1.png",
      name: "Gimbap",
      price: "N 5700",
    },
    {
      image: "food2.png",
      name: "Korean BBQ",
      price: "N 10700",
    },
    {
      image: "food3.png",
      name: "Kimchi",
      price: "N 9800",
    },
  ];

  return (
    <div className="flex flex-wrap mt-[-80px] text-left justify-center">
      {foodItems.map((item, index) => (
        <Card
          key={index}
          className="card w-[340px]  h-[381px] gap-[24px] flex flex-col  items-center m-2"
        >
          <img
            src={item.image}
            className="w-[340px] h-[481px] object-cover"
            alt={`Food ${index + 1}`}
          />
          <CardTitle className="ml-[-150px]">{item.name}</CardTitle>
          <CardContent className="flex items-center text-[#04B90B] mt-[-20px] ml-[-60px]">
            <TiStarFullOutline className="ml-6" />
            <TiStarFullOutline className="ml-[-5px]" />
            <TiStarFullOutline className="ml-[-5px]" />
            <TiStarFullOutline className="ml-[-5px]" />
            <TiStarFullOutline className="ml-[-5px]" />
            <TiStarFullOutline className="ml-[-5px]" />

            <p className="ml-2">214 reviews</p>
          </CardContent>

          <CardFooter className="mt-[30px] mr-[-230px]">
            <div className="flex items-center mt-[-50px] ml-[-250px] text-[#04B90B]">
              <span>{item.price}</span>
              <button className="ml-[50px] w-[137px] h-[44px] py-[10px] px-[20px] bg-[#04B90B] text-white rounded-lg">
                Order Now!
              </button>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Carddetails;
