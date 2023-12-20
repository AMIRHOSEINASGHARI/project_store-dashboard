"use client";

import Loader from "@/components/shared/Loader";
import { useContextProvider } from "@/context/MainContextProvider";
import { fetchProducts } from "@/utils/api";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useInView } from "react-intersection-observer";

const ProductsPage = () => {
  const { collapseMenu } = useContextProvider();
  const { ref, inView } = useInView();
  const [data, setData] = useState(null);
  const [error, setError] = useState({
    success: true,
    msg: "",
  });
  const [pageNumber, setPageNumber] = useState(2);

  useEffect(() => {
    try {
      fetchProducts(1).then((res) => {
        setError({
          success: res.success,
          msg: res.msg,
        });
        setData(res.products);
      });
    } catch (error) {
      setError({
        success: res.success,
        msg: res.msg,
      });
    }
  }, []);

  useEffect(() => {
    if (inView) {
      fetchProducts(pageNumber).then((res) => {
        setData([...data, ...res?.products]);
        if (!res.isEnd) {
          setPageNumber((prevPage) => prevPage + 1);
        } else {
          setPageNumber("end");
        }
      });
    }
  }, [inView]);

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

      {!error?.success && (
        <p className="w-full flex items-center justify-center">{error?.msg}</p>
      )}

      <div
        className={`w-full grid grid-cols-1 ${
          collapseMenu && "md:grid-cols-2"
        } lg:grid-cols-3 xl:grid-cols-4 min-h-[90vh]`}
      >
        {data?.length !== 0 &&
          data?.map((product) => (
            <ProductCard key={product?._id} {...product} />
          ))}
      </div>
      {pageNumber !== "end" && (
        <div className="w-full flex items-center justify-center" ref={ref}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
