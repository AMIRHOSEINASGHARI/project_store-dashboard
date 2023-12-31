import AccountPage from "@/components/pages/account/AccountPage";
import NotAllowed from "@/components/shared/NotAllowed";
import { authOptions } from "@/utils/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const Account = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login");

  return <AccountPage />;
};

export default Account;
