"use client";

import Loader from "@/components/shared/Loader";
import PageTable from "@/components/shared/PageTable";
import { customersColumns } from "@/constants";
import { useContextProvider } from "@/context/MainContextProvider";
import { fetchCustomers } from "@/utils/api";
import { shorterText } from "@/utils/functions";
import { Image } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CustomersPage = () => {
  const { collapseMenu } = useContextProvider();
  const [customers, setCustomers] = useState(null);
  const [dataSource, setDataSource] = useState([]);

  const fetchData = async () => {
    const data = await fetchCustomers();
    setCustomers(await data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (customers?.success === true) {
      setDataSource(
        customers.customers.map((customer) => ({
          key: customer._id,
          avatar: <Image width={40} src={customer?.avatar || "/man.png"} />,
          displayName: (
            <Link href={`/customers/${customer._id}`} target="_blank">
              {customer.displayName}
            </Link>
          ),
          username: (
            <Link href={`/customers/${customer._id}`} target="_blank">
              {customer.username}
            </Link>
          ),
          phone: customer.phoneNumber,
          address: shorterText(customer.address, 15),
          orders: customer.orders.length,
          likes: customer.likes.length,
          comments: customer.comments.length,
          createdAt: new Date(customer.createdAt).toLocaleDateString(),
        }))
      );
    }
  }, [customers]);

  if (customers === null)
    return (
      <div
        className={`${
          collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
        } space-y-5 pb-20 w-full flex justify-center`}
      >
        <Loader />
      </div>
    );

  if (customers.success === false) {
    return (
      <h1
        className={`${
          collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
        } space-y-5 pb-20`}
      >
        {customers.msg}
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
        columns={customersColumns}
        dataSource={dataSource}
        btnTitle={"Delete"}
        selecttion={true}
        pagination={true}
      />
    </div>
  );
};

export default CustomersPage;
