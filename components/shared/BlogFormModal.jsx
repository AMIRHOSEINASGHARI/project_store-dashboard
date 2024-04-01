"use client";

import ImageSection from "../pages/addProduct/ImageSection";
import KeywordsSection from "../pages/addProduct/KeywordsSection";
import Loader from "./Loader";
import PageHeader from "./PageHeader";

const BlogFormModal = ({
  form,
  setForm,
  changeHandler,
  type,
  loading,
  submitHandler,
}) => {
  return (
    <>
      <PageHeader
        title="Add a new blog"
        links={[
          { name: "Dashboard", route: "/" },
          { name: "Blogs", route: "/blogs" },
        ]}
        subLink="Add"
      />
      <div className="space-y-5">
        <div className="flex flex-wrap gap-5">
          <div className="flex flex-col gap-1 flex-1">
            <input
              name="title"
              type="text"
              value={form.title}
              onChange={changeHandler}
              placeholder="Title *"
              className="placeholder:text-xs rounded-full bg-gray-100 focus:outline focus:outline-black outline-none py-3 px-4"
            />
          </div>
          <div className="flex flex-col gap-1 flex-1">
            <input
              disabled
              readOnly
              name="slug"
              type="text"
              value={form.slug}
              placeholder="Slug"
              className="placeholder:text-xs text-gray-400 rounded-full bg-gray-100 focus:outline focus:outline-black outline-none py-3 px-4"
            />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row w-full gap-5">
          <div className="flex flex-col gap-1 w-full">
            <textarea
              name="description"
              value={form.description}
              onChange={changeHandler}
              placeholder="Description *"
              className="placeholder:text-xs h-full rounded-3xl bg-gray-100 focus:outline focus:outline-black outline-none py-3 px-4"
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
          className={`${
            loading ? "bg-gray-200 text-black" : "bg-black text-white"
          } flex justify-center font-black text-xl w-full text-center py-4 rounded-full`}
          onClick={submitHandler}
        >
          {loading ? (
            <Loader h={25} w={25} />
          ) : type === "create" ? (
            "Share Blog"
          ) : (
            "Edit Blog"
          )}
        </button>
      </div>
    </>
  );
};

export default BlogFormModal;
