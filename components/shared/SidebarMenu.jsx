"use client";

import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { Fragment } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiOutlinePlus } from "react-icons/hi";
import { PiUsersThree } from "react-icons/pi";
import { BsCurrencyDollar } from "react-icons/bs";
import { GoNote } from "react-icons/go";
import { menuList } from "@/constants";

const SidebarMenu = () => {
  return (
    <div>
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="p-2 hover:bg-gray-50 rounded-full transition-all duration-150">
            <HiMenuAlt2 className="w-[25px] h-[25px]" />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute left-0 mt-5 rounded-xl bg-white shadow-xl shadow-gray-200 flex flex-col gap-2 w-[250px] sm:w-[350px] py-3 px-4 font-light">
            {menuList.map((item) => (
              <Menu.Item
                key={item.id}
                className={`py-2 px-4 rounded-lg ${
                  item.id === "1"
                    ? "bg-blue-500 font-semibold text-white hover:bg-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                <Link
                  href={item.link}
                  className="w-full flex items-center -tracking-tighter gap-5"
                >
                  <div className="text-xl">{item.icon}</div>
                  {item.title}
                </Link>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default SidebarMenu;
