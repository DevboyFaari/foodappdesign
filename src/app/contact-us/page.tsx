import Footer from "@fooddesignapp/components/Footer";
import Header from "@fooddesignapp/components/Header";
import React from "react";

const countryOptions = [
  { value: "+1", label: "US (+1)" },
  { value: "+44", label: "UK (+44)" },
  { value: "+234", label: "NIG (+234)" },
];

const page = () => {
  return (
    <div>
      <Header />
     
      <div className="flex flex-col md:flex-row justify-center items-center h-screen">
  <>
    <div className="w-full md:w-1/2 p-4 md:p-6">
      <form className="space-y-6">
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full md:w-[256px] bg-transparent h-[44px] p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full md:w-[256px] h-[44px] bg-transparent p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div className="flex flex-col md:flex-row md:space-x-4">
          <select 
            className="w-full md:w-1/3 bg-transparent  p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          >
          {countryOptions.map((options)=>(
            <option key={options.value} value={options.value} >
                {options.label}
            </option>
          ))}
          </select>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            className="w-full md:w-[528px] p-2 mt-4 md:mt-0 border bg-transparent border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            className="w-full p-2 border bg-transparent border-gray-300 rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full p-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          Submit
        </button>
      </form>
    </div>

    <div className="w-full md:w-1/2 h-[300px] md:h-full mt-4 md:mt-0">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31711.714755998443!2d3.3420795!3d6.5243793!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b7d5a1aa823%3A0xf9c4e0db0c3de9d7!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sus!4v1691496609737!5m2!1sen!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </>
</div>

  <Footer />

    </div>
  );
};

export default page;
