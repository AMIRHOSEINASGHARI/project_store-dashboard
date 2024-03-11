"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  const { collapseMenu } = useContextProvider();

  return (
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-5 pb-20 flex justify-center w-full items-center flex-col`}
    >
      <Image
        src="/404.svg"
        width={300}
        height={300}
        priority
        alt="not found"
        className="max-md:w-40"
      />
      <p className="font-bold text-lg">We can not find this route</p>
      <Link
        href="/"
        className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 transition duration-150 ease-in-out rounded-xl py-2 px-5 mt-5"
      >
        <Image
          src="/icons/home.svg"
          width={15}
          height={15}
          priority
          alt="home"
        />
        <p className="text-sm">Dashboard</p>
      </Link>
    </div>
  );
};

export default NotFound;
