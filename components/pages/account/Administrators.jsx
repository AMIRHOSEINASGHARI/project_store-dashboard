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
                (user.roll === "ADMIN" ? "/person.jpg" : "/man.png")
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
    <div>
      <h1 className="heading mb-5">Administrators</h1>
      <div>
        <PageTable columns={administratorsColumns} dataSource={dataSource} />
      </div>
    </div>
  );
};

export default Administrators;
