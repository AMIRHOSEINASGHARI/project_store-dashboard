"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContextProvider } from "@/context/MainContextProvider";
import { signOut } from "next-auth/react";
import Image from "next/image";
import { menuLinks } from "@/constants";

const Sidebar = () => {
  const pathname = usePathname();
  const { collapseMenu, setCollapseMenu, setProgressValue } =
    useContextProvider();

  return (
    <aside
      className={`border-r border-gray-100 max-md:hidden fixed z-30 left-0 h-screen bg-white overflow-y-auto sidebarScroll ${
        !collapseMenu && "w-[250px]"
      }`}
    >
      <div
        className={`flex items-center justify-between fixed bg-white p-4 top-0 ${
          !collapseMenu && "w-[249px]"
        }`}
      >
        <Link href="/" className="flex items-center gap-[10px]">
          <Image
            src="/logo1.svg"
            width={35}
            height={35}
            alt="logo"
            priority
            className={!collapseMenu ? "ml-[10px]" : "ml-[8px]"}
          />
          {!collapseMenu && (
            <div className="flex items-center italic font-bold">
              <span className="text-violet-600">Online</span>
              <span>Shop</span>
            </div>
          )}
        </Link>
        {!collapseMenu && (
          <button
            onClick={() => setCollapseMenu(true)}
            className="p-2 hover:bg-gray-100 rounded-full transition-all duration-150"
          >
            <img src="/icons/angle-left.svg" className="w-[14px]" />
          </button>
        )}
      </div>
      <div className="p-4 pt-[65px]">
        {collapseMenu && (
          <button
            onClick={() => setCollapseMenu(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-all duration-150 flex items-center justify-center w-full"
          >
            <img src="/icons/angle-right.svg" className="w-[14px]" />
          </button>
        )}
        <div>
          <ul>
            {menuLinks.map((item) => (
              <Fragment key={item.title}>
                <li
                  className={`rounded-[10px] transition duration-75 ease-in-out mb-[2px] ${
                    pathname === item.link
                      ? "bg-gray-100 hover:bg-gray-200 font-bold"
                      : "bg-white hover:bg-gray-100 font-semibold"
                  }`}
                >
                  <Link
                    href={item.link}
                    className={`flex items-center ${
                      collapseMenu && "justify-center"
                    } gap-[15px] p-[10px]`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-[16px]"
                    />
                    {!collapseMenu && (
                      <span class="text-[13px]">{item.title}</span>
                    )}
                  </Link>
                </li>
                {item.title === "Customers" && (
                  <div class="w-full h-[1px] my-[13px] bg-gray-100" />
                )}
                {item.title === "Add Blog" && (
                  <div class="w-full h-[1px] my-[13px] bg-gray-100" />
                )}
              </Fragment>
            ))}
            <li className="rounded-[10px] hover:bg-gray-100 transition duration-75 ease-in-out">
              <button
                onClick={() => {
                  signOut();
                  setProgressValue(10);
                }}
                className={`flex items-center ${
                  collapseMenu && "justify-center"
                } w-full gap-[15px] p-[10px]`}
              >
                <img src="/icons/power.svg" className="w-[16px]" />
                {!collapseMenu && (
                  <span class="text-[13px] font-semibold">Exit</span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
