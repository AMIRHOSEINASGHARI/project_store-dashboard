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

const AddProductPage = () => {
  const { collapseMenu } = useContextProvider();
  const [loading, setLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
    price: "",
    stock: "",
    discount: "",
    category: "",
    colors: [],
    keywords: [],
  });

  useEffect(() => {
    setForm({
      ...form,
      category: selectedCategory.name,
    });
  }, [selectedCategory]);

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
      !form.description ||
      !form.price ||
      !form.stock ||
      !form.category ||
      !form.colors.length ||
      !form.keywords.length
    ) {
      toast.error("Fill all fields");
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
      setForm({
        image: "",
        title: "",
        description: "",
        price: "",
        stock: "",
        discount: "",
        category: "",
        colors: [],
        keywords: [],
      });
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
      <div className="flex flex-col gap-1">
        <input
          name="title"
          type="text"
          value={form.title}
          onChange={changeHandler}
          placeholder="Title"
          className="placeholder:text-xs rounded-full bg-gray-100 focus:outline focus:outline-black outline-none py-3 px-4"
        />
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
              placeholder="Price"
              className="placeholder:text-xs w-full rounded-full bg-gray-100 focus:outline focus:outline-black outline-none py-3 px-4"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
            <input
              name="stock"
              type="number"
              value={form.stock}
              onChange={changeHandler}
              placeholder="Stocks"
              className="placeholder:text-xs w-full rounded-full bg-gray-100 focus:outline focus:outline-black outline-none py-3 px-4"
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
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
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
