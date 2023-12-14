import React from "react";
import ReactApexChart from "react-apexcharts";

const OrdersChart = () => {
  //TODO: make this dynamic
  const options = {
    chart: {
      type: "donut",
    },
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      dropShadow: false,
    },
    labels: ["Phone", "Laptop", "TV", "Watch"],
  };

  return (
    <div className="w-full shadow rounded-xl p-4 bg-white flex flex-col flex-1">
      <h1 className="heading mb-3">New Orders</h1>
      <div className="w-full h-full flex items-center justify-center">
        <ReactApexChart
          height={400}
          options={options}
          series={[44, 55, 13, 33]}
          type="donut"
        />
      </div>
    </div>
  );
};

export default OrdersChart;