"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import React, { useEffect, useState } from "react";
import ImageSection from "../addProduct/ImageSection";
import KeywordsSection from "../addProduct/KeywordsSection";

const AddBlogPage = () => {
  const { collapseMenu } = useContextProvider();
  const [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
    keywords: [],
    slug: "",
  });

  useEffect(() => {
    setForm({
      ...form,
      slug: form.title.split(" ").join("-"),
    });
  }, [form.title]);

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-8 pb-20`}
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
      <KeywordsSection
        form={form}
        setForm={setForm}
        placeholder="Type a keyword for your blog"
      />
      <button
        type="button"
        className="bg-black text-white font-black text-xl w-full text-center py-4 rounded-full"
      >
        Share Blog
      </button>
    </div>
  );
};

export default AddBlogPage;
