"use client";

import Link from "next/link";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import QUERY_KEYS from "@/services/reactQuery/queryKeys";
import { getProducts } from "@/services/reactQuery/queries";
import { useContextProvider } from "@/context/MainContextProvider";
import { shorterText } from "@/utils/functions";
import { Table } from "antd";
import Loader from "@/components/shared/Loader";
import { productsColumns } from "@/constants";
import DeleteProduct from "./DeleteProduct";
import MotionDiv from "@/components/shared/MotionDiv";
import PageHeader from "@/components/shared/PageHeader";

const ProductsPage = () => {
  const { collapseMenu } = useContextProvider();
  const { data, isLoading, isError } = useQuery({
    queryKey: [QUERY_KEYS.products],
    queryFn: getProducts,
    staleTime: 1 * 10 * 1000,
    cacheTime: 10 * 60 * 1000,
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
  const dataSource = data?.products.map((p) => ({
    key: p._id,
    image: (
      <Link href={`/products/${p?._id}`} className="w-fit">
        <Image
          width={70}
          height={70}
          alt={shorterText(p?.title, 5)}
          priority
          src={p?.image}
        />
      </Link>
    ),
    title: (
      <Link href={`/products/${p?._id}`} className="font-medium">
        <p>{shorterText(p?.title, 20)}</p>
        <div className="text-gray-400">
          in <span className="capitalize">{p?.category}</span>
        </div>
      </Link>
    ),
    price: <p className="font-medium">{p?.price.toLocaleString()}</p>,
    discount: <p className="font-medium">{p?.discount}</p>,
    stock: <p className="font-medium">{p?.stock.toLocaleString()}</p>,
    status: (
      <p className="bg-green-100 text-green-500 font-medium w-fit rounded-lg py-1 px-3">
        Published
      </p>
    ), //TODO: make this dynamic
    actions: (
      <div className="flex items-center gap-5">
        <Link href={`/products/${p?._id}`} className="w-[20px] h-[20px]">
          <img src="/icons/document.svg" className="w-full h-full" />
        </Link>
        <Link href={`/products/edit/${p?._id}`} className="w-[20px] h-[20px]">
          <img src="/icons/edit.svg" className="w-full h-full" />
        </Link>
        <DeleteProduct productId={p?._id} />
      </div>
    ),
  }));

  return (
    <MotionDiv>
      <div
        className={`${
          collapseMenu ? "distanceCollapse" : "distanceNotCollapse"
        } space-y-5 pb-20`}
      >
        <PageHeader
          title="Products"
          links={[
            { name: "Dashboard", route: "/" },
            { name: "Products", route: "/products" },
          ]}
          subLink="List"
        />

        <Table
          className="cardShadow3 rounded-xl"
          scroll={{ x: true }}
          pagination={{ pageSize: 10, position: ["bottomLeft"] }}
          columns={productsColumns}
          dataSource={dataSource}
        />
      </div>
    </MotionDiv>
  );
};

export default ProductsPage;
