import { BsCurrencyDollar } from "react-icons/bs";
import { GoNote } from "react-icons/go";
import { HiOutlinePlus } from "react-icons/hi";
import { PiUsersThree } from "react-icons/pi";
import { MdOutlineManageAccounts } from "react-icons/md";
import { FaHome } from "react-icons/fa";

export const menuList = [
  {
    title: "Add Product",
    icon: <HiOutlinePlus />,
    link: "/add-product",
    id: "1",
  },
  {
    title: "Users",
    icon: <PiUsersThree />,
    link: "/users",
    id: "2",
  },
  {
    title: "Earn",
    icon: <BsCurrencyDollar />,
    link: "/earn",
    id: "3",
  },
  {
    title: "Create Blog",
    icon: <GoNote />,
    link: "/add-blog",
    id: "4",
  },
  {
    title: "Account",
    icon: <MdOutlineManageAccounts />,
    link: "/me",
    id: "5",
  },
  {
    title: "Home",
    icon: <FaHome />,
    link: "/",
    id: "6",
  },
];
