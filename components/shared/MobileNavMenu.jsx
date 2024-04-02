"use client";

import Link from "next/link";
import Image from "next/image";
import { Drawer } from "antd";
import { menuLinks } from "@/constants";
import { Fragment } from "react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { PiPowerThin } from "react-icons/pi";
import { CiMenuBurger } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

const MobileNav = ({ onClose, open, setOpen }) => {
  const pathname = usePathname();

  const _drawer = {
    styles: {
      body: { padding: "0px", margin: "10px 0px" },
      header: { padding: "15px 20px" },
    },
    title: (
      <div className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-[10px]">
          <Image src="/logo1.svg" width={35} height={35} alt="logo" priority />
          <div className="flex items-center italic font-bold">
            <span className="text-violet-600">Online</span>
            <span>Shop</span>
          </div>
        </Link>
        <button onClick={() => onClose()}>
          <TfiClose className="text-[22px] text-gray-700" />
        </button>
      </div>
    ),
  };

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="hover:bg-gray-50 p-2 rounded-full transition-all duration-150"
      >
        <CiMenuBurger className="text-[22px]" />
      </button>
      <Drawer
        placement="left"
        onClose={onClose}
        open={open}
        closeIcon={false}
        styles={_drawer.styles}
        title={_drawer.title}
      >
        <nav>
          <ul>
            {menuLinks.map((item) => (
              <Fragment key={item.title}>
                <li
                  onClick={() => onClose()}
                  className={`rounded-l-[10px] mx-[20px] my-[5px] transition duration-75 ease-in-out mb-[2px] ${
                    pathname === item.link
                      ? "bg-gray-100 text-purple-500 font-bold border-r-4 border-purple-500"
                      : "font-light"
                  }`}
                >
                  <Link
                    href={item.link}
                    className="flex items-center gap-[20px] px-[10px] py-[12px]"
                  >
                    <div className="text-[22px]">{item.image}</div>
                    <span class="text-[13px]">{item.title}</span>
                  </Link>
                </li>
                {item.title === "Customers" && (
                  <div class="w-full h-[1px] my-[10px] bg-gray-200" />
                )}
                {item.title === "Add Blog" && (
                  <div class="w-full h-[1px] my-[10px] bg-gray-200" />
                )}
              </Fragment>
            ))}
            <li className="bg-red-50 text-red-600 rounded-[10px] mx-[20px] my-[5px] hover:bg-gray-100 transition duration-75 ease-in-out">
              <button
                onClick={() => {
                  signOut();
                  onClose();
                }}
                className="flex items-center w-full gap-[20px] p-[10px]"
              >
                <div className="text-[22px]">
                  <PiPowerThin />
                </div>
                <span class="text-[13px] font-semibold">Exit</span>
              </button>
            </li>
          </ul>
        </nav>
      </Drawer>
    </div>
  );
};

export default MobileNav;
