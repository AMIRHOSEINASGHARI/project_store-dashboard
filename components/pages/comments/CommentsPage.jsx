"use client";

import Loader from "@/components/shared/Loader";
import { useContextProvider } from "@/context/MainContextProvider";
import { shorterText } from "@/utils/functions";
import Image from "next/image";
import moment from "moment";
import { commentPageColumns } from "@/constants";
import Link from "next/link";
import CommentDetail from "./CommentDetail";
import DeleteComment from "./DeleteComment";
import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "@/services/reactQuery/queryKeys";
import { getComments } from "@/services/reactQuery/queries";
import MotionDiv from "@/components/shared/MotionDiv";
import { Table } from "antd";

const CommentsPage = () => {
  const { collapseMenu } = useContextProvider();
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.comments],
    queryFn: getComments,
    staleTime: 30 * 60 * 1000,
    cacheTime: 60 * 60 * 1000,
  });

  if (isLoading) {
    return (
      <div
        className={`${
          collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
        } space-y-5 pb-20 w-full flex justify-center`}
      >
        <Loader w={30} h={30} />
      </div>
    );
  } else if (isError) {
    return (
      <div
        className={`${
          collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
        } space-y-5 pb-20 w-full flex justify-center`}
      >
        <h1>Error</h1>
      </div>
    );
  }

  // table data source
  const dataSource = data?.comments.map((c) => ({
    key: c._id,
    name: (
      <Link href={`/users/${c.senderId._id}`}>{c.senderId.displayName}</Link>
    ),
    username: (
      <Link href={`/users/${c.senderId._id}`}>{c.senderId.username}</Link>
    ),
    date: moment(c.createdAt).fromNow(),
    details: <CommentDetail {...c} />,
    product: (
      <Link href={`/products/${c.productId._id}`}>
        <Image
          src={c.productId.image}
          width={50}
          height={50}
          alt={shorterText(c.productId.title, 10)}
          priority
        />
      </Link>
    ),
    title: shorterText(c.title, 10),
    actions: <DeleteComment commentId={c?._id} />,
    status: c.answer ? (
      <p className="w-fit font-medium bg-green-100 rounded-lg py-1 px-3 border border-green-100 text-green-500 text-[12px]">
        Answered
      </p>
    ) : (
      <p className="w-fit font-medium bg-red-100 rounded-lg py-1 px-3 border border-red-100 text-red-500 text-[12px]">
        No Answer
      </p>
    ),
  }));

  return (
    <MotionDiv>
      <div
        className={`${
          collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
        } space-y-5 pb-20`}
      >
        <div>
          <h1 className="sm:text-[35px] text-[20px] font-[700]">Comments</h1>
          <div className="flex items-center gap-2 text-[14px]">
            <Link
              href="/"
              className="font-[400] text-gray-600 border-b border-transparent hover:border-gray-400"
            >
              Dashboard
            </Link>
            <div className="w-[4px] h-[4px] bg-gray-600 rounded-full" />
            <Link
              href="/products"
              className="font-[400] text-gray-600 border-b border-transparent hover:border-gray-400"
            >
              Products
            </Link>
            <div className="w-[4px] h-[4px] bg-gray-600 rounded-full" />
            <p className="font-[400] text-gray-400">Comments</p>
          </div>
        </div>

        <Table
          className="cardShadow3 rounded-xl"
          scroll={{ x: true }}
          pagination={{ pageSize: 20, position: ["bottomLeft"] }}
          columns={commentPageColumns}
          dataSource={dataSource}
        />
      </div>
    </MotionDiv>
  );
};

export default CommentsPage;
