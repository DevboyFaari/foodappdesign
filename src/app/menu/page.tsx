import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from "@fooddesignapp/components/ui/card";
import Header from "@fooddesignapp/components/Header";
import { Alice, Poppins } from "next/font/google";
import { TiStarFullOutline } from "react-icons/ti";
import Footer from "@fooddesignapp/components/Footer";
import { alice } from "../fonts";

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});

const Carddetails = () => {
  const foodItems = [
    {
      image: "food1.png",
      name: "Gimbap",
      price: "N 5700",
      review: "272",
    },
    {
      image: "food2.png",
      name: "Korean BBQ",
      price: "N 10700",
      review: "670",
    },
    {
      image: "food3.png",
      name: "Kimchi",
      price: "N 9800",
      review: "565",
    },
    {
      image: "food 4.png",
      name: "Bibimbap",
      price: "N 8900",
      review: "838",
    },
    {
      image: "food 5.png",
      name: "Tteokbokki",
      price: "N 6400",
      review: "348",
    },
    {
      image: "food 6.png",
      name: "Jjajangmyeon",
      price: "N 7600",
      review: "1000+",
    },
  ];

  return (
    <div className="flex justify-center mt-[80px]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foodItems.map((item, index) => (
          <Card
            key={index}
            className="card w-[340px] h-[381px] flex flex-col items-center m-2"
          >
            <img
              src={item.image}
              className="w-[340px] h-[381px] object-cover"
              alt={`Food ${index + 1}`}
            />
            <div className="text-left mt-2">
              <CardTitle className={`ml-4 text-xl font-bold ${alice.className}`}>
                {item.name}
              </CardTitle>
              <CardContent className="flex items-center text-[#04B90B] mt-[10px] ml-[-20px]">
                <TiStarFullOutline className="ml-6" />
                <TiStarFullOutline className="ml-[-5px]" />
                <TiStarFullOutline className="ml-[-5px]" />
                <TiStarFullOutline className="ml-[-5px]" />
                <TiStarFullOutline className="ml-[-5px]" />
                <TiStarFullOutline className="ml-[-5px]" />

                <p className={`ml-2 ${poppins.className}`}>{item.review} Reviews</p>
              </CardContent>

              <CardFooter className="flex items-center mt-2 ml-4 text-[#04B90B]">
                <span className={`text-xl font-bold whitespace-nowrap relative right-[20px] ${poppins.className}`}>
                  {item.price}
                </span>
                <button className={`ml-4 w-[137px] h-[44px] py-[10px] px-[20px] bg-[#04B90B] text-white rounded-lg ${poppins.className}`}>
                  Order Now!
                </button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <div>
      <Header />
      <div className="relative top-[200px] text-center">
        <h1
          className={`text-[50px] flex justify-center items-center relative top-[-140px] ${alice.className}`}
        >
          Get <span className="text-[#04B90B]">special</span> Meals
        </h1>
        <div className="flex justify-center items-center relative top-[-140px]">
          <span className={`text-[#777E90] text-[20px] mt-[-20px] text-center ${poppins.className}`}>
            Best cooks and best delivery guys all at your service. Hot tasty
            <br />
            food will reach you in 60 minutes.
          </span>
        </div>
      </div>
      <div className="flex justify-center mt-[60px]">
        <div className={`${poppins.className} flex justify-between items-center w-[570px] h-[52px] rounded-[8px] bg-white p-2 shadow-lg`}>
          <div className="flex items-center w-[184px] h-[48px] rounded-[8px] bg-[#43CB48] p-2">
            <img
              src="./food1.png"
              className="w-[33px] h-[33px] mr-2"
              alt="korean-food"
            />
            <a
              href="korean-food"
              className="text-white relative right-[10px] whitespace-nowrap"
            >
              Korean Food
            </a>
          </div>
          <div className="flex items-center w-[184px] h-[48px] rounded-[8px] bg-white p-2">
            <img
              src="./food1.png"
              className="w-[33px] h-[33px] mr-2"
              alt="korean-food"
            />
            <a
              href="vietnam-food"
              className="text-black relative right-[10px] whitespace-nowrap"
            >
              Vietnam Food
            </a>
          </div>

          <div className="flex items-center w-[184px] h-[48px] rounded-[8px] bg-white p-2">
            <img
              src="./food1.png"
              className="w-[33px] h-[33px] mr-2"
              alt="thai-food"
            />
            <a href="thai-food" className="text-black whitespace-nowrap">
              Thai Food
            </a>
          </div>
        </div>
      </div>
      <Carddetails />
      <Footer />
    </div>
  );
};

export default Page;
