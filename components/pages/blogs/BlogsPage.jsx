"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import { fetchBlogs } from "@/utils/api";
import React, { useEffect, useState } from "react";

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

  return (
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-5 pb-20`}
    >
      BlogsPage
    </div>
  );
};

export default BlogsPage;
