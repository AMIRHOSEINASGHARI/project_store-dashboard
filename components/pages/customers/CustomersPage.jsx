"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import React from "react";

const CustomersPage = () => {
  const { collapseMenu } = useContextProvider();
  return (
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-5 pb-20`}
    >
      CustomersPage
    </div>
  );
};

export default CustomersPage;
