"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineLogout } from "react-icons/hi";
import SidebarMenu from "./SidebarMenu";
import { shorterText } from "@/utils/functions";

const Navbar = () => {
  const session = useSession();
  const pathname = usePathname();
  const { progressValue, setProgressValue } = useContextProvider();

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
          className="p-2 hover:bg-gray-50 rounded-full transition-all duration-150"
        >
          <HiOutlineLogout className="w-[25px] h-[25px] text-gray-500" />
        </button>
        {session?.data?.user?.image ? (
          <Link
            href="/account"
            className="flex items-center gap-3 py-2 px-4 rounded-full bg-gray-100 hover:bg-gray-200"
            onClick={() => setProgressValue(10)}
          >
            <p className="uppercase font-light tracking-wider text-xs sm:text-base">
              {shorterText(session?.data?.user?.name, 10)}
            </p>
            <Image
              src={session?.data?.user?.image}
              width={50}
              height={50}
              priority
              alt="user"
              className="rounded-full w-[25px] h-[25px]"
            />
          </Link>
        ) : (
          <Link
            href="/account"
            className="flex items-center gap-3 py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-full transition-all duration-150"
            onClick={() => setProgressValue(10)}
          >
            <p className="uppercase font-light tracking-wider text-xs sm:text-base">
              {shorterText(session?.data?.user?.name, 10)}
            </p>
            <Image
              src="/person.jpg"
              width={50}
              height={50}
              priority
              alt="user"
              className="rounded-full w-[25px] h-[25px]"
            />
          </Link>
        )}
      </div>
    </header>
  );
};

export default Navbar;
