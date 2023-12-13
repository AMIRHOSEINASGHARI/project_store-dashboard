import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddProductPage from "@/components/pages/addProduct/AddProductPage";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const AddProduct = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return <AddProductPage />;
};

export default AddProduct;
