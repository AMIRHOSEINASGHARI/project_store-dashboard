"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BsArrowsCollapseVertical, BsCurrencyDollar } from "react-icons/bs";
import { useContextProvider } from "@/context/MainContextProvider";
import { RxDashboard } from "react-icons/rx";
import { FaHourglassEnd } from "react-icons/fa6";
import {
  MdOutlineManageAccounts,
  MdOutlineModeComment,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { HiOutlinePlus } from "react-icons/hi";
import { GoNote } from "react-icons/go";
import { PiLayoutLight, PiUsersThree } from "react-icons/pi";
import { CiLogout } from "react-icons/ci";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  const pathname = usePathname();
  const { collapseMenu, setCollapseMenu, setProgressValue } =
    useContextProvider();

  if (pathname.includes("/login") || pathname.includes("/register"))
    return null;

  const btnClass = (link) =>
    `rounded-lg transition-all duration-150 ${
      collapseMenu
        ? "py-2 px-4 block"
        : "flex items-center gap-4 p-2 lg:px-4 lg:pr-14"
    } ${
      pathname === link
        ? "bg-gray-100 text-black hover:bg-gray-200 font-semibold"
        : "hover:bg-gray-100 text-gray-600 font-light"
    }`;

  return (
    <aside className="max-md:hidden fixed z-10 left-0 h-screen bg-white p-4 mt-[73px] shadow-md shadow-gray-300 pb-24">
      <div className="flex flex-col justify-between h-full">
        <div className="overflow-y-auto sidebarScroll pb-2 flex flex-col gap-[2px]">
          <Link
            href="/"
            className={btnClass("/")}
            onClick={() => setProgressValue(10)}
          >
            <div className="text-[20px] flex justify-center">
              <RxDashboard />
            </div>
            {!collapseMenu && <p className="text-[13px]">Dashboard</p>}
          </Link>
          <Link
            href="/orders"
            className={btnClass("/orders")}
            onClick={() => setProgressValue(10)}
          >
            <div className="text-[20px] flex justify-center">
              <FaHourglassEnd />
            </div>
            {!collapseMenu && <p className="text-[13px]">Orders</p>}
          </Link>
          <Link
            href="/earn"
            className={btnClass("/earn")}
            onClick={() => setProgressValue(10)}
          >
            <div className="text-[20px] flex justify-center">
              <BsCurrencyDollar />
            </div>
            {!collapseMenu && <p className="text-[13px]">Earn</p>}
          </Link>
          <hr className="my-3" />
          <Link
            href="/products"
            className={btnClass("/products")}
            onClick={() => setProgressValue(10)}
          >
            <div className="text-[20px] flex justify-center">
              <MdOutlineShoppingBag />
            </div>
            {!collapseMenu && <p className="text-[13px]">Products</p>}
          </Link>
          <Link
            href="/add-product"
            className={btnClass("/add-product")}
            onClick={() => setProgressValue(10)}
          >
            <div className="text-[20px] flex justify-center">
              <HiOutlinePlus />
            </div>
            {!collapseMenu && <p className="text-[13px]">Add Product</p>}
          </Link>
          <Link
            href="/comments"
            className={btnClass("/comments")}
            onClick={() => setProgressValue(10)}
          >
            <div className="text-[20px] flex justify-center">
              <MdOutlineModeComment />
            </div>
            {!collapseMenu && <p className="text-[13px]">Comments</p>}
          </Link>
          <hr className="my-3" />
          <Link
            href="/site-layouts"
            className={btnClass("/site-layouts")}
            onClick={() => setProgressValue(10)}
          >
            <div className="text-[20px] flex justify-center">
              <PiLayoutLight />
            </div>
            {!collapseMenu && <p className="text-[13px]">Site Layouts</p>}
          </Link>
          <Link
            href="/blogs"
            className={btnClass("/blogs")}
            onClick={() => setProgressValue(10)}
          >
            <div className="text-[20px] flex justify-center">
              <GoNote />
            </div>
            {!collapseMenu && <p className="text-[13px]">Blogs</p>}
          </Link>
          <Link
            href="/add-blog"
            className={btnClass("/add-blog")}
            onClick={() => setProgressValue(10)}
          >
            <div className="text-[20px] flex justify-center">
              <HiOutlinePlus />
            </div>
            {!collapseMenu && <p className="text-[13px]">Add Blog</p>}
          </Link>
          <hr className="my-3" />
          <Link
            href="/customers"
            className={btnClass("/customers")}
            onClick={() => setProgressValue(10)}
          >
            <div className="text-[20px] flex justify-center">
              <PiUsersThree />
            </div>
            {!collapseMenu && <p className="text-[13px]">Customers</p>}
          </Link>
          <Link
            href="/account"
            className={btnClass("/account")}
            onClick={() => setProgressValue(10)}
          >
            <div className="text-[20px] flex justify-center">
              <MdOutlineManageAccounts />
            </div>
            {!collapseMenu && <p className="text-[13px]">Account</p>}
          </Link>
          <button
            className={`rounded-lg transition-all duration-150 text-red-500 hover:bg-red-100 font-bold w-full ${
              collapseMenu
                ? "py-2 px-4 block"
                : "flex items-center gap-4 p-2 lg:px-4 lg:pr-14 pr-14"
            }`}
            onClick={() => {
              signOut();
              setProgressValue(10);
            }}
          >
            <div className="text-[20px] flex justify-center">
              <CiLogout />
            </div>
            {!collapseMenu && <p className="text-[13px]">Logout</p>}
          </button>
        </div>
        <button
          className={`rounded-lg transition-all duration-150 hover:bg-gray-300 bg-gray-200 text-gray-600 font-light ${
            collapseMenu
              ? "py-2 px-4 block"
              : "flex items-center gap-4 p-2 lg:px-4 lg:pr-14"
          }`}
          onClick={() => setCollapseMenu(!collapseMenu)}
        >
          <BsArrowsCollapseVertical className="text-[25px]" />
          {!collapseMenu && <p className="text-[13px] font-bold">Collapse</p>}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
