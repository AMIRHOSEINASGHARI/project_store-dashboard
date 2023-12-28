"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import React, { useEffect, useState } from "react";
import ImageSection from "../addProduct/ImageSection";
import KeywordsSection from "../addProduct/KeywordsSection";
import BlogFormModal from "@/components/shared/BlogFormModal";

const AddBlogPage = () => {
  const { collapseMenu } = useContextProvider();
  const [loading, setLoading] = useState(false);
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
    <BlogFormModal
      type="create"
      form={form}
      setForm={setForm}
      loading={loading}
      changeHandler={changeHandler}
    />
  );
};

export default AddBlogPage;
