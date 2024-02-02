"use client";

import Loader from "@/components/shared/Loader";
import { deleteComment } from "@/utils/api";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md";

const DeleteComment = ({ commentId, fetchData }) => {
  const [loading, setLoading] = useState(false);
  const clickHandler = async (id) => {
    if (commentId === id) setLoading(true);
    const result = await deleteComment(id);
    setLoading(false);
    if (result.success) {
      toast.success(result.msg);
      fetchData();
    } else {
      toast.error(result.msg);
    }
  };
  return (
    <button onClick={() => clickHandler(commentId)}>
      {loading ? (
        <Loader w={20} h={20} />
      ) : (
        <MdOutlineDelete className="text-[25px] text-gray-500" />
      )}
    </button>
  );
};

export default DeleteComment;
