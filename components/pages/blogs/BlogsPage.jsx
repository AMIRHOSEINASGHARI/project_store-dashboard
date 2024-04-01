"use client";

import Loader from "@/components/shared/Loader";
import { fetchBlogs } from "@/utils/api";
import React, { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import PageHeader from "@/components/shared/PageHeader";

const BlogsPage = () => {
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
      <div className="w-full flex justify-center">
        <Loader />
      </div>
    );

  if (blogs.success === false) {
    return <h1>{blogs.msg}</h1>;
  }

  return (
    <div>
      <PageHeader
        title="Blogs"
        links={[
          { name: "Dashboard", route: "/" },
          { name: "Blogs", route: "/blogs" },
        ]}
        subLink="List"
      />
      {blogs?.blogs?.length !== 0 && (
        <div
          className={`grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5`}
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
