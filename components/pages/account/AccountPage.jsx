"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import Image from "next/image";
import React from "react";
import { BiEditAlt } from "react-icons/bi";
import CurrentUser from "./CurrentUser";
import Administrators from "./Administrators";

const AccountPage = ({ currentUser, users }) => {
  const { collapseMenu } = useContextProvider();

  return (
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-4`}
    >
      <CurrentUser currentUser={currentUser} />
      <Administrators users={users} currentUserRoll={currentUser.roll} />
    </div>
  );
};

export default AccountPage;
