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
import { TbDeviceGamepad2 } from "react-icons/tb";
import { FiHeadphones, FiPrinter } from "react-icons/fi";
import { MdOutlinePhotoCamera } from "react-icons/md";
import { FaComputer } from "react-icons/fa6";
import { LuHardDrive } from "react-icons/lu";
import { SlScreenTablet } from "react-icons/sl";
import { LuSpeaker } from "react-icons/lu";

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
    bgColor: "#f4f4f5",
    textColor: "#71717a",
    link: "/products?category=mobile",
  },
  {
    name: "Laptop",
    icon: <LuLaptop />,
    bgColor: "#f1f5f9",
    textColor: "#64748b",
    link: "/products?category=laptop",
  },
  {
    name: "TV",
    icon: <PiTelevisionSimpleBold />,
    bgColor: "#fee2e2",
    textColor: "#ef4444",
    link: "/products?category=television",
  },
  {
    name: "Watch",
    icon: <MdOutlineWatch />,
    bgColor: "#ecfccb",
    textColor: "#84cc16",
    link: "/products?category=watch",
  },
  {
    name: "headphone",
    icon: <FiHeadphones />,
    bgColor: "#ffedd5",
    textColor: "#f97316",
    link: "/products?category=headphone",
  },
  {
    name: "printer",
    icon: <FiPrinter />,
    bgColor: "#fef9c3",
    textColor: "#eab308",
    link: "/products?category=printer",
  },
  {
    name: "camera",
    icon: <MdOutlinePhotoCamera />,
    bgColor: "#ccfbf1",
    textColor: "#14b8a6",
    link: "/products?category=camera",
  },
  {
    name: "gaming",
    icon: <TbDeviceGamepad2 />,
    bgColor: "#dcfce7",
    textColor: "#22c55e",
    link: "/products?category=gaming",
  },
  {
    name: "computer",
    icon: <FaComputer />,
    bgColor: "#cffafe",
    textColor: "#06b6d4",
    link: "/products?category=computer",
  },
  {
    name: "hard drive",
    icon: <LuHardDrive />,
    bgColor: "#e0e7ff",
    textColor: "#6366f1",
    link: "/products?category=hard-drive",
  },
  {
    name: "tablet",
    icon: <SlScreenTablet />,
    bgColor: "#fae8ff",
    textColor: "#d946ef",
    link: "/products?category=tablet",
  },
  {
    name: "speaker",
    icon: <LuSpeaker />,
    bgColor: "#ffe4e6",
    textColor: "#f43f5e",
    link: "/products?category=speaker",
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
