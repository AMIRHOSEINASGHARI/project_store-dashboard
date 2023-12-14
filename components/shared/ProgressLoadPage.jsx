"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const ProgressLoadPage = () => {
  const { progressValue, setProgressValue } = useContextProvider();
  const pathname = usePathname();

  useEffect(() => {
    const interval = setInterval(() => {
      if (progressValue < 100) {
        setProgressValue((prevNumber) => prevNumber + 1);
      } else {
        clearInterval(interval);
      }
    }, 1);

    return () => clearInterval(interval);
  }, [progressValue]);

  useEffect(() => {
    setProgressValue(10);
  }, [pathname]);

  if (progressValue === 100) return null;

  return (
    <div className="fixed z-50 w-full top-0">
      <progress
        value={progressValue}
        max="100"
        className="transition duration-150 ease-in-out"
      ></progress>
    </div>
  );
};

export default ProgressLoadPage;
