"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import React, { useState } from "react";
import ImageSection from "./ImageSection";
import ColorsSection from "./ColorsSection";
import KeywordsSection from "./KeywordsSection";

const AddProductPage = () => {
  const { collapseMenu } = useContextProvider();
  const [form, setForm] = useState({
    image: "",
    title: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    discount: "",
    colors: [],
    keywords: [],
  });

  return (
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-8`}
    >
      <ImageSection form={form} setForm={setForm} type="create" />
      title description category price stock discount
      <ColorsSection />
      <KeywordsSection />
    </div>
  );
};

export default AddProductPage;
