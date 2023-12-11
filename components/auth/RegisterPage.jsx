"use client";

import { createUser } from "@/utils/api";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const RegisterPage = () => {
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
      const result = await createUser(form);
      if (!result.success) {
        return toast.error(result.msg);
      } else {
        toast.success(result.msg);
        router.push("/login");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center h-screen"
    >
      <div className="w-[250px] sm:w-[400px]">
        <h1 className="text-center text-3xl font-black mb-10">
          Create account
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
            className="bg-black text-white rounded-lg w-full py-2 font-bold"
          >
            Submit
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
