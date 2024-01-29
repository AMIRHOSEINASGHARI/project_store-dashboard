"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarMenu from "./SidebarMenu";
import { shorterText } from "@/utils/functions";
import { CiLogout } from "react-icons/ci";

const Navbar = () => {
  const session = useSession();
  const pathname = usePathname();
  const { setProgressValue, collapseMenu } = useContextProvider();

  if (pathname.includes("/login") || pathname.includes("/register"))
    return null;

  return (
    <header className="shadow w-full z-20 fixed top-0 bg-white flex items-center justify-between p-4 xl:px-6">
      <div className="flex items-center gap-3">
        <div className="md:hidden">
          <SidebarMenu />
        </div>
        <Link href="/" onClick={() => setProgressValue(10)}>
          <Image
            src="/logo-secondary.png"
            width={50}
            height={50}
            alt="logo"
            priority
            className="w-[35px]"
          />
        </Link>
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
    </header>
  );
};

export default Navbar;
