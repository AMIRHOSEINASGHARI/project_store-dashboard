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
    title: "Customers",
    icon: <PiUsersThree />,
    link: "/customers",
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
    icon: <HiOutlinePlus />,
    link: "/add-blog",
    id: "6",
  },
  {
    title: "Blogs",
    icon: <GoNote />,
    link: "/blogs",
    id: "7",
  },
  {
    title: "Earn",
    icon: <BsCurrencyDollar />,
    link: "/earn",
    id: "8",
  },
  {
    title: "Comments",
    icon: <MdOutlineModeComment />,
    link: "/comments",
    id: "9",
  },
  {
    title: "Account",
    icon: <MdOutlineManageAccounts />,
    link: "/account",
    id: "10",
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
    title: "Category",
    dataIndex: "category",
    key: "category",
    filters: categories.map((item) => ({
      text: item.name,
      value: item.name,
    })),
    onFilter: (value, record) => record.category.indexOf(value) === 0,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    key: "brand",
  },
  {
    title: "Price",
    dataIndex: "price",
    key: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "Discount",
    dataIndex: "discount",
    key: "discount",
    sorter: (a, b) => a.discount - b.discount,
  },
  {
    title: "Stock",
    dataIndex: "stock",
    key: "stock",
    sorter: (a, b) => a.stock - b.stock,
  },
  {
    title: "Comments",
    dataIndex: "comments",
    key: "comments",
    sorter: (a, b) => a.comments - b.comments,
  },
  {
    title: "Likes",
    dataIndex: "likes",
    key: "likes",
    sorter: (a, b) => a.likes - b.likes,
  },
  {
    title: "Orders",
    dataIndex: "orders",
    key: "orders",
    sorter: (a, b) => a.orders - b.orders,
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
  },
];

export const customersColumns = [
  {
    title: "Avatar",
    dataIndex: "avatar",
    key: "avatar",
  },
  {
    title: "Display Name",
    dataIndex: "displayName",
    key: "displayName",
  },
  {
    title: "Username",
    dataIndex: "username",
    key: "username",
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
    title: "Likes",
    dataIndex: "likes",
    key: "likes",
  },
  {
    title: "Comments",
    dataIndex: "comments",
    key: "comments",
  },
  {
    title: "Joined At",
    dataIndex: "createdAt",
    key: "createdAt",
  },
];
