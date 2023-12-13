"use client";

import Image from "next/image";
import React from "react";
import { BiEditAlt } from "react-icons/bi";

const CurrentUser = ({ currentUser }) => {
  return (
    <div
      className={`w-full bg-white rounded-xl p-5 flex gap-5 flex-col items-center`}
    >
      <div className="relative w-fit">
        <Image
          src={currentUser?.avatar || "/person.jpg"}
          width={250}
          height={250}
          alt={currentUser?.displayName}
          priority
          className="rounded-full"
        />
        <button className="absolute top-3 right-4 border bg-white text-gray-600 rounded-full p-3 text-2xl">
          <BiEditAlt />
        </button>
      </div>
      <div className="space-y-2 w-full flex flex-col items-center">
        <div className="flex flex-col items-center w-full">
          <p className="uppercase text-3xl font-black text-center">
            {currentUser.displayName}
          </p>
          <div className="flex items-center gap-4">
            <p>{currentUser.username}</p>
            <p className="bg-gray-100 rounded-xl py-1 px-3 text-sm font-bold text-gray-500 border border-gray-300">
              {currentUser.roll}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentUser;
