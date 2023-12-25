"use client";

import { reducePrice } from "@/utils/functions";
import { Button, Drawer, Image, Tooltip } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import { FaHashtag } from "react-icons/fa6";
import { MdFavoriteBorder, MdOutlineModeComment } from "react-icons/md";
import { FaHourglassEnd } from "react-icons/fa6";

const ProductDetails = ({
  image,
  title,
  description,
  brand,
  category,
  colors,
  comments,
  createdAt,
  discount,
  keywords,
  likes,
  orders,
  price,
  stock,
  _id,
}) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  // TODO: handle submit
  const submitHandler = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <Tooltip title="Edit Product">
        <Button type="default" size="small" onClick={() => showDrawer()}>
          Edit
        </Button>
      </Tooltip>
      <Drawer
        title="Complete details of this product"
        placement={"right"}
        onClose={onClose}
        open={open}
        width={700}
      >
        <div className="mb-10 flex gap-5">
          <Image width={150} src={image} />
          <div className="flex flex-col">
            <Link
              href={`/products/${_id}`}
              target="_blank"
              className="font-medium mb-2"
            >
              {title}
            </Link>
            <div>
              Price:{" "}
              {discount ? (
                <>
                  <span className=" mr-4">{reducePrice(discount, price)}$</span>
                  <span className="line-through text-gray-400">{price}</span>
                </>
              ) : (
                <span>{price}$</span>
              )}
            </div>
            <span>Discount: {discount}%</span>
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default ProductDetails;
