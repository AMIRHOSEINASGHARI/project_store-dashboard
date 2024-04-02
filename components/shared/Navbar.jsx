"use client";

import { useState } from "react";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import MobileNavMenu from "./MobileNavMenu";
import NavbarSearchBox from "./search/NavbarSearchBox";
import { icons } from "@/constants";

const Navbar = () => {
  const session = useSession();
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <header className="lg:backdrop-blur-xl max-lg:bg-white max-md:border-b border-b fixed z-20 left-0 top-0 right-0 p-4 pl-[280px] lg:pl-[270px] max-md:pl-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="md:hidden">
            <MobileNavMenu onClose={onClose} open={open} setOpen={setOpen} />
          </div>
          <NavbarSearchBox />
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => {
              signOut();
            }}
            className="p-2 hover:bg-gray-100 rounded-full transition-all duration-150 text-[22px]"
          >
            {icons.power}
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-all duration-150 text-[22px]">
            {icons.moon}
          </button>
          <Link
            href="/notifications"
            className="p-2 hover:bg-gray-100 rounded-full transition-all duration-150 text-[22px]"
          >
            {icons.notification}
          </Link>
          {session?.data?.user?.image ? (
            <Link href="/account" className="relative ml-2">
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
            <Link href="/account" className="relative ml-2">
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
