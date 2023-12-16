import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import NotAllowed from "@/components/shared/NotAllowed";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";

const Account = async () => {
  const session = await getServerSession(authOptions);
  //TODO: create a api for fetching loggedIn user data and checking what roll do the user is playing and showing NotAllowed cmp and passing it as a prop to AccontPage cmp
  //TODO: create a api for fetching administrators and admins data
  const users = []; //* HARD CODED

  const filterdUsers = users?.filter(
    (user) => user.username !== session?.user?.email
  );

  if (!session) redirect("/login");

  if (session.user.roll === "USER") return <NotAllowed />;

  return (
    // <AccountPage
    //   currentUser={currentUser}
    //   users={filterdUsers}
    // />
    "AccountPage CMP"
  );
};

export default Account;
