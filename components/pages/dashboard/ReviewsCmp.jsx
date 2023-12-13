import Link from "next/link";
import React from "react";
import { BsCurrencyDollar } from "react-icons/bs";
import { MdOutlineModeComment, MdOutlineShoppingBag } from "react-icons/md";
import { PiUsersThree } from "react-icons/pi";

const reviews = [
  {
    title: "Total Sales",
    icon: <BsCurrencyDollar />,
    count: 576000,
    countClass: "text-green-500",
    iconClass: "text-green-500",
    link: "/earn",
  },
  {
    title: "Total Products",
    icon: <MdOutlineShoppingBag />,
    count: 16585,
    countClass: "text-blue-500",
    iconClass: "text-blue-500",
    link: "/products",
  },
  {
    title: "Total Users",
    icon: <PiUsersThree />,
    count: 102365,
    countClass: "text-gray-500",
    iconClass: "text-gray-500",
    link: "/users",
  },
  {
    title: "Comments To Answer",
    icon: <MdOutlineModeComment />,
    count: 3650,
    countClass: "text-orange-500",
    iconClass: "text-orange-500",
    link: "/comments",
  },
];

const ReviewsCmp = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
      {reviews.map((el, i) => {
        const { title, icon, count, countClass, iconClass, link } = el;
        return (
          <Link
            href={link}
            key={i}
            className="flex items-center justify-between shadow hover:shadow-md shadow-gray-200 bg-white rounded-xl py-3 px-5 group transition-all duration-150"
          >
            <div>
              <h1 className="font-light">{title}</h1>
              <span className={`font-black text-[30px] ${countClass}`}>
                {count.toLocaleString()}
              </span>
            </div>
            <div
              className={`${iconClass} text-[50px] transform group-hover:rotate-12 transition-all duration-150`}
            >
              {icon}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ReviewsCmp;
