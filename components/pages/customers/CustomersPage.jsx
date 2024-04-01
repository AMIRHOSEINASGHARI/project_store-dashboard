"use client";

import Loader from "@/components/shared/Loader";
import PageHeader from "@/components/shared/PageHeader";
import PageTable from "@/components/shared/PageTable";
import { customersColumns } from "@/constants";
import { fetchCustomers } from "@/utils/api";
import { shorterText } from "@/utils/functions";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const CustomersPage = () => {
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
      <div className="w-full flex justify-center">
        <Loader />
      </div>
    );

  if (customers.success === false) {
    return <h1>{customers.msg}</h1>;
  }

  return (
    <>
      <PageHeader
        title="Customers"
        links={[
          { name: "Dashboard", route: "/" },
          { name: "Customers", route: "/customers" },
        ]}
        subLink="List"
      />
      <PageTable
        columns={customersColumns}
        dataSource={dataSource}
        pagination={true}
      />
    </>
  );
};

export default CustomersPage;
