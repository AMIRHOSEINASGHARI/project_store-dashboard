"use client";

import Image from "next/image";

const NavbarSearchBox = () => {
  return (
    <div>
      <button>
        <div className="p-2 hover:bg-gray-100 rounded-full transition-all duration-150">
          <Image
            src="/icons/search.svg"
            width={20}
            height={20}
            alt="search"
            priority
            className="w-[20px] h-[20px] text-gray-500"
          />
        </div>
      </button>
    </div>
  );
};

export default NavbarSearchBox;
