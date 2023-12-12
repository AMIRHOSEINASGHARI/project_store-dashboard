"use client";

import { SessionProvider } from "next-auth/react";

const SessionContextProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default SessionContextProvider;
