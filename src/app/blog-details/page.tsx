"use client";
import Header from "@fooddesignapp/components/Header";
import React from "react";
import { useRouter } from "next/navigation";

const page = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <div>
      <Header />
      <button
        onClick={handleGoBack}
        className="mt-4 px-4 py-2 bg-gray-800 text-white rounded"
      >
        Go Back
      </button>
    </div>
  );
};

export default page;
