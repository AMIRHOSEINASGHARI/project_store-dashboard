"use client";

import React, { useEffect, useState } from "react";
import BlogFormModal from "@/components/shared/BlogFormModal";
import { createBlog } from "@/utils/api";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { uploadImage } from "@/utils/functions";

const AddBlogPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
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

  const submitHandler = async () => {
    if (!form.image || !form.title || !form.description) {
      toast.error("Fields with * sign is requiered");
      return;
    }

    setLoading(true);
    const uploadResult = await uploadImage(form.image);
    const result = await createBlog({
      ...form,
      image: uploadResult.imageUrl,
    });
    setLoading(false);
    if (result.success) {
      toast.success(result.msg);
      router.push("/blogs");
    } else {
      toast.error(result.msg);
    }
  };

  return (
    <BlogFormModal
      type="create"
      form={form}
      setForm={setForm}
      loading={loading}
      changeHandler={changeHandler}
      submitHandler={submitHandler}
    />
  );
};

export default AddBlogPage;
