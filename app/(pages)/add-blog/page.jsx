import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddBlogPage from "@/components/pages/addBlog/AddBlogPage";
import NotAllowed from "@/components/shared/NotAllowed";
import StoreDashboardUser from "@/utils/models/user";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const AddBlog = async () => {
  const session = await getServerSession(authOptions);
  const currentUser = await StoreDashboardUser.findOne({
    username: session?.user?.email,
  }).select(["roll"]);

  if (!session) redirect("/login");
  if (currentUser?.roll === "USER") return <NotAllowed />;

  return <AddBlogPage />;
};

export default AddBlog;
