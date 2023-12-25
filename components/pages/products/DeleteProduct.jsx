"use client";

import Loader from "@/components/shared/Loader";
import { deleteProduct } from "@/utils/api";
import { Button, Tooltip } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";

const DeleteProduct = ({ fetchData, productId }) => {
  const [loading, setLoading] = useState(false);
  const deleteHandler = async (id) => {
    //TODO: Soon, we will return to this task
  };

  return (
    <Tooltip title="Delete Product">
      <Button
        type="default"
        danger={!loading}
        size="small"
        onClick={() => deleteHandler(productId)}
      >
        {loading ? <Loader w={15} h={15} /> : "Delete"}
      </Button>
    </Tooltip>
  );
};

export default DeleteProduct;
