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
      !form.brand ||
      !form.colors.length
    ) {
      toast.error("Fields with * sign is requiered");
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
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-5 pb-20`}
    >
      <div className="text-sm font-bold rounded-lg py-1 px-3 bg-red-100">
        <span className="text-red-600">Image</span> and{" "}
        <span className="text-red-600">Fileds with (*) sign is required!</span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-5">
        <div className="flex flex-col gap-1 w-full">
          <input
            name="title"
            type="text"
            value={form.title}
            onChange={changeHandler}
            placeholder="Title *"
            className="placeholder:text-xs placeholder:text-red-600 rounded-full bg-gray-100 focus:outline focus:outline-black outline-none py-3 px-4"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <input
            name="brand"
            type="text"
            value={form.brand}
            onChange={changeHandler}
            placeholder="Brand *"
            className="placeholder:text-xs placeholder:text-red-600 rounded-full bg-gray-100 focus:outline focus:outline-black outline-none py-3 px-4"
          />
        </div>
        <CategoryFilter form={form} setForm={setForm} />
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-5">
        <div className="flex flex-col gap-1 w-full">
          <textarea
            name="description"
            value={form.description}
            onChange={changeHandler}
            placeholder="Description"
            className="placeholder:text-xs h-full rounded-3xl bg-gray-100 focus:outline focus:outline-black outline-none py-3 px-4"
          />
        </div>
        <ImageSection form={form} setForm={setForm} type="createProduct" />
      </div>
      <div className="space-y-5">
        <div className="flex gap-5 flex-wrap">
          <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
            <input
              name="price"
              type="number"
              value={form.price}
              onChange={changeHandler}
              placeholder="Price *"
              className="placeholder:text-xs placeholder:text-red-600 w-full rounded-full bg-gray-100 focus:outline focus:outline-black outline-none py-3 px-4"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
            <input
              name="stock"
              type="number"
              value={form.stock}
              onChange={changeHandler}
              placeholder="Stocks *"
              className="placeholder:text-xs placeholder:text-red-600 w-full rounded-full bg-gray-100 focus:outline focus:outline-black outline-none py-3 px-4"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
            <input
              name="discount"
              type="number"
              value={form.discount}
              onChange={changeHandler}
              placeholder="Discount"
              className="placeholder:text-xs w-full rounded-full bg-gray-100 focus:outline focus:outline-black outline-none py-3 px-4"
            />
          </div>
        </div>
      </div>
      <ColorsSection form={form} setForm={setForm} />
      <KeywordsSection
        form={form}
        setForm={setForm}
        placeholder="Type a keyword for your product"
      />
      <button
        type="button"
        disabled={loading}
        className={`${
          loading ? "bg-gray-200 text-black" : "bg-black text-white"
        } flex justify-center font-black text-xl w-full text-center py-4 rounded-full`}
        onClick={submitHandler}
      >
        {loading ? <Loader h={25} w={25} /> : "Share Product"}
      </button>
    </div>
  );
};

export default AddProductPage;
