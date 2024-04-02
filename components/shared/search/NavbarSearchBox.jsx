"use client";

import { icons } from "@/constants";

const NavbarSearchBox = () => {
  return (
    <div>
      <button className="p-2 text-[22px] hover:bg-gray-100 rounded-full transition-all duration-150">
        {icons.search}
      </button>
    </div>
  );
};

export default NavbarSearchBox;
