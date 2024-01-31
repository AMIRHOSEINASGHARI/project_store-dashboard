"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import CategoryFilter from "../pages/addProduct/CategoryFilter";
import ImageSection from "../pages/addProduct/ImageSection";
import ColorsSection from "../pages/addProduct/ColorsSection";
import KeywordsSection from "../pages/addProduct/KeywordsSection";
import Loader from "./Loader";
import Link from "next/link";

const ProductFormModal = ({
  type,
  form,
  setForm,
  changeHandler,
  submitHandler,
  loading,
}) => {
  const { collapseMenu } = useContextProvider();

  return (
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-5 pb-[200px]`}
    >
      <h1 className="sm:text-[35px] text-[20px] font-[700] -mb-6">
        {type === "create" ? "Create a new product" : "Edit your product"}
      </h1>
      <div className="flex items-center gap-2 text-[14px]">
        <Link
          href="/"
          className="font-[400] text-gray-600 border-b border-transparent hover:border-gray-400"
        >
          Dashboard
        </Link>
        <div className="w-[4px] h-[4px] bg-gray-600 rounded-full" />
        <Link
          href="/products"
          className="font-[400] text-gray-600 border-b border-transparent hover:border-gray-400"
        >
          Products
        </Link>
        <div className="w-[4px] h-[4px] bg-gray-600 rounded-full" />
        <p className="font-[400] text-gray-400">
          {type === "create" ? "Create" : "Edit"}
        </p>
      </div>

      <section className="lg:flex cardShadow3 rounded-2xl py-[32px] px-[24px]">
        <div className="w-full lg:w-[500px] max-lg:mb-10">
          <h1 className="w-full text-[17px] font-[700]">Basic details</h1>
        </div>
        <div className="w-full flex flex-col ">
          <input
            name="title"
            type="text"
            value={form.title}
            onChange={changeHandler}
            placeholder="Product Title"
            className="input1 cursor-pointer"
          />
          <div className="w-full">
            <h4 className="text-gray-500 font-medium text-[15px] mt-[30px] mb-[15px]">
              Description
            </h4>
            <textarea
              name="description"
              rows={12}
              value={form.description}
              onChange={changeHandler}
              placeholder="Write something"
              className="input1 cursor-pointer"
            />
          </div>
        </div>
      </section>
      <section className="lg:flex cardShadow3 rounded-2xl py-[32px] px-[24px]">
        <div className="w-full lg:w-[500px] max-lg:mb-10">
          <h1 className="w-full text-[17px] font-[700]">Image</h1>
          <p className="w-full text-[14px] font-[300] text-gray-400">
            Image will appear in the store front of your website.
          </p>
        </div>
        <ImageSection form={form} setForm={setForm} type="editProduct" />
      </section>
      <section className="lg:flex cardShadow3 rounded-2xl py-[32px] px-[24px]">
        <div className="w-full lg:w-[500px] max-lg:mb-10">
          <h1 className="w-full text-[17px] font-[700]">Pricing</h1>
        </div>
        <div className="w-full flex flex-col gap-6">
          <input
            name="price"
            min={0}
            type="number"
            value={form.price}
            onChange={changeHandler}
            placeholder="Price ($)"
            className="input1 cursor-pointer"
          />
          <input
            name="stock"
            min={0}
            type="number"
            value={form.stock}
            onChange={changeHandler}
            placeholder="Stocks"
            className="input1 cursor-pointer"
          />
          <input
            name="discount"
            min={0}
            max={100}
            type="number"
            value={form.discount}
            onChange={changeHandler}
            placeholder="Discount (%)"
            className="input1 cursor-pointer"
          />
        </div>
      </section>
      <section className="lg:flex cardShadow3 rounded-2xl py-[32px] px-[24px]">
        <div className="w-full lg:w-[500px] max-lg:mb-10">
          <h1 className="w-full text-[17px] font-[700]">
            Branding and Category
          </h1>
        </div>
        <div className="w-full flex flex-col gap-6">
          <CategoryFilter form={form} setForm={setForm} />
          <input
            name="brand"
            type="text"
            value={form.brand}
            onChange={changeHandler}
            placeholder="Brand"
            className="input1 cursor-pointer"
          />
        </div>
      </section>
      <section className="lg:flex cardShadow3 rounded-2xl py-[32px] px-[24px]">
        <div className="w-full lg:w-[500px] max-lg:mb-10">
          <h1 className="w-full text-[17px] font-[700]">
            Branding and Category
          </h1>
        </div>
        <div className="w-full flex flex-col gap-6">
          <KeywordsSection
            form={form}
            setForm={setForm}
            placeholder="Type a keyword for your product"
          />
        </div>
      </section>
      <div className="w-full flex justify-end">
        <button
          type="button"
          disabled={loading}
          className={`${
            loading ? "bg-gray-200 text-black" : "bg-violet-600 text-white"
          } rounded-xl py-2 px-4 text-[14px] font-[500]`}
          onClick={submitHandler}
        >
          {loading ? (
            <Loader h={25} w={25} />
          ) : type === "create" ? (
            "Create"
          ) : (
            "Edit"
          )}
        </button>
      </div>
    </div>
  );
};

export default ProductFormModal;
