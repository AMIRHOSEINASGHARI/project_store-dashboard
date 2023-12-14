import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import AccountPage from "@/components/pages/account/AccountPage";
import Administrators from "@/components/pages/account/Administrators";
import NotAllowed from "@/components/shared/NotAllowed";
import StoreDashboardUser from "@/utils/models/user";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const Account = async () => {
  const session = await getServerSession(authOptions);

  const currentUser = await StoreDashboardUser.findOne({
    username: session?.user?.email,
  }).select(["username", "displayName", "avatar", "roll"]);

  const users = await StoreDashboardUser.find().select([
    "username",
    "displayName",
    "avatar",
    "roll",
    "createdAt",
  ]);

  const filterdUsers = users?.filter(
    (user) => user.username !== session?.user?.email
  );

  if (!session) redirect("/login");

  if (currentUser?.roll === "USER") return <NotAllowed />;

  return (
    <AccountPage
      currentUser={JSON.parse(JSON.stringify(currentUser))}
      users={JSON.parse(JSON.stringify(filterdUsers))}
    />
  );
};

export default Account;
