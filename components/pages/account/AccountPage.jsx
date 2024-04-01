"use client";

import React from "react";
import { useContextProvider } from "@/context/MainContextProvider";
import CurrentUser from "./CurrentUser";
import Administrators from "./Administrators";
import { useSession } from "next-auth/react";
import Link from "next/link";
import PageHeader from "@/components/shared/PageHeader";

const AccountPage = () => {
  const { collapseMenu } = useContextProvider();
  const session = useSession();

  return (
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-10 pb-20`}
    >
      <PageHeader
        title="Account"
        links={[
          { name: "Dashboard", route: "/" },
          { name: "Account", route: "/account" },
        ]}
        subLink="General"
      />
      <CurrentUser session={session} />
      <Administrators session={session} />
    </div>
  );
};

export default AccountPage;
