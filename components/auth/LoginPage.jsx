"use client";

import Link from "next/link";
import { useState } from "react";

const LoginPage = () => {
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

  return (
    <form className="flex flex-col items-center justify-center h-screen">
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
              type="text"
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
