"use client";

import Loader from "@/components/shared/Loader";
import { useContextProvider } from "@/context/MainContextProvider";
import { fetchProducts } from "@/utils/api";
import React, { useEffect, useState } from "react";
import { Button, Flex, Image, Tooltip } from "antd";
import { shorterText } from "@/utils/functions";
import Link from "next/link";
import PageTable from "@/components/shared/PageTable";
import { productsColumns } from "@/constants";
import moment from "moment";
import DeleteProduct from "./DeleteProduct";
import { CiEdit } from "react-icons/ci";
import ProductDetails from "./ProductDetails";

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
              <Image width={40} src={product?.image} />
            </Tooltip>
          ),
          title: (
            <Tooltip title={product?.title}>
              {shorterText(product?.title, 20)}
            </Tooltip>
          ),
          category: product?.category,
          brand: product?.brand,
          price: product?.price,
          discount: product?.discount,
          stock: product?.stock,
          comments: product?.comments.length,
          likes: product?.likes.length,
          orders: product?.orders.length,
          date: moment(product?.createdAt).fromNow(),
          actions: (
            <div className="flex items-center gap-3">
              <ProductDetails {...product} />
              <Tooltip title="Edit product">
                <Link href={`/products/edit/${product?._id}`} target="_blank">
                  <CiEdit className="text-[25px]" />
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
      <PageTable
        columns={productsColumns}
        dataSource={dataSource}
        btnTitle={"Delete"}
        selecttion={true}
        pagination={true}
      />
    </div>
  );
};

export default ProductsPage;
