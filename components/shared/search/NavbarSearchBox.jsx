"use client";

import Image from "next/image";

const NavbarSearchBox = () => {
  return (
    <div>
      <button className="flex items-center gap-2">
        <div className="p-2 hover:bg-gray-100 rounded-full transition-all duration-150">
          <Image
            src="/icons/search.svg"
            width={50}
            height={50}
            alt="search"
            priority
            className="w-[20px] h-[20px] text-gray-500"
          />
        </div>
        <span className="max-md:hidden text-gray-400 text-[14px]">
          Search ...
        </span>
      </button>
    </div>
  );
};

export default NavbarSearchBox;
