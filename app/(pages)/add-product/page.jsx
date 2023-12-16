import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AddProductPage from "@/components/pages/addProduct/AddProductPage";
import NotAllowed from "@/components/shared/NotAllowed";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const AddProduct = async () => {
  const session = await getServerSession(authOptions);
  //TODO: create a api for fetching loggedIn user data and checking what roll do the user is playing and showing NotAllowed cmp
  const roll = "ADMIN"; //* HARD CODED

  if (!session) redirect("/login");

  if (roll === "USER") return <NotAllowed />;

  return <AddProductPage />;
};

export default AddProduct;
