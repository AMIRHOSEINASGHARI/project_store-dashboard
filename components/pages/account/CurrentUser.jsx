"use client";

import React from "react";
import Image from "next/image";
import { BiEditAlt } from "react-icons/bi";
import Loader from "@/components/shared/Loader";
import EditProfile from "./EditProfile";

const CurrentUser = ({ session: { data, status } }) => {
  if (status === "loading") {
    return (
      <div className="w-full flex items-center justify-center my-32">
        <Loader />
      </div>
    );
  }

  return (
    <div
      className={`w-full cardShadow bg-white rounded-xl p-5 flex gap-5 flex-col items-center`}
    >
      <div className="relative w-fit">
        <EditProfile {...data} />
      </div>
      <div className="space-y-2 w-full flex flex-col items-center">
        <div className="flex flex-col items-center w-full">
          <p className="uppercase text-3xl font-black text-center">
            {data?.user?.name}
          </p>
          <div className="flex items-center gap-4">
            <p>{data?.user?.username}</p>
            <p className="bg-gray-100 rounded-xl py-1 px-3 text-sm font-bold text-gray-500 border border-gray-300">
              {data?.user?.roll}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentUser;
