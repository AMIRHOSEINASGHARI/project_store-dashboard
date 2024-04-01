import CommentsPage from "@/components/pages/comments/CommentsPage";
import NotAllowed from "@/components/shared/NotAllowed";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const Comments = async () => {
  // TODO : fetch comments in this cmp
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  if (session.user.roll === "USER") return <NotAllowed />;
  return <CommentsPage />;
};

export default Comments;
