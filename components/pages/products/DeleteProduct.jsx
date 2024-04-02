"use client";

import Loader from "@/components/shared/Loader";
import { icons } from "@/constants";
import { deleteProduct } from "@/utils/api";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineDelete } from "react-icons/md";

const DeleteProduct = ({ fetchData, productId }) => {
  const [loading, setLoading] = useState(false);
  const deleteHandler = async (id) => {
    //TODO: Soon, we will return to this task
  };

  return (
    <button className="text-[22px] hover:text-red-500 transition duration-300 ease-in-out">
      {icons.trash}
    </button>
  );
};

export default DeleteProduct;
