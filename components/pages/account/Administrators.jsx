"use client";

import Loader from "@/components/shared/Loader";
import { shorterText } from "@/utils/functions";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AccessList from "./AccessList";

const Administrators = ({ session }) => {
  const [data, setData] = useState(null);

  const fetchAdmins = async () => {
    const request = await fetch("/api/user/administrators");
    const response = await request.json();
    setData(response);
  };

  useEffect(() => {
    fetchAdmins();
  }, []);

  if (data === null)
    return (
      <div className="w-full flex items-center justify-center">
        <Loader />
      </div>
    );

  if (data?.success === false) {
    return <h1 className="font-black text-2xl text-center">{data?.msg}</h1>;
  }

  return (
    <div>
      <h1 className="heading mb-5">Administrators</h1>
      <div className="flex flex-wrap w-full gap-5">
        {data?.users?.map((item) => (
          <div
            key={item._id}
            className="bg-gray-100 rounded-xl p-5 min-w-[300px] w-full flex-1 flex items-center justify-between"
          >
            <div className="flex gap-3 items-center">
              <Image
                src={
                  item?.avatar ||
                  (item.roll === "ADMIN" ? "/person.jpg" : "/man.png")
                }
                width={50}
                height={50}
                alt={item?.displayName}
                priority
                className="rounded-full w-[30px] md:w-[50px]"
              />
              <div className="text-[16px] font-light break-all">
                <p>{item.username}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <p className="bg-gray-100 rounded-xl py-1 px-3 text-[10px] font-bold text-gray-500 border border-gray-300">
                {item?.roll}
              </p>
              {session?.data?.user?.roll === "ADMIN" && (
                <AccessList
                  {...item}
                  session={session}
                  reFreshData={fetchAdmins}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Administrators;
