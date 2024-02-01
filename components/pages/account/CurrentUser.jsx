"use client";

import Image from "next/image";
import { BiEditAlt } from "react-icons/bi";
import Loader from "@/components/shared/Loader";
import EditProfile from "./EditProfile";

const CurrentUser = ({ session: { data, status } }) => {
  if (status === "loading") {
    return (
      <div className="w-full flex items-center justify-center my-32">
        <Loader />
      </div>
    );
  }

  //TODO: save handler
  const changeHandler = (e) => {};
  const saveHandler = () => {};

  return (
    <div>
      <section className="lg:flex cardShadow3 rounded-2xl py-[32px] px-[24px]">
        <div className="w-full lg:w-[500px] max-lg:mb-10">
          <h1 className="w-full text-[17px] font-[700]">General</h1>
        </div>
        <div className="w-full flex flex-col gap-5">
          <div className="flex flex-col items-center justify-center cardShadow3 p-4 rounded-xl">
            <div className="relative w-fit mb-5">
              <EditProfile {...data} />
            </div>
            <p className="text-[12px] text-gray-500 font-light">
              Allowed *.jpg, *.png max size of 2 MB
            </p>
          </div>
          <div className="flex flex-col xl:flex-row gap-3">
            <div className="flex gap-3 flex-col w-full">
              <div className="w-full">
                <label htmlFor="name" className="text-[12px] font-medium">
                  Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={data?.user?.name}
                  onChange={changeHandler}
                  className="input2 cursor-pointer"
                />
              </div>
              <div className="w-full">
                <label htmlFor="username" className="text-[12px] font-medium">
                  Username
                </label>
                <input
                  name="username"
                  type="text"
                  value={data?.user?.username}
                  onChange={changeHandler}
                  className="input2 cursor-pointer"
                />
              </div>
              <div className="w-full">
                <label htmlFor="email" className="text-[12px] font-medium">
                  Email
                </label>
                <input
                  name="email"
                  type="text"
                  value={"info@amirhosein.com"}
                  onChange={changeHandler}
                  className="input2 cursor-pointer"
                />
              </div>
            </div>
            <div className="flex gap-3 flex-col w-full">
              <div className="w-full">
                <label htmlFor="phone" className="text-[12px] font-medium">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="number"
                  value={"+989120000000"}
                  onChange={changeHandler}
                  className="input2 cursor-pointer"
                />
              </div>
              <div className="w-full">
                <label htmlFor="address" className="text-[12px] font-medium">
                  Address
                </label>
                <input
                  name="address"
                  type="text"
                  value={"Iran tehran ..."}
                  onChange={changeHandler}
                  className="input2 cursor-pointer"
                />
              </div>
              <div className="w-full">
                <label htmlFor="country" className="text-[12px] font-medium">
                  Country
                </label>
                <input
                  name="country"
                  type="text"
                  value={"Iran"}
                  onChange={changeHandler}
                  className="input2 cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="w-full flex justify-end">
            <button
              onClick={saveHandler}
              className="bg-black text-white font-semibold py-2 px-4 rounded-xl text-[14px]"
            >
              Save changes
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CurrentUser;
