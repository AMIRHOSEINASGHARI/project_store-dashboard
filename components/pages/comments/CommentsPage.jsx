"use client";

import Loader from "@/components/shared/Loader";
import { useContextProvider } from "@/context/MainContextProvider";
import { fetchComments } from "@/utils/api";
import { shorterText } from "@/utils/functions";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { RiQuestionAnswerLine } from "react-icons/ri";
import { CiCircleCheck, CiEdit } from "react-icons/ci";
import moment from "moment";
import PageTable from "@/components/shared/PageTable";
import { commentPageColumns } from "@/constants";
import { Tooltip } from "antd";
import Link from "next/link";
import CommentDetail from "./CommentDetail";

const CommentsPage = () => {
  const { collapseMenu } = useContextProvider();
  const [comments, setComments] = useState(null);
  const [dataSource, setDataSource] = useState([]);

  const fetchData = async () => {
    const data = await fetchComments();
    setComments(await data);
    if (data.success === true) {
      setDataSource(
        data.comments.map((comment) => ({
          key: comment._id,
          name: (
            <Link href={`/users/${comment.senderId._id}`}>
              {comment.senderId.displayName}
            </Link>
          ),
          username: (
            <Link href={`/users/${comment.senderId._id}`}>
              {comment.senderId.username}
            </Link>
          ),
          date: moment(comment.createdAt).fromNow(),
          details: <CommentDetail {...comment} />,
          product: (
            <Link href={`/products/${comment.productId._id}`}>
              <Image
                src={comment.productId.image}
                width={50}
                height={50}
                alt={shorterText(comment.productId.title, 10)}
                priority
              />
            </Link>
          ),
          title: shorterText(comment.title, 10),
          answer: comment.answer ? (
            <div className="flex items-center gap-2">
              <CiCircleCheck className="text-green-500 text-[20px]" />
              <Tooltip title="Edit your answer">
                <button>
                  <CiEdit className="text-[20px]" />
                </button>
              </Tooltip>
            </div>
          ) : (
            <Tooltip title="Answer the comment">
              <button>
                <RiQuestionAnswerLine className="text-[20px]" />
              </button>
            </Tooltip>
          ),
        }))
      );
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (comments === null)
    return (
      <div
        className={`${
          collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
        } space-y-5 pb-20 w-full flex justify-center`}
      >
        <Loader />
      </div>
    );

  if (comments.success === false) {
    return (
      <h1
        className={`${
          collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
        } space-y-5 pb-20`}
      >
        {comments.msg}
      </h1>
    );
  }

  return (
    <div
      className={`${
        collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
      } space-y-5 pb-20`}
    >
      <PageTable
        columns={commentPageColumns}
        dataSource={dataSource}
        btnTitle={"Delete"}
        selecttion={true}
        pagination={true}
      />
    </div>
  );
};

export default CommentsPage;
