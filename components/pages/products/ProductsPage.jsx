"use client";

import Loader from "@/components/shared/Loader";
import { useContextProvider } from "@/context/MainContextProvider";
import { fetchProducts } from "@/utils/api";
import React, { useEffect, useState } from "react";
import { Button, Flex, Tooltip } from "antd";
import { shorterText } from "@/utils/functions";
import Link from "next/link";
import PageTable from "@/components/shared/PageTable";
import { productsColumns } from "@/constants";
import moment from "moment";
import DeleteProduct from "./DeleteProduct";
import { CiEdit } from "react-icons/ci";
import ProductDetails from "./ProductDetails";
import Image from "next/image";

const ProductsPage = () => {
  const { collapseMenu } = useContextProvider();
  const [products, setProducts] = useState(null);
  const [dataSource, setDataSource] = useState([]);

  const fetchData = async () => {
    const data = await fetchProducts();
    setProducts(await data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (products?.success === true) {
      setDataSource(
        products.products.map((product) => ({
          key: product?._id,
          image: (
            <Tooltip title={product?.title}>
              <Link href={`/products/${product?._id}`}>
                <Image
                  width={110}
                  height={110}
                  alt={shorterText(product?.title, 5)}
                  priority
                  className=""
                  src={product?.image}
                />
              </Link>
            </Tooltip>
          ),
          title: (
            <Tooltip title={product?.title}>
              <div className="font-medium">
                <p>{shorterText(product?.title, 20)}</p>
                <div className="text-gray-400">
                  in <span className="capitalize">{product?.category}</span>
                </div>
              </div>
            </Tooltip>
          ),
          price: <p className="font-medium">{product?.price}</p>,
          discount: <p className="font-medium">{product?.discount}</p>,
          stock: <p className="font-medium">{product?.stock}</p>,
          status: (
            <p className="bg-green-100 text-green-500 font-medium w-fit rounded-lg py-1 px-3">
              Published
            </p>
          ), //TODO: make this dynamic
          actions: (
            <div className="flex items-center gap-5">
              <ProductDetails {...product} />
              <Tooltip title="Edit product">
                <Link
                  href={`/products/edit/${product?._id}`}
                  target="_blank"
                  className="w-[20px] h-[20px]"
                >
                  <img src="/icons/edit.svg" className="w-full h-full" />
                </Link>
              </Tooltip>
              <DeleteProduct fetchData={fetchData} productId={product?._id} />
            </div>
          ),
        }))
      );
    }
  }, [products]);

  if (products === null)
    return (
      <div
        className={`${
          collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
        } space-y-5 pb-20 w-full flex justify-center`}
      >
        <Loader />
      </div>
    );

  if (products.success === false) {
    return (
      <h1
        className={`${
          collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
        } space-y-5 pb-20`}
      >
        {products.msg}
      </h1>
    );
  }

  return (
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-5 pb-20`}
    >
      <div>
        <h1 className="sm:text-[35px] text-[20px] font-[700]">Products</h1>
        <div className="flex items-center gap-2 text-[14px]">
          <Link
            href="/"
            className="font-[400] text-gray-600 border-b border-transparent hover:border-gray-400"
          >
            Dashboard
          </Link>
          <div className="w-[4px] h-[4px] bg-gray-600 rounded-full" />
          <Link
            href="/products"
            className="font-[400] text-gray-600 border-b border-transparent hover:border-gray-400"
          >
            Products
          </Link>
          <div className="w-[4px] h-[4px] bg-gray-600 rounded-full" />
          <p className="font-[400] text-gray-400">List</p>
        </div>
      </div>

      <PageTable
        columns={productsColumns}
        dataSource={dataSource}
        pagination={true}
      />
    </div>
  );
};

export default ProductsPage;
