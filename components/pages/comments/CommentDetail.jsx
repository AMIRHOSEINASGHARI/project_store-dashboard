"use client";

import { Drawer, Image } from "antd";
import moment from "moment";
import Link from "next/link";
import React, { useState } from "react";
import { PiEyeBold } from "react-icons/pi";

const CommentDetail = ({
  answer,
  createdAt,
  description,
  productId,
  senderId,
  title,
  _id,
}) => {
  const [inputValue, setInputValue] = useState(answer);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onChange = (e) => {
    setPlacement(e.target.value);
  };
  const onClose = () => {
    setOpen(false);
  };

  // TODO: handle submit
  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <button onClick={() => showDrawer()}>
        <PiEyeBold className="text-[20px]" />
      </button>
      <Drawer
        title="Complete details of comment"
        placement={"right"}
        onClose={onClose}
        open={open}
        width={600}
      >
        <div className="mb-10 flex gap-5">
          <Image width={150} src={productId?.image} />
          <div className="flex flex-col">
            <Link
              href={`/products/${productId?._id}`}
              target="_blank"
              className="font-medium mb-2"
            >
              {productId?.title}
            </Link>
            <span>Price: {productId?.price}$</span>
            <span>Discount: {productId?.discount}%</span>
          </div>
        </div>
        <div className="space-y-5">
          <div>
            <p className="text-blue-500 mb-1">Title:</p>
            <h1 className="text-[20px] font-medium">{title}</h1>
          </div>
          <div>
            <p className="text-blue-500 mb-1">Description:</p>
            <p className="text-[14px]">{description}</p>
          </div>
        </div>
        <hr className="my-3" />
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="rounded-full py-3 px-4 capitalize bg-gray-100 w-fit">
              {senderId?.displayName[0]}
            </div>
            <Link href={`/users/${senderId?._id}`} target="_blank">
              <p className="-mb-1 capitalize font-medium">
                {senderId?.displayName}
              </p>
              <p className="text-[12px] text-gray-500">{senderId?.username}</p>
            </Link>
          </div>
          <p className="text-[12px]">{moment(createdAt).fromNow()}</p>
        </div>
        <hr className="my-3" />
        <form onSubmit={submitHandler}>
          <label htmlFor="answer" className="text-blue-500 mb-1">
            Your Answer:
          </label>
          <div className="w-full flex items-center gap-5">
            <input
              type="text"
              id="answer"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="border rounded-lg py-2 px-4 w-full"
            />
            <button
              type="submit"
              disabled={inputValue.length === 0 && true}
              className={`${
                inputValue
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-400"
              } rounded-lg py-2 px-4`}
            >
              Submit
            </button>
          </div>
        </form>
      </Drawer>
    </div>
  );
};

export default CommentDetail;
