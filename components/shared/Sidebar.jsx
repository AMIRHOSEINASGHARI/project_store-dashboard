"use client";

import React from "react";
import { menuList } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsArrowsCollapseVertical } from "react-icons/bs";
import { useContextProvider } from "@/context/MainContextProvider";

const Sidebar = () => {
  const pathname = usePathname();
  const { collapseMenu, setCollapseMenu, setProgressValue } =
    useContextProvider();

  if (pathname.includes("/login") || pathname.includes("/register"))
    return null;

  return (
    <aside className="max-md:hidden fixed z-10 left-0 h-screen bg-white p-4 lg:px-6 mt-[73px] shadow pb-24">
      <div className="flex flex-col justify-between h-full">
        <div className="space-y-0.5 overflow-y-auto sidebarScroll">
          {menuList.map((item) => {
            const { id, icon, link, title } = item;
            return (
              <Link
                key={id}
                href={link}
                onClick={() => setProgressValue(10)}
                className={`rounded-lg transition-all duration-150 ${
                  collapseMenu
                    ? "p-3 px-4 block"
                    : "flex items-center gap-4 p-3 lg:px-4 lg:pr-14 pr-14"
                } ${
                  pathname === link
                    ? "bg-blue-500 text-white hover:bg-blue-600 font-semibold"
                    : "hover:bg-gray-100 text-gray-600 font-light"
                }`}
              >
                <div className="text-[25px]">{icon}</div>
                {!collapseMenu && title}
              </Link>
            );
          })}
        </div>
        <button
          className={`rounded-lg bg-orange-100 hover:bg-orange-200 text-orange-600 font-bold transition-all duration-150 ${
            collapseMenu
              ? "p-3 px-4 block"
              : "flex items-center gap-4 p-3 lg:px-4 pr-14"
          }`}
          onClick={() => setCollapseMenu(!collapseMenu)}
        >
          <BsArrowsCollapseVertical className="text-[25px]" />

          {!collapseMenu && "Collapse"}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
