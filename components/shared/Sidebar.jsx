"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useContextProvider } from "@/context/MainContextProvider";
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
    <aside className="max-md:hidden w-[250px] fixed z-10 left-0 h-screen bg-white p-4 mt-[73px] pb-24 overflow-y-auto sidebarScroll">
      <div>
        <ul>
          <li className="rounded-[10px] hover:bg-gray-100 transition duration-75 ease-in-out">
            <Link href="/" className="flex items-center gap-[15px] p-[10px]">
              <img src="/icons/home.svg" className="w-[16px]" />
              <span class="text-[13px] font-semibold">Dashboard</span>
            </Link>
          </li>
          <li className="rounded-[10px] hover:bg-gray-100 transition duration-75 ease-in-out">
            <Link
              href="/orders"
              className="flex items-center gap-[15px] p-[10px]"
            >
              <img src="/icons/shopping-cart.svg" className="w-[16px]" />
              <span class="text-[13px] font-semibold">Orders</span>
            </Link>
          </li>
          <li className="rounded-[10px] hover:bg-gray-100 transition duration-75 ease-in-out">
            <Link
              href="/revenue"
              className="flex items-center gap-[15px] p-[10px]"
            >
              <img src="/icons/dollar.svg" className="w-[16px]" />
              <span class="text-[13px] font-semibold">Revenue</span>
            </Link>
          </li>
          <li className="rounded-[10px] hover:bg-gray-100 transition duration-75 ease-in-out">
            <Link
              href="/products"
              className="flex items-center gap-[15px] p-[10px]"
            >
              <img src="/icons/shopping-basket.svg" className="w-[16px]" />
              <span class="text-[13px] font-semibold">Products</span>
            </Link>
          </li>
          <li className="rounded-[10px] hover:bg-gray-100 transition duration-75 ease-in-out">
            <Link
              href="/add-product"
              className="flex items-center gap-[15px] p-[10px]"
            >
              <img src="/icons/layer-plus.svg" className="w-[16px]" />
              <span class="text-[13px] font-semibold">Add Product</span>
            </Link>
          </li>
          <li className="rounded-[10px] hover:bg-gray-100 transition duration-75 ease-in-out">
            <Link
              href="/comments"
              className="flex items-center gap-[15px] p-[10px]"
            >
              <img src="/icons/comment.svg" className="w-[16px]" />
              <span class="text-[13px] font-semibold">Comments</span>
            </Link>
          </li>
          <li className="rounded-[10px] hover:bg-gray-100 transition duration-75 ease-in-out">
            <Link
              href="/customers"
              className="flex items-center gap-[15px] p-[10px]"
            >
              <img src="/icons/users.svg" className="w-[16px]" />
              <span class="text-[13px] font-semibold">Customers</span>
            </Link>
          </li>
        </ul>

        <div class="w-full h-[1px] my-[13px] bg-gray-100" />

        <ul>
          <li className="rounded-[10px] hover:bg-gray-100 transition duration-75 ease-in-out">
            <Link
              href="/site-layout"
              className="flex items-center gap-[15px] p-[10px]"
            >
              <img src="/icons/rectangles-mixed.svg" className="w-[16px]" />
              <span class="text-[13px] font-semibold">Site Layout</span>
            </Link>
          </li>
          <li className="rounded-[10px] hover:bg-gray-100 transition duration-75 ease-in-out">
            <Link
              href="/blogs"
              className="flex items-center gap-[15px] p-[10px]"
            >
              <img src="/icons/blog-text.svg" className="w-[16px]" />
              <span class="text-[13px] font-semibold">Blogs</span>
            </Link>
          </li>
          <li className="rounded-[10px] hover:bg-gray-100 transition duration-75 ease-in-out">
            <Link
              href="/add-blog"
              className="flex items-center gap-[15px] p-[10px]"
            >
              <img src="/icons/add-folder.svg" className="w-[16px]" />
              <span class="text-[13px] font-semibold">Add Blog</span>
            </Link>
          </li>
        </ul>

        <div class="w-full h-[1px] my-[13px] bg-gray-100" />

        <ul>
          <li className="rounded-[10px] hover:bg-gray-100 transition duration-75 ease-in-out">
            <Link
              href="/notifications"
              className="flex items-center gap-[15px] p-[10px]"
            >
              <img src="/icons/bell.svg" className="w-[16px]" />
              <span class="text-[13px] font-semibold">Notifications</span>
            </Link>
          </li>
          <li className="rounded-[10px] hover:bg-gray-100 transition duration-75 ease-in-out">
            <Link
              href="/account"
              className="flex items-center gap-[15px] p-[10px]"
            >
              <img src="/icons/user.svg" className="w-[16px]" />
              <span class="text-[13px] font-semibold">Account</span>
            </Link>
          </li>
          <li className="rounded-[10px] hover:bg-gray-100 transition duration-75 ease-in-out">
            <button
              onClick={() => {
                signOut();
                setProgressValue(10);
              }}
              className="flex items-center w-full gap-[15px] p-[10px]"
            >
              <img src="/icons/power.svg" className="w-[16px]" />
              <span class="text-[13px] font-semibold">Exit</span>
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
