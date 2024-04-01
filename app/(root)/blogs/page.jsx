import BlogsPage from "@/components/pages/blogs/BlogsPage";
import NotAllowed from "@/components/shared/NotAllowed";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const Blogs = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  if (session.user.roll === "USER") return <NotAllowed />;
  return <BlogsPage />;
};

export default Blogs;
