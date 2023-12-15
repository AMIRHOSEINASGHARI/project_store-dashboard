"use client";

import React from "react";
import { useContextProvider } from "@/context/MainContextProvider";
import ReviewsCmp from "./ReviewsCmp";
import OrdersChart from "./OrdersChart";
import TotoalRevenue from "./TotoalRevenue";

const DashboardPage = () => {
  const { collapseMenu } = useContextProvider();

  return (
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-8`}
    >
      <ReviewsCmp />
      <div className="flex flex-col xl:flex-row gap-5">
        <TotoalRevenue />
        <OrdersChart />
      </div>
    </div>
  );
};

export default DashboardPage;
