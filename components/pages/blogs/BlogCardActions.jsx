"use client";

import React, { useState } from "react";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDelete } from "react-icons/md";
import Link from "next/link";

const BlogCardActions = ({ _id }) => {
  const [loading, setLoading] = useState(false);

  //TODO: api for delete blog
  const clickHandler = (id) => {};

  return (
    <div className="flex items-center gap-5">
      <Link
        href={`/blogs/edit/${_id}`}
        target="_blank"
        className="bg-gray-100 text-gray-600 hover:text-blue-500 transition-all duration-150 rounded-xl p-3 flex items-center justify-center flex-1 gap-2"
      >
        <CiEdit className="text-[20px]" />
        <p className="text-xs">Edit</p>
      </Link>
      <button
        className="bg-gray-100 text-gray-600 hover:text-red-500 transition-all duration-150 rounded-xl p-3 flex items-center justify-center flex-1 gap-2"
        onClick={() => clickHandler(_id)}
      >
        <MdOutlineDelete className="text-[20px]" />
        <p className="text-xs">Delete</p>
      </button>
    </div>
  );
};

export default BlogCardActions;
