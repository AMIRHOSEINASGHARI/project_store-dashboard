"use client";

import React, { useState } from "react";
import toast from "react-hot-toast";
import { uploadImage } from "@/utils/functions";
import { createProduct } from "@/utils/api";
import { useRouter } from "next/navigation";
import ProductFormModal from "@/components/shared/ProductFormModal";

const AddProductPage = () => {
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
