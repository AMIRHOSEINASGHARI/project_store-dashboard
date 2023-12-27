"use client";

import Loader from "@/components/shared/Loader";
import ProductFormModal from "@/components/shared/ProductFormModal";
import { useContextProvider } from "@/context/MainContextProvider";
import { fetchProduct } from "@/utils/api";
import React, { useEffect, useState } from "react";

const EditProductPage = ({ productId }) => {
  const { collapseMenu } = useContextProvider();
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

  useEffect(() => {
    const getProduct = async () => {
      await fetchProduct(productId).then((res) =>
        setForm({
          title: res.product.title,
          brand: res.product.brand,
          category: res.product.category,
          image: res.product.image,
          price: res.product.price,
          stock: res.product.stock,
          description: res.product.description,
          discount: res.product.discount,
          colors: res.product.colors,
          keywords: res.product.keywords,
        })
      );
    };
    getProduct();
  }, [productId]);

  const submitHandler = (e) => {};

  if (!form.title) {
    return (
      <div
        className={`${
          collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
        } space-y-5 pb-20`}
      >
        <Loader />
      </div>
    );
  }

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
