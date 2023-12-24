"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import React, { useEffect, useState } from "react";

const CommentsPage = () => {
  const { collapseMenu } = useContextProvider();
  const [comments, setComments] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/api/comments")
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, []);
  console.log(comments);

  return (
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-5 pb-20`}
    >
      CommentsPage
    </div>
  );
};

export default CommentsPage;
