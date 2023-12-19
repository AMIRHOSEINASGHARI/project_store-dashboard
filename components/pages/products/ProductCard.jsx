"use client";

import { createSlug, reducePrice, shorterText } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaHashtag } from "react-icons/fa6";
import { MdFavoriteBorder, MdOutlineModeComment } from "react-icons/md";
import { FaHourglassEnd } from "react-icons/fa6";
import ProductCardActions from "./ProductCardActions";
import { CgTrashEmpty } from "react-icons/cg";
import { deleteProduct } from "@/utils/api";
import toast from "react-hot-toast";
import Loader from "@/components/shared/Loader";

const ProductCard = ({
  _id,
  category,
  comments,
  discount,
  image,
  likes,
  price,
  stock,
  title,
  orders,
  getProducts,
}) => {
  const [loading, setLoading] = useState(false);

  const handleDeleteProduct = async (productId) => {
    setLoading(true);
    const result = await deleteProduct(productId);
    setLoading(false);
    if (result.success) {
      toast.success(result.msg);
      getProducts();
    } else {
      toast.error(result.msg);
    }
  };

  return (
    <div className="p-5 border hover:shadow-xl hover:shadow-slate-300 transition-all duration-100 flex flex-col justify-between gap-6">
      <div>
        <Link
          href={`/products/${createSlug(title)}`}
          className="w-full h-[180px] overflow-hidden flex justify-center items-center bg-gray-100 p-3"
        >
          <Image
            src={image}
            width={170}
            height={170}
            alt={title}
            priority
            className="object-contain"
          />
        </Link>
        <div className="flex justify-between items-center my-1">
          {discount ? (
            <div className="flex items-baseline gap-1 break-all">
              <p className="text-sky-500 tracking-tight font-semibold text-[20px] break-all">
                $ {reducePrice(discount, price).toLocaleString()}
              </p>
              <p className="text-gray-300 tracking-tight line-through break-all text-[15px]">
                $ {price}
              </p>
            </div>
          ) : (
            <p className="text-sky-500 tracking-tight font-semibold text-[20px] break-all">
              $ {price.toLocaleString()}
            </p>
          )}
          <span className="uppercase bg-gray-100 text-gray-500 rounded-full py-1 px-3 text-xs font-semibold">
            {category}
          </span>
        </div>
        <Link
          href={`/products/${createSlug(title.toLowerCase())}`}
          className="font-bold text-justify hover:text-blue-600 transition duration-100"
        >
          {shorterText(title, 50)}
        </Link>
      </div>
      <div>
        <div className="w-full flex items-center justify-between gap-1 mb-3">
          <div
            className={`flex flex-col items-center ${
              stock <= 10 && "text-red-500"
            }`}
          >
            <FaHashtag />
            <p className="break-all text-xs mt-1">{stock}</p>
          </div>
          <div className="flex flex-col items-center">
            <FaHourglassEnd />
            <p className="break-all text-xs mt-1">{orders.length}</p>
          </div>
          <div className="flex flex-col items-center">
            <MdOutlineModeComment />
            <p className="break-all text-xs mt-1">{comments.length}</p>
          </div>
          <div className="flex flex-col items-center">
            <MdFavoriteBorder />
            <p className="break-all text-xs mt-1">{likes.length}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => handleDeleteProduct(_id)}
            className="bg-gray-100 text-gray-600 hover:text-red-500 transition-all duration-150 rounded-xl py-3 px-6 flex items-center gap-2"
          >
            {loading ? (
              <Loader w={20} h={20} />
            ) : (
              <>
                <CgTrashEmpty className="text-[20px]" />
                <p className="text-xs">Delete</p>
              </>
            )}
          </button>
          <ProductCardActions
            projectId={_id}
            title={title}
            image={image}
            stock={stock}
            discount={discount}
            getProducts={getProducts}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
