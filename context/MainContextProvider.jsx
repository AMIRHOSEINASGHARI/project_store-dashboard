"use client";

import React, { createContext, useContext, useState } from "react";

const ContextProvider = createContext();

const MainContextProvider = ({ children }) => {
  const [loaderStatus, setLoaderStatus] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  return (
    <ContextProvider.Provider
      value={{ loaderStatus, setLoaderStatus, showMenu, setShowMenu }}
    >
      {children}
    </ContextProvider.Provider>
  );
};

export default MainContextProvider;

export const useContextProvider = () => useContext(ContextProvider);
