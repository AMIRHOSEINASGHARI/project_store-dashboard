"use client";

import { Drawer, Image, Tooltip } from "antd";
import React, { useState } from "react";
import { BiDetail, BiLike, BiCategoryAlt } from "react-icons/bi";
import { BsCurrencyDollar } from "react-icons/bs";
import {
  MdOutlineModeComment,
  MdOutlineNumbers,
  MdInvertColors,
  MdOutlineDescription,
} from "react-icons/md";
import { FaHourglassEnd } from "react-icons/fa6";
import { TbDiscount2, TbBrandZapier } from "react-icons/tb";
import { reducePrice, shorterText } from "@/utils/functions";
import { VscSymbolKeyword } from "react-icons/vsc";
import Link from "next/link";
import { CiEdit } from "react-icons/ci";

const ProductDetails = ({
  title,
  description,
  image,
  price,
  stock,
  discount,
  likes,
  comments,
  orders,
  brand,
  category,
  colors,
  keywords,
  _id,
}) => {
  const [open, setOpen] = useState(false);
  const [moreDes, setMoreDes] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Tooltip title="See Details">
        <button onClick={() => showDrawer()} className="w-[20px] h-[20px]">
          <img src="/icons/document.svg" className="w-full h-full" />
        </button>
      </Tooltip>
      <Drawer
        title={title}
        placement="right"
        onClose={onClose}
        open={open}
        width={500}
      >
        <div className="flex flex-col gap-5">
          <div className="w-full flex items-center justify-center">
            <Image src={image} width={200} />
          </div>
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-4">
              <BiCategoryAlt className="text-[40px] bg-gray-100 rounded-xl p-2.5" />
              Category:
            </span>
            <span className="font-bold text-[20px] capitalize">{category}</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-4">
              <TbBrandZapier className="text-[40px] bg-gray-100 rounded-xl p-2.5" />
              Brand:
            </span>
            <span className="font-bold text-[20px] capitalize">{brand}</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-4">
              <BsCurrencyDollar className="text-[40px] bg-gray-100 rounded-xl p-2.5" />{" "}
              Price:
            </span>
            {discount ? (
              <div className="font-bold text-[20px]">
                <span>{reducePrice(discount, price).toLocaleString()}</span>{" "}
                <span className="line-through text-gray-400 text-sm">
                  {price.toLocaleString()}
                </span>
              </div>
            ) : (
              <span className="font-bold text-[20px]">
                {price.toLocaleString()}
              </span>
            )}
          </div>
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-4">
              <TbDiscount2 className="text-[40px] bg-gray-100 rounded-xl p-2.5" />
              Discount:
            </span>
            <span className="font-bold text-[20px]">{discount} %</span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-4">
              <MdOutlineNumbers className="text-[40px] bg-gray-100 rounded-xl p-2.5" />
              Stocks:
            </span>
            <span
              className={`font-bold text-[20px] ${
                stock <= 10 && "text-red-500"
              }`}
            >
              {stock.toLocaleString()}
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-4">
              <BiLike className="text-[40px] bg-gray-100 rounded-xl p-2.5" />
              Likes:
            </span>
            <span className="font-bold text-[20px]">
              {likes.length.toLocaleString()}
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-4">
              <MdOutlineModeComment className="text-[40px] bg-gray-100 rounded-xl p-2.5" />
              Comments:
            </span>
            <span className="font-bold text-[20px]">
              {comments.length.toLocaleString()}
            </span>
          </div>
          <div className="flex gap-4 items-center">
            <span className="flex items-center gap-4">
              <FaHourglassEnd className="text-[40px] bg-gray-100 rounded-xl p-2.5" />
              Orders:
            </span>
            <span className="font-bold text-[20px]">
              {orders.length.toLocaleString()}
            </span>
          </div>
          {colors.length ? (
            <div className="flex gap-4 items-center">
              <span className="flex items-center gap-4">
                <MdInvertColors className="text-[40px] bg-gray-100 rounded-xl p-2.5" />
                Colors:
              </span>
              <div className="flex flex-wrap gap-3">
                {colors.map((color) => (
                  <div
                    key={color}
                    style={{ backgroundColor: color }}
                    className="w-[15px] h-[15px] rounded-lg outline outline-1 outline-offset-2 shadow-md"
                  />
                ))}
              </div>
            </div>
          ) : null}
          {keywords.length ? (
            <div className="flex gap-1 flex-col">
              <span className="flex items-center gap-4">
                <VscSymbolKeyword className="text-[40px] bg-gray-100 rounded-xl p-2.5" />
                Keywords:
              </span>
              <div className="flex flex-wrap gap-3 ml-14">
                {keywords.map((word) => (
                  <span
                    key={word}
                    className="bg-gray-100 rounded-lg py-1 px-3 text-[10px] border border-gray-200"
                  >
                    {word}
                  </span>
                ))}
              </div>
            </div>
          ) : null}
          {description && (
            <div className="flex gap-1 flex-col">
              <span className="flex items-center gap-4">
                <MdOutlineDescription className="text-[40px] bg-gray-100 rounded-xl p-2.5" />
                Description:
              </span>
              <p>
                {moreDes
                  ? description
                  : shorterText(
                      description,
                      Math.floor(description.length) / 6
                    )}
              </p>
              <button
                className="w-fit text-blue-400"
                onClick={() => setMoreDes(!moreDes)}
              >
                {moreDes ? "less" : "More"}
              </button>
            </div>
          )}
          <Link
            href={`/products/edit/${_id}`}
            target="_blank"
            className="flex justify-end"
          >
            <CiEdit className="text-[25px]" />
          </Link>
        </div>
      </Drawer>
    </>
  );
};

export default ProductDetails;
