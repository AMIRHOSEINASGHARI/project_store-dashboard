"use client";

import { useContextProvider } from "@/context/MainContextProvider";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { signIn } from "next-auth/react";
import toast from "react-hot-toast";
import Loader from "../shared/Loader";

const LoginPage = () => {
  const [loader, setLoader] = useState(false);
  const [pageText, setPageText] = useState("");
  const router = useRouter();
  const { loaderStatus, setLoaderStatus } = useContextProvider();

  const [form, setForm] = useState({
    username: "",
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

    if (!form.username || !form.password) {
      return toast.error("Fill all fields requiered!");
    } else {
      setLoader(true);
      const result = await signIn("credentials", {
        ...form,
        redirect: false,
      });
      if (result.error) {
        setLoader(false);
        return toast.error(result.error);
      } else {
        setLoaderStatus(true);
        setPageText("Redirecting to home page...");
        toast.success("Welcome");
        router.replace("/");
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
        <h1 className="text-center text-3xl font-black mb-10">
          Login to account
        </h1>
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
            <p>Dont have account?</p>
            <Link
              href="/register"
              className="bg-gray-100 border text-center py-1 px-4 rounded-lg"
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginPage;
