"use client";

import { CiSearch } from "react-icons/ci";

const NavbarSearchBox = () => {
  return (
    <div>
      <button className="md:hidden p-2 hover:bg-gray-100 rounded-full transition-all duration-150">
        <CiSearch className="text-[22px]" />
      </button>
      <button className="max-md:hidden flex items-center gap-5 bg-gray-100 py-2 px-4 hover:bg-gray-200 rounded-xl transition-all duration-150">
        <CiSearch className="text-[22px]" />
        <span className="font-light text-[12px] text-gray-500">Search...</span>
      </button>
    </div>
  );
};

export default NavbarSearchBox;
