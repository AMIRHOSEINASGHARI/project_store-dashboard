"use client";

import Loader from "@/components/shared/Loader";
import ProductFormModal from "@/components/shared/ProductFormModal";
import { useContextProvider } from "@/context/MainContextProvider";
import { editProduct, fetchProduct } from "@/utils/api";
import { uploadImage } from "@/utils/functions";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditProductPage = ({ productId }) => {
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

  const submitHandler = async (e) => {
    e.preventDefault();

    if (form.image.includes("https://res.cloudinary.com")) {
      setLoading(true);
      const result = await editProduct(productId, form);
      setLoading(false);
      if (result.success) {
        toast.success(result.msg);
        router.push("/products");
      } else {
        toast.error(result.msg);
      }
    } else {
      setLoading(true);
      const uploadResult = await uploadImage(form.image);
      const result = await editProduct(productId, {
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
    }
  };

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
      type="edit"
      loading={loading}
    />
  );
};

export default EditProductPage;
