"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import React from "react";

const ProductsPage = () => {
  const { collapseMenu } = useContextProvider();

  return (
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-5 pb-20`}
    >
      ProductsPage
    </div>
  );
};

export default ProductsPage;
