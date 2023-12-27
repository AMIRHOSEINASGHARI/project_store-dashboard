"use client";

import Loader from "@/components/shared/Loader";
import { deleteProduct } from "@/utils/api";
import { Button, Tooltip } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md";

const DeleteProduct = ({ fetchData, productId }) => {
  const [loading, setLoading] = useState(false);
  const deleteHandler = async (id) => {
    //TODO: Soon, we will return to this task
  };

  return (
    <Tooltip title="Delete Product">
      <button>
        <MdOutlineDelete className="text-[25px] text-red-500" />
      </button>
    </Tooltip>
  );
};

export default DeleteProduct;
