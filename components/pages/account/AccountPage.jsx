"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import React from "react";
import CurrentUser from "./CurrentUser";
import Administrators from "./Administrators";
import { useSession } from "next-auth/react";

const AccountPage = () => {
  const { collapseMenu } = useContextProvider();
  const session = useSession();

  return (
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-10 pb-20`}
    >
      <CurrentUser session={session} />
      <Administrators session={session} />
    </div>
  );
};

export default AccountPage;
