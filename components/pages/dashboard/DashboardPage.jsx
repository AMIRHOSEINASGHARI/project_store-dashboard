"use client";

import React from "react";
import { useContextProvider } from "@/context/MainContextProvider";
import ReviewsCmp from "./ReviewsCmp";

const DashboardPage = () => {
  const { collapseMenu } = useContextProvider();

  return (
    <div
      className={`${collapseMenu ? "distanceCollapse" : "distanceNotCollapse"}`}
    >
      <ReviewsCmp />
    </div>
  );
};

export default DashboardPage;
