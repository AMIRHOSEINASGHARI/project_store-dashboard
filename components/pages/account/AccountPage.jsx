"use client";

import React from "react";
import { useContextProvider } from "@/context/MainContextProvider";
import CurrentUser from "./CurrentUser";
import Administrators from "./Administrators";
import { useSession } from "next-auth/react";
import Link from "next/link";

const AccountPage = () => {
  const { collapseMenu } = useContextProvider();
  const session = useSession();

  return (
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-10 pb-20`}
    >
      <div>
        <h1 className="sm:text-[35px] text-[20px] font-[700]">Account</h1>
        <div className="flex items-center gap-2 text-[14px]">
          <Link
            href="/"
            className="font-[400] text-gray-600 border-b border-transparent hover:border-gray-400"
          >
            Dashboard
          </Link>
          <div className="w-[4px] h-[4px] bg-gray-600 rounded-full" />
          <Link
            href="/account"
            className="font-[400] text-gray-600 border-b border-transparent hover:border-gray-400"
          >
            Account
          </Link>
          <div className="w-[4px] h-[4px] bg-gray-600 rounded-full" />
          <p className="font-[400] text-gray-400">General</p>
        </div>
      </div>
      <CurrentUser session={session} />
      <Administrators session={session} />
    </div>
  );
};

export default AccountPage;
