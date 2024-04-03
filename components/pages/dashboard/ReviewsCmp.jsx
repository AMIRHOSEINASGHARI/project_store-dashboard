import Link from "next/link";
import { motion } from "framer-motion";
import { icons } from "@/constants";

//TODO: make this dynamic by fetching data
const reviews = [
  {
    title: "Total Revenues",
    icon: icons.dollar,
    count: 576000,
    countClass: "text-green-500",
    iconClass: "text-green-500",
    link: "/revenue",
    profit: 15,
  },
  {
    title: "Total Products",
    icon: icons.basket,
    count: 16585,
    countClass: "text-blue-500",
    iconClass: "text-blue-500",
    link: "/products",
    profit: -5,
  },
  {
    title: "Total Users",
    icon: icons.users,
    count: 102365,
    countClass: "text-gray-500",
    iconClass: "text-gray-500",
    link: "/users",
    profit: 12,
  },
  {
    title: "Comments To Answer",
    icon: icons.paper,
    count: 3650,
    countClass: "text-orange-500",
    iconClass: "text-orange-500",
    link: "/comments",
    profit: 63,
  },
  {
    title: "New Orders",
    icon: icons.deliveryTruck,
    count: 250,
    countClass: "text-purple-500",
    iconClass: "text-purple-500",
    link: "/orders",
    profit: 18,
  },
  {
    title: "Blogs",
    icon: icons.textB,
    count: 9621,
    countClass: "text-indigo-500",
    iconClass: "text-indigo-500",
    link: "/blogs",
    profit: -3,
  },
];

const ReviewsCmp = () => {
  const variants = {
    hidden: { opacity: 0, translateY: 50 },
    visible: { opacity: 1, translateY: 0 },
  };

  return (
    <div className="flex flex-wrap gap-5">
      {reviews.map((el, i) => {
        const { title, icon, count, link, profit } = el;
        return (
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{
              delay: 0.1 * i,
              ease: "easeInOut",
              duration: 0.25,
            }}
            viewport={{
              amount: 0,
            }}
            className="flex flex-1 min-w-[280px] border hover:shadow-inner bg-white rounded-3xl group transition-all duration-150"
          >
            <Link
              href={link}
              key={i}
              className="flex flex-col flex-1 w-full justify-between"
            >
              <div className="flex justify-between p-5 pb-8">
                <div>
                  <h1 className="font-light text-[14px]">{title}</h1>
                  <span className={`font-bold text-[30px] text-gray-500`}>
                    {count.toLocaleString()}
                  </span>
                </div>
                <div
                  className={`text-[25px] w-[50px] h-[50px] rounded-full flex items-center justify-center cardShadow transform group-hover:-rotate-45 transition-all duration-300 ease-in-out`}
                >
                  {icon}
                </div>
              </div>
              <div class="w-full h-[1px] bg-gray-200" />
              <div className="px-5 py-3">
                {profit > 0 && (
                  <div className="flex items-center gap-1">
                    <div className="text-green-500">{icons.growArrow}</div>
                    <span className="text-green-500">{profit}%</span>
                    <p className="text-[14px] font-light">
                      increase vs last month
                    </p>
                  </div>
                )}
                {profit < 0 && (
                  <div className="flex items-center gap-1">
                    <div className="text-red-500">{icons.fallingArrow}</div>
                    <span className="text-red-500">{profit}%</span>
                    <p className="text-[14px] font-light">
                      decrease vs last month
                    </p>
                  </div>
                )}
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
};

export default ReviewsCmp;
