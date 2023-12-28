"use client";

import Loader from "@/components/shared/Loader";
import { useContextProvider } from "@/context/MainContextProvider";
import { fetchBlogs } from "@/utils/api";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";

const BlogsPage = () => {
  const { collapseMenu } = useContextProvider();
  const [blogs, setBlogs] = useState(null);

  const fetchData = async () => {
    const data = await fetchBlogs();
    setBlogs(await data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (blogs === null)
    return (
      <div
        className={`${
          collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
        } space-y-5 pb-20 w-full flex justify-center`}
      >
        <Loader />
      </div>
    );

  if (blogs.success === false) {
    return (
      <h1
        className={`${
          collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
        } space-y-5 pb-20`}
      >
        {blogs.msg}
      </h1>
    );
  }

  return (
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-5 pb-20`}
    >
      {blogs?.blogs?.length !== 0 && (
        <div
          className={`grid grid-cols-1 ${
            collapseMenu
              ? "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
          } 2xl:grid-cols-4 gap-5`}
        >
          {blogs?.blogs.map((blog) => (
            <BlogCard key={blog._id} {...blog} fetchData={fetchData} />
          ))}
        </div>
      )}
      {blogs?.blogs?.length === 0 && <h1>No Blogs Yet</h1>}
    </div>
  );
};

export default BlogsPage;
