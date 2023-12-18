"use client";

import React from "react";
import ReactApexChart from "react-apexcharts";

const TotoalRevenue = () => {
  //TODO: make this dynamic
  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    colors: ["#475BE8", "#CFC8FF"],
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    stroke: {
      colors: ["transparent"],
      width: 4,
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    },
    yaxis: {
      title: {
        text: "$ (thousands)",
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
    tooltip: {
      y: {
        formatter(val) {
          return `$ ${val} thousands`;
        },
      },
    },
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
        breakpoint: 500,
        options: {
          chart: {
            width: 300,
          },
        },
      },
      {
        breakpoint: 600,
        options: {
          chart: {
            width: 400,
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            width: 500,
          },
        },
      },
      {
        breakpoint: 900,
        options: {
          chart: {
            width: 400,
          },
        },
      },
      {
        breakpoint: 1000,
        options: {
          chart: {
            width: 500,
          },
        },
      },
      {
        breakpoint: 1200,
        options: {
          chart: {
            width: 600,
          },
        },
      },
      {
        breakpoint: 1280,
        options: {
          chart: {
            width: 800,
          },
        },
      },
      {
        breakpoint: 1500,
        options: {
          chart: {
            width: 600,
          },
        },
      },
      {
        breakpoint: 1500,
        options: {
          chart: {
            width: 700,
          },
        },
      },
      {
        breakpoint: 2000,
        options: {
          chart: {
            width: 800,
          },
        },
      },
      {
        breakpoint: 5000,
        options: {
          chart: {
            width: 1000,
          },
        },
      },
    ],
  };
  const series = [
    {
      name: "Last Month",
      data: [183, 124, 115, 85, 143, 143, 96],
    },
    {
      name: "Running Month",
      data: [95, 84, 72, 44, 108, 108, 47],
    },
  ];

  return (
    <div className="w-full cardShadow rounded-xl p-4 bg-white flex flex-col flex-1">
      <h1 className="heading mb-3">Totoal Revenue</h1>
      <div className="w-full h-full flex items-center justify-center">
        <ReactApexChart
          height={400}
          options={options}
          series={series}
          type="bar"
        />
      </div>
    </div>
  );
};

export default TotoalRevenue;
