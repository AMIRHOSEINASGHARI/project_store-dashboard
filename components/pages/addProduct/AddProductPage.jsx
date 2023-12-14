"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import React, { useEffect, useState } from "react";
import ImageSection from "./ImageSection";
import ColorsSection from "./ColorsSection";
import KeywordsSection from "./KeywordsSection";
import { categories } from "@/constants";
import CategoryFilter from "./CategoryFilter";

const AddProductPage = () => {
  const { collapseMenu } = useContextProvider();
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
    price: 0,
    stock: 0,
    discount: 0,
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

  const submitHandler = (e) => {};

  return (
    <form
      onSubmit={submitHandler}
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-8`}
    >
      <ImageSection form={form} setForm={setForm} type="create" />
      <div className="space-y-5">
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Title</label>
          <input
            name="title"
            type="text"
            value={form.title}
            onChange={changeHandler}
            placeholder="Title"
            className="placeholder:text-xs rounded-lg border border-gray-200 focus:outline focus:outline-black outline-none py-3 px-4"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label className="font-semibold">Description</label>
          <textarea
            name="description"
            value={form.description}
            onChange={changeHandler}
            placeholder="Description"
            className="placeholder:text-xs rounded-lg border border-gray-200 focus:outline focus:outline-black outline-none py-3 px-4"
          />
        </div>
        <div className="flex gap-5 flex-wrap">
          <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
            <label className="font-semibold">Price</label>
            <input
              name="price"
              type="number"
              value={form.price}
              onChange={changeHandler}
              placeholder="Price"
              className="placeholder:text-xs w-full rounded-lg border border-gray-200 focus:outline focus:outline-black outline-none py-3 px-4"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
            <label className="font-semibold">Stocks</label>
            <input
              name="stock"
              type="number"
              value={form.stock}
              onChange={changeHandler}
              placeholder="Stocks"
              className="placeholder:text-xs w-full rounded-lg border border-gray-200 focus:outline focus:outline-black outline-none py-3 px-4"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
            <label className="font-semibold">Discount</label>
            <input
              name="discount"
              type="number"
              value={form.discount}
              onChange={changeHandler}
              placeholder="Discount"
              className="placeholder:text-xs w-full rounded-lg border border-gray-200 focus:outline focus:outline-black outline-none py-3 px-4"
            />
          </div>
        </div>
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </div>
      <ColorsSection form={form} setForm={setForm} />
      <KeywordsSection />
    </form>
  );
};

export default AddProductPage;
