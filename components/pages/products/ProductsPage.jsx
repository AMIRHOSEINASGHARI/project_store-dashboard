"use client";

import Loader from "@/components/shared/Loader";
import { useContextProvider } from "@/context/MainContextProvider";
import { fetchProducts } from "@/utils/api";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const ProductsPage = () => {
  const { collapseMenu } = useContextProvider();
  const [data, setData] = useState(null);

  const getProducts = async () => {
    const response = await fetchProducts();
    setData(response);
  };

  useEffect(() => {
    getProducts();
  }, []);
  console.log(data);
  return (
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-5 pb-20`}
    >
      {data === null && (
        <div className="w-full flex items-center justify-center">
          <Loader />
        </div>
      )}

      {!data?.success && (
        <p className="w-full flex items-center justify-center">{data?.msg}</p>
      )}

      <div
        className={`w-full grid grid-cols-1 ${
          collapseMenu && "md:grid-cols-2"
        } lg:grid-cols-3 xl:grid-cols-4`}
      >
        {data?.success &&
          data?.products.map((product) => (
            <ProductCard key={product?._id} {...product} />
          ))}
      </div>
    </div>
  );
};

export default ProductsPage;
