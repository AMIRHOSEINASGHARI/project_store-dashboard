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

  //TODO: create a product api
  const submitHandler = (e) => {};

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
          className="placeholder:text-xs rounded-full border border-gray-200 focus:outline focus:outline-black outline-none py-3 px-4"
        />
      </div>
      <div className="flex flex-col lg:flex-row w-full gap-5">
        <div className="flex flex-col gap-1 w-full">
          <textarea
            name="description"
            value={form.description}
            onChange={changeHandler}
            placeholder="Description"
            className="placeholder:text-xs h-full rounded-3xl border border-gray-200 focus:outline focus:outline-black outline-none py-3 px-4"
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
              className="placeholder:text-xs w-full rounded-full border border-gray-200 focus:outline focus:outline-black outline-none py-3 px-4"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
            <input
              name="stock"
              type="number"
              value={form.stock}
              onChange={changeHandler}
              placeholder="Stocks"
              className="placeholder:text-xs w-full rounded-full border border-gray-200 focus:outline focus:outline-black outline-none py-3 px-4"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1 min-w-[200px]">
            <input
              name="discount"
              type="number"
              value={form.discount}
              onChange={changeHandler}
              placeholder="Discount"
              className="placeholder:text-xs w-full rounded-full border border-gray-200 focus:outline focus:outline-black outline-none py-3 px-4"
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
        className="bg-black text-white font-black text-xl w-full text-center py-4 rounded-full"
      >
        Share Product
      </button>
    </div>
  );
};

export default AddProductPage;
