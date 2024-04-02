import { shorterText } from "@/utils/functions";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineFavoriteBorder } from "react-icons/md";
import { AiOutlineClockCircle } from "react-icons/ai";
import BlogCardActions from "./BlogCardActions";
import { icons } from "@/constants";

const BlogCard = ({ title, image, createdAt, slug, _id, likes, fetchData }) => {
  return (
    <div className="cardShadow rounded-xl overflow-hidden">
      <Link href={`/blogs/${slug}`}>
        <Image
          src={image}
          width={200}
          height={200}
          alt={title}
          priority
          className="w-full h-[200px] object-cover"
        />
      </Link>
      <div className="flex flex-col justify-between gap-7 px-5 py-3">
        <Link
          href={`/blogs/${slug}`}
          className="font-semibold hover:text-blue-500 transition-all duration-150"
        >
          {shorterText(title, 50)}
        </Link>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-[22px]">{icons.clock}</div>
              <p className="text-[13px]">{moment(createdAt).fromNow()}</p>
            </div>
            <div className="flex items-center gap-2">
              <span>{likes.length}</span>
              <div className="text-[22px]">{icons.heart}</div>
            </div>
          </div>
          <BlogCardActions _id={_id} />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
