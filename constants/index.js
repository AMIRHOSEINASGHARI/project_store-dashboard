import { BsCurrencyDollar } from "react-icons/bs";
import { GoNote } from "react-icons/go";
import { HiOutlinePlus } from "react-icons/hi";
import { PiUsersThree } from "react-icons/pi";
import { MdOutlineManageAccounts, MdOutlineShoppingBag } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineModeComment } from "react-icons/md";
import { FaHourglassEnd } from "react-icons/fa6";

export const menuList = [
  {
    title: "Dashboard",
    icon: <RxDashboard />,
    link: "/",
    id: "1",
  },
  {
    title: "Orders",
    icon: <FaHourglassEnd />,
    link: "/orders",
    id: "2",
  },
  {
    title: "Add Product",
    icon: <HiOutlinePlus />,
    link: "/add-product",
    id: "3",
  },
  {
    title: "Users",
    icon: <PiUsersThree />,
    link: "/users",
    id: "4",
  },
  {
    title: "Products",
    icon: <MdOutlineShoppingBag />,
    link: "/products",
    id: "5",
  },
  {
    title: "Create Blog",
    icon: <GoNote />,
    link: "/add-blog",
    id: "6",
  },
  {
    title: "Earn",
    icon: <BsCurrencyDollar />,
    link: "/earn",
    id: "7",
  },
  {
    title: "Comments",
    icon: <MdOutlineModeComment />,
    link: "/comments",
    id: "8",
  },
  {
    title: "Account",
    icon: <MdOutlineManageAccounts />,
    link: "/account",
    id: "9",
  },
];
