"use client";

import React from "react";
import { useContextProvider } from "@/context/MainContextProvider";
import ReviewsCmp from "./ReviewsCmp";
import OrdersChart from "./OrdersChart";

const DashboardPage = () => {
  const { collapseMenu } = useContextProvider();

  return (
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-8`}
    >
      <ReviewsCmp />
      <OrdersChart />
    </div>
  );
};

export default DashboardPage;
