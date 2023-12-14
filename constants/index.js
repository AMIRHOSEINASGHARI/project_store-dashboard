import { BsCurrencyDollar } from "react-icons/bs";
import { GoNote } from "react-icons/go";
import { HiOutlinePlus } from "react-icons/hi";
import { PiUsersThree } from "react-icons/pi";
import { MdOutlineManageAccounts, MdOutlineShoppingBag } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { MdOutlineModeComment } from "react-icons/md";
import { FaHourglassEnd } from "react-icons/fa6";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { LuLaptop } from "react-icons/lu";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { MdOutlineWatch } from "react-icons/md";

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

export const categories = [
  {
    name: "Phone",
    icon: <HiOutlineDeviceMobile />,
  },
  {
    name: "Laptop",
    icon: <LuLaptop />,
  },
  {
    name: "TV",
    icon: <PiTelevisionSimpleBold />,
  },
  {
    name: "Watch",
    icon: <MdOutlineWatch />,
  },
];

export const defaultColors = [
  "#64748b",
  "#000000",
  "#737373",
  "#ffffff",
  "#dc2626",
  "#f97316",
  "#facc15",
  "#22c55e",
  "#3b82f6",
  "#a855f7",
  "#ec4899",
];
