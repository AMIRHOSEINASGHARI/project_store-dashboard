"use client";

import ProductFormModal from "@/components/shared/ProductFormModal";
import React, { useState } from "react";

const EditProductPage = (props) => {
  //TODO: fetch rpdocy data with it's ID from api and setForm
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

  const submitHandler = (e) => {};

  return (
    <ProductFormModal
      form={form}
      setForm={setForm}
      changeHandler={(e) =>
        setForm({
          ...form,
          [e.target.name]: e.target.value,
        })
      }
      submitHandler={submitHandler}
    />
  );
};

export default EditProductPage;
