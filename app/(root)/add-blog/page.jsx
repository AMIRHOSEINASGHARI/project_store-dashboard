import AddBlogPage from "@/components/pages/addBlog/AddBlogPage";
import NotAllowed from "@/components/shared/NotAllowed";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const AddBlog = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");
  if (session.user.roll === "USER") return <NotAllowed />;

  return <AddBlogPage />;
};

export default AddBlog;
