import { GoHome, GoTasklist } from "react-icons/go";
import {
  PiBasketThin,
  PiCurrencyDollarSimpleThin,
  PiLayoutLight,
  PiPaperPlaneThin,
  PiPlusSquareThin,
  PiTextBLight,
  PiTextboxLight,
  PiUsersThin,
  PiTelevisionSimpleBold,
  PiPowerThin,
  PiTrashSimple,
  PiNewspaperLight,
  PiPencilSimpleLight,
  PiUploadLight,
  PiHeartLight,
  PiClockLight,
  PiLockSimpleOpenLight,
} from "react-icons/pi";
import { HiOutlineDeviceMobile } from "react-icons/hi";
import { LuLaptop, LuHardDrive, LuSpeaker } from "react-icons/lu";
import { MdOutlineWatch, MdOutlinePhotoCamera } from "react-icons/md";
import { TbDeviceGamepad2 } from "react-icons/tb";
import { FiHeadphones, FiPrinter } from "react-icons/fi";
import { FaComputer } from "react-icons/fa6";
import { SlScreenTablet } from "react-icons/sl";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiDark, CiDeliveryTruck, CiSearch, CiSettings } from "react-icons/ci";
import { TfiClose } from "react-icons/tfi";

export const images = {
  logo1: "/logo1.svg",
  authLogin: "/auth-login.png",
  authRegister: "/auth-register.png",
  person_admin: "/person.jpg",
  person_1: "/man.png",
  notFound: "/404.svg",
  notAllowed: "/not-allowed.png",
};

export const icons = {
  home: <GoHome />,
  deliveryTruck: <CiDeliveryTruck />,
  dollar: <PiCurrencyDollarSimpleThin />,
  basket: <PiBasketThin />,
  plus: <PiPlusSquareThin />,
  paper: <PiPaperPlaneThin />,
  users: <PiUsersThin />,
  layout: <PiLayoutLight />,
  textB: <PiTextBLight />,
  textBox: <PiTextboxLight />,
  tasks: <GoTasklist />,
  notification: <IoIosNotificationsOutline />,
  settings: <CiSettings />,
  power: <PiPowerThin />,
  search: <CiSearch />,
  close: <TfiClose />,
  moon: <CiDark />,
  trash: <PiTrashSimple />,
  pen: <PiPencilSimpleLight />,
  document: <PiNewspaperLight />,
  upload: <PiUploadLight />,
  heart: <PiHeartLight />,
  clock: <PiClockLight />,
  lock: <PiLockSimpleOpenLight />,
};

export const menuLinks = [
  {
    title: "Dashboard",
    image: icons.home,
    link: "/",
  },
  {
    title: "Orders",
    image: icons.deliveryTruck,
    link: "/orders",
  },
  {
    title: "Revenue",
    image: icons.dollar,
    link: "/revenue",
  },
  {
    title: "Products",
    image: icons.basket,
    link: "/products",
  },
  {
    title: "Add Product",
    image: icons.plus,
    link: "/add-product",
  },
  {
    title: "Comments",
    image: icons.paper,
    link: "/comments",
  },
  {
    title: "Customers",
    image: icons.users,
    link: "/customers",
  },
  {
    title: "Site Layout",
    image: icons.layout,
    link: "/site-layout",
  },
  {
    title: "Blogs",
    image: icons.textB,
    link: "/blogs",
  },
  {
    title: "Add Blog",
    image: icons.textBox,
    link: "/add-blog",
  },
  {
    title: "Tasks",
    image: icons.tasks,
    link: "/tasks",
  },
  {
    title: "Notifications",
    image: icons.notification,
    link: "/notifications",
  },
  {
    title: "Account",
    image: icons.settings,
    link: "/account",
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

export const commentPageColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Product",
    dataIndex: "product",
    key: "product",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Details",
    dataIndex: "details",
    key: "details",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
];

export const administratorsColumns = [
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
  },
  {
    title: "Joined at",
    dataIndex: "joinedAt",
    key: "joinedAt",
  },
  {
    title: "Roll",
    dataIndex: "roll",
    key: "roll",
  },
  {
    title: "Access",
    dataIndex: "access",
    key: "access",
  },
];

export const productsColumns = [
  {
    title: "Image",
    dataIndex: "image",
    key: "image",
  },
  {
    title: "Title",
    dataIndex: "title",
    key: "title",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Discount",
    dataIndex: "discount",
    key: "discount",
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
  },
];

export const customersColumns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Phone",
    dataIndex: "phone",
    key: "phone",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Orders",
    dataIndex: "orders",
    key: "orders",
  },
  {
    title: "Joined At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
];
