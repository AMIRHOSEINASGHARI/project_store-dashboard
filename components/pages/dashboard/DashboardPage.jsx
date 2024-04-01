"use client";

import ReviewsCmp from "./ReviewsCmp";
import OrdersChart from "./OrdersChart";
import TotoalRevenue from "./TotoalRevenue";

const DashboardPage = () => {
  return (
    <div className="space-y-8">
      <ReviewsCmp />
      <div className="flex flex-col xl:flex-row gap-5">
        <TotoalRevenue />
        <OrdersChart />
      </div>
    </div>
  );
};

export default DashboardPage;
