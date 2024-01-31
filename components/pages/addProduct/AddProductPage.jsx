"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import React, { useEffect, useState } from "react";
import ImageSection from "./ImageSection";
import ColorsSection from "./ColorsSection";
import KeywordsSection from "./KeywordsSection";
import { categories } from "@/constants";
import CategoryFilter from "./CategoryFilter";
import toast from "react-hot-toast";
import { uploadImage } from "@/utils/functions";
import { createProduct } from "@/utils/api";
import Loader from "@/components/shared/Loader";
import { useRouter } from "next/navigation";
import ProductFormModal from "@/components/shared/ProductFormModal";

const AddProductPage = () => {
  const { collapseMenu } = useContextProvider();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    title: "",
    brand: "",
    category: "",
    image: "",
    price: "",
    stock: "",
    description: "",
    discount: "",
    colors: [],
    keywords: [],
  });

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const submitHandler = async () => {
    if (
      !form.image ||
      !form.title ||
      !form.price ||
      !form.stock ||
      !form.category ||
      !form.brand
    ) {
      toast.error("Fill all fields!");
      return;
    }

    setLoading(true);
    const uploadResult = await uploadImage(form.image);
    const result = await createProduct({
      ...form,
      image: uploadResult.imageUrl,
    });
    setLoading(false);
    if (result.success) {
      toast.success(result.msg);
      router.push("/products");
    } else {
      toast.error(result.msg);
    }
  };

  return (
    <ProductFormModal
      form={form}
      setForm={setForm}
      changeHandler={changeHandler}
      submitHandler={submitHandler}
      loading={loading}
      type="create"
    />
  );
};

export default AddProductPage;
