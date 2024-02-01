"use client";

import Loader from "@/components/shared/Loader";
import { shorterText } from "@/utils/functions";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import AccessList from "./AccessList";
import PageTable from "@/components/shared/PageTable";
import { administratorsColumns } from "@/constants";
import moment from "moment";

const Administrators = ({ session }) => {
  const [data, setData] = useState(null);
  const [dataSource, setDataSource] = useState([]);

  const fetchAdmins = async () => {
    const request = await fetch("/api/user/administrators");
    const response = await request.json();
    setData(response);
    if (response.success) {
      setDataSource(
        response.users.map((user) => ({
          key: user._id,
          avatar: (
            <Image
              src={
                user.avatar ||
                `/avatars/avatar_${Math.floor(Math.random() * 20)}.jpg`
              }
              width={50}
              height={50}
              alt={user?.displayName}
              priority
              className="rounded-full w-[30px] md:w-[40px]"
            />
          ),
          name: user.displayName,
          username: user.username,
          joinedAt: moment(user.createdAt).fromNow(),
          roll: user.roll,
          access: (
            <AccessList {...user} session={session} reFreshData={fetchAdmins} />
          ),
        }))
      );
    }
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
    <section className="lg:flex cardShadow3 rounded-2xl py-[32px] px-[24px]">
      <div className="w-full lg:w-[500px] max-lg:mb-10">
        <h1 className="w-full text-[17px] font-[700]">Administrators</h1>
      </div>
      <div className="w-full">
        <PageTable columns={administratorsColumns} dataSource={dataSource} />
      </div>
    </section>
  );
};

export default Administrators;
