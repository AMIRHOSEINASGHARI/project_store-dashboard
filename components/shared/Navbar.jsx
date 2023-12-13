"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { GoPerson } from "react-icons/go";
import { HiOutlineLogout } from "react-icons/hi";
import SidebarMenu from "./SidebarMenu";

const Navbar = () => {
  const session = useSession();
  const pathname = usePathname();

  if (pathname.includes("/login") || pathname.includes("/register"))
    return null;

  return (
    <header className="shadow w-full z-20 fixed top-0 bg-white flex items-center justify-between p-4 xl:px-6">
      <div className="flex items-center gap-3">
        <div className="md:hidden">
          <SidebarMenu />
        </div>
        <Link href="/">
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
          onClick={() => signOut()}
          className="p-2 hover:bg-gray-50 rounded-full transition-all duration-150"
        >
          <HiOutlineLogout className="w-[25px] h-[25px] text-gray-500" />
        </button>
        {session?.data?.user?.image ? (
          <Link href="/account">
            <Image
              src={session?.data?.user?.image}
              width={50}
              height={50}
              priority
              alt="user"
              className="rounded-full w-[42px] h-[42px]"
            />
          </Link>
        ) : (
          <Link
            href="/account"
            className="p-2 hover:bg-gray-50 rounded-full transition-all duration-150"
          >
            <GoPerson className="w-[25px] h-[25px] text-gray-500" />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
