"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import SidebarMenu from "./SidebarMenu";
import NavbarSearchBox from "./search/NavbarSearchBox";

const Navbar = () => {
  const session = useSession();
  const { setProgressValue, collapseMenu } = useContextProvider();

  return (
    <header
      className={`backdrop-blur max-md:border-b bg-white fixed z-20 left-0 top-0 right-0 px-4 pt-4 ${
        collapseMenu
          ? "pl-[115px] lg:pl-[110px] max-md:pl-4"
          : "pl-[280px] lg:pl-[270px] max-md:pl-4"
      }`}
    >
      <div className="py-2 flex items-center justify-between bg-white">
        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <SidebarMenu />
          </div>
          <NavbarSearchBox />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              signOut();
              setProgressValue(10);
            }}
            className="p-2 hover:bg-gray-100 rounded-full transition-all duration-150"
          >
            <Image
              src="/icons/power.svg"
              width={50}
              height={50}
              alt="power"
              priority
              className="w-[20px] h-[20px] text-gray-500"
            />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-150">
            <Image
              src="/icons/dark.svg"
              width={50}
              height={50}
              alt="dark-mode"
              priority
              className="w-[20px] h-[20px] text-gray-500"
            />
          </button>
          <Link
            href="/notifications"
            className="p-2 hover:bg-gray-100 rounded-full transition-all duration-150"
          >
            <Image
              src="/icons/bell.svg"
              width={50}
              height={50}
              alt="bell"
              priority
              className="w-[20px] h-[20px] text-gray-500"
            />
          </Link>
          {session?.data?.user?.image ? (
            <Link
              href="/account"
              onClick={() => setProgressValue(10)}
              className="relative ml-2"
            >
              <Image
                src={session?.data?.user?.image}
                width={60}
                height={60}
                priority
                alt="user"
                className="rounded-full w-[35px] h-[35px] object-cover"
              />
              <div className="w-[13px] h-[13px] border-2 border-white rounded-full bg-green-400 absolute bottom-0 -right-1" />
            </Link>
          ) : (
            <Link
              href="/account"
              onClick={() => setProgressValue(10)}
              className="relative ml-2"
            >
              <Image
                src={
                  session?.data?.user?.roll === "USER"
                    ? "/man.png"
                    : "/person.jpg"
                }
                width={60}
                height={60}
                priority
                alt="user"
                className="rounded-full w-[35px] h-[35px]"
              />
              <div className="w-[13px] h-[13px] border-2 border-white rounded-full bg-green-400 absolute bottom-0 -right-1" />
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
