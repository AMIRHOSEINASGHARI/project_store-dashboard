"use client";

import React, { Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContextProvider } from "@/context/MainContextProvider";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { shorterText } from "@/utils/functions";
import { menuLinks } from "@/constants";

const Sidebar = () => {
  const pathname = usePathname();
  const session = useSession();
  const { collapseMenu, setCollapseMenu, setProgressValue } =
    useContextProvider();

  if (pathname.includes("/login") || pathname.includes("/register"))
    return null;

  return (
    <aside
      className={`max-md:hidden fixed z-30 left-0 h-screen bg-white overflow-y-auto sidebarScroll ${
        !collapseMenu && "w-[250px]"
      }`}
    >
      <div
        className={`flex items-center justify-between fixed bg-white p-4 top-0 ${
          !collapseMenu && "w-[250px]"
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
        <Link
          href="/account"
          onClick={() => setProgressValue(10)}
          className="border rounded-full p-[10px] my-[10px] flex items-center justify-between hover:bg-gray-100 transition duration-150 ease-in-out"
        >
          <div className="flex items-center gap-[10px]">
            <Image
              src={
                session?.data?.user?.image
                  ? session?.data?.user?.image
                  : session?.data?.user?.roll === "USER"
                  ? "/man.png"
                  : "/person.jpg"
              }
              width={60}
              height={60}
              priority
              alt="user"
              className="rounded-full w-[30px] h-[30px] object-cover"
            />
            {!collapseMenu && (
              <div>
                <p className="font-semibold text-[14px] -mb-1">
                  {shorterText(session?.data?.user?.name, 10)}
                </p>
                <p className="font-semibold text-[10px] text-gray-400">
                  {shorterText(session?.data?.user?.username, 10)}
                </p>
              </div>
            )}
          </div>
          {!collapseMenu && (
            <img src="/icons/menu-dots.svg" className="w-[12px]" />
          )}
        </Link>
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
