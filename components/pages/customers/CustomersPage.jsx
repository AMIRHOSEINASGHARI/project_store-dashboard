"use client";

import Loader from "@/components/shared/Loader";
import PageTable from "@/components/shared/PageTable";
import { customersColumns } from "@/constants";
import { useContextProvider } from "@/context/MainContextProvider";
import { fetchCustomers } from "@/utils/api";
import { shorterText } from "@/utils/functions";
import Image from "next/image";
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
          name: (
            <Link
              href={`/customers/${customer._id}`}
              className="flex items-center gap-5 w-fit"
            >
              <Image
                width={50}
                height={50}
                alt="user"
                priority
                className="rounded-full"
                src={
                  customer?.avatar ||
                  `/avatars/avatar_${Math.floor(Math.random() * 20)}.jpg`
                }
              />
              <div>
                <p className="font-medium text-[18px] -mb-2">
                  {customer.displayName}
                </p>
                <p className="font-light text-[14px] text-gray-400">
                  {customer.username}
                </p>
              </div>
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
      <div>
        <div className="">
          <h1 className="sm:text-[35px] text-[20px] font-[700]">Customers</h1>
          <div className="flex items-center gap-2 text-[14px]">
            <Link
              href="/"
              className="font-[400] text-gray-600 border-b border-transparent hover:border-gray-400"
            >
              Dashboard
            </Link>
            <div className="w-[4px] h-[4px] bg-gray-600 rounded-full" />
            <Link
              href="/customers"
              className="font-[400] text-gray-600 border-b border-transparent hover:border-gray-400"
            >
              Customers
            </Link>
            <div className="w-[4px] h-[4px] bg-gray-600 rounded-full" />
            <p className="font-[400] text-gray-400">List</p>
          </div>
        </div>
      </div>
      <PageTable
        columns={customersColumns}
        dataSource={dataSource}
        pagination={true}
      />
    </div>
  );
};

export default CustomersPage;
