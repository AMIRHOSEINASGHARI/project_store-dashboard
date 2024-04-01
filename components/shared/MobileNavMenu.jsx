"use client";

import Link from "next/link";
import Image from "next/image";
import { Drawer } from "antd";
import { HiMenuAlt2 } from "react-icons/hi";
import { menuLinks } from "@/constants";
import { Fragment } from "react";
import { signOut } from "next-auth/react";
import { usePathname } from "next/navigation";
import { AiOutlineClose } from "react-icons/ai";

const MobileNav = ({ onClose, open, setOpen }) => {
  const pathname = usePathname();

  return (
    <div>
      <button
        onClick={() => setOpen(true)}
        className="hover:bg-gray-50 rounded-full transition-all duration-150"
      >
        <HiMenuAlt2 className="w-[25px] h-[25px]" />
      </button>
      <Drawer
        bodyStyle={{ padding: "0px" }}
        placement="left"
        onClose={onClose}
        open={open}
        closeIcon={false}
        headerStyle={{ padding: "15px 20px" }}
        title={
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-[10px]">
              <Image
                src="/logo1.svg"
                width={35}
                height={35}
                alt="logo"
                priority
              />
              <div className="flex items-center italic font-bold">
                <span className="text-violet-600">Online</span>
                <span>Shop</span>
              </div>
            </Link>
            <button onClick={() => onClose()}>
              <AiOutlineClose className="text-[30px]" />
            </button>
          </div>
        }
      >
        <nav>
          <ul>
            {menuLinks.map((item) => (
              <Fragment key={item.title}>
                <li
                  onClick={() => onClose()}
                  className={`rounded-l-[10px] mx-[20px] my-[5px] transition duration-75 ease-in-out mb-[2px] ${
                    pathname === item.link
                      ? "bg-gray-100 font-bold border-r-4 border-gray-500"
                      : "bg-white hover:bg-gray-100 font-semibold"
                  }`}
                >
                  <Link
                    href={item.link}
                    className="flex items-center gap-[20px] px-[10px] py-[12px]"
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={20}
                      height={20}
                      priority
                      className="w-[20px]"
                    />
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
            <li className="rounded-l-[10px] mx-4 my-1 hover:bg-gray-100 transition duration-75 ease-in-out">
              <button
                onClick={() => {
                  signOut();
                  onClose();
                }}
                className="flex items-center w-full gap-[20px] p-[10px]"
              >
                <Image
                  src="/icons/power.svg"
                  width={20}
                  height={20}
                  alt="logout"
                  priority
                  className="w-[20px]"
                />
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
