"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import Image from "next/image";
import React from "react";

const NotAllowed = () => {
  const { collapseMenu } = useContextProvider();
  return (
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-8 flex flex-col items-center justify-center`}
    >
      <Image
        src="/not-allowed.png"
        width={250}
        height={250}
        alt="not allowed"
        priority
      />
      <div className="w-full">
        <h1 className="text-4xl font-black text-gray-600 text-center mb-5">
          Access blocked!
        </h1>
      </div>
    </div>
  );
};

export default NotAllowed;
