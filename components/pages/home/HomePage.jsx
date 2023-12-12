"use client";

import React from "react";
import { useContextProvider } from "@/context/MainContextProvider";

const HomePage = () => {
  const { collapseMenu } = useContextProvider();

  return (
    <div
      className={`${collapseMenu ? "distanceCollapse" : "distanceNotCollapse"}`}
    >
      Home
    </div>
  );
};

export default HomePage;
