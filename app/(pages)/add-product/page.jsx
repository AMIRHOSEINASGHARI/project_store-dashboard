import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddProductPage from "@/components/pages/addProduct/AddProductPage";
import NotAllowed from "@/components/shared/NotAllowed";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const AddProduct = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  if (session.user.roll === "USER") return <NotAllowed />;

  return <AddProductPage />;
};

export default AddProduct;
