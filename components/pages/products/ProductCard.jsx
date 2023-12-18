"use client";

import { createSlug, reducePrice, shorterText } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaHashtag } from "react-icons/fa6";
import { MdFavoriteBorder, MdOutlineModeComment } from "react-icons/md";
import { FaHourglassEnd } from "react-icons/fa6";

const ProductCard = ({
  _id,
  category,
  colors,
  comments,
  createdAt,
  description,
  discount,
  image,
  keywords,
  likes,
  price,
  stock,
  title,
}) => {
  return (
    <div className="p-5 border hover:shadow-xl hover:shadow-slate-300 transition-all duration-100 flex flex-col justify-between gap-6">
      <div>
        <Link
          href={`/products/${createSlug(title)}`}
          className="w-full flex justify-center bg-gray-100 p-3"
        >
          <Image src={image} width={170} height={170} alt={title} priority />
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
      <div className="w-full flex items-center justify-between gap-1">
        <div className="flex flex-col items-center">
          <FaHashtag />
          <p className="break-all text-xs mt-1">{stock}</p>
        </div>
        <div className="flex flex-col items-center">
          {/* //TODO: make this dynamic */}
          <FaHourglassEnd />
          <p className="break-all text-xs mt-1">250</p>
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
    </div>
  );
};

export default ProductCard;