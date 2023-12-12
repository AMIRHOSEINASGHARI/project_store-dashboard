"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import { createUser } from "@/utils/api";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import Loader from "../shared/Loader";
import Image from "next/image";

const RegisterPage = () => {
  const [loader, setLoader] = useState(false);
  const [pageText, setPageText] = useState("");
  const router = useRouter();
  const { loaderStatus, setLoaderStatus } = useContextProvider();

  const [form, setForm] = useState({
    username: "",
    displayName: "",
    password: "",
  });

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.username || !form.displayName || !form.password) {
      return toast.error("Fill all fields requiered!");
    } else {
      setLoader(true);
      const result = await createUser(form);
      setLoader(false);
      if (!result.success) {
        return toast.error(result.msg);
      } else {
        setLoaderStatus(true);
        setPageText("Redirecting to login page...");
        toast.success(result.msg);
        router.push("/login");
        setLoaderStatus(false);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center h-screen"
    >
      {loaderStatus && (
        <div className="backdrop-blur-xl w-full flex items-center justify-center gap-3 flex-col absolute inset-0">
          <Loader color="#fff" />
          <p className="font-bold">{pageText}</p>
        </div>
      )}
      <div className="w-[250px] sm:w-[400px]">
        <div className="flex items-center justify-center mb-10">
          <Image
            src="/logo-blue.png"
            width={200}
            height={200}
            alt="logo"
            priority
          />
        </div>
        <div className="space-y-5">
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Username</label>
            <input
              name="username"
              type="text"
              value={form.username}
              onChange={changeHandler}
              placeholder="Username"
              className="placeholder:text-xs border border-gray-200 focus:outline focus:outline-black outline-none py-2 px-4 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Display name</label>
            <input
              name="displayName"
              type="text"
              value={form.displayName}
              onChange={changeHandler}
              placeholder="Display name"
              className="placeholder:text-xs border border-gray-200 focus:outline focus:outline-black outline-none py-2 px-4 rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="font-semibold">Password</label>
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={changeHandler}
              placeholder="Password"
              className="placeholder:text-xs border border-gray-200 focus:outline focus:outline-black outline-none py-2 px-4 rounded-lg"
            />
          </div>
          <button
            type="submit"
            disabled={loader && true}
            className={`${
              loader ? "bg-gray-100" : "bg-black"
            } text-white rounded-lg w-full py-2 font-bold flex justify-center`}
          >
            {loader ? <Loader h={25} w={25} /> : "Submit"}
          </button>
          <div className="flex items-center justify-center gap-4 text-sm font-bold">
            <p>Already have account?</p>
            <Link
              href="/login"
              className="bg-gray-100 border text-center py-1 px-4 rounded-lg"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default RegisterPage;
