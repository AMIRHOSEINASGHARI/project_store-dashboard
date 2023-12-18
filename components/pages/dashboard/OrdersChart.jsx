"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";

const OrdersChart = () => {
  //TODO: make this dynamic
  const options = {
    chart: {
      type: "donut",
      width: "100%",
    },
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      dropShadow: false,
    },
    labels: ["Phone", "Laptop", "TV", "Watch"],
    responsive: [
      {
        breakpoint: 400,
        options: {
          chart: {
            width: 250,
          },
        },
      },
      {
        breakpoint: 1600,
        options: {
          chart: {
            width: 300,
          },
        },
      },
      {
        breakpoint: 2000,
        options: {
          chart: {
            width: 500,
          },
        },
      },
      {
        breakpoint: 5000,
        options: {
          chart: {
            width: 600,
          },
        },
      },
    ],
  };

  return (
    <div className="flex flex-col cardShadow rounded-xl p-4 bg-white">
      <h1 className="heading mb-3">New Orders</h1>
      <div className="h-full">
        <div className="w-full h-full flex items-center justify-center">
          <ReactApexChart
            height={400}
            options={options}
            series={[44, 55, 13, 33]}
            type="donut"
            className=""
          />
        </div>
      </div>
    </div>
  );
};

export default OrdersChart;
