import { Alice, Poppins } from "next/font/google";
const alice = Alice({
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: "400",
});



export default function Home() {
  return (
    <main className="flex  justify-between">
      <img src="Logo.png" alt="logo" />
      <main>
        <a href="home" className={`text-grey-600 ${poppins.className} `}>
          Home
        </a>
        <a href="menu" className={`text-grey-600 ${poppins.className} `}>
          Menu
        </a>
        <a href="blog" className={`text-grey-600 ${poppins.className} `}>
          Blog
        </a>
        <a href="contact-us" className={`text-grey-600 ${poppins.className} `}>
          Contact Us
        </a>
        <button className={`px-4 py-2 bg-green-500 text-white rounded hover:bg-gray-600 ${poppins.className} `} >
          <a href="click">Order now</a>
        </button>
      </main>
    </main>
  );
}
