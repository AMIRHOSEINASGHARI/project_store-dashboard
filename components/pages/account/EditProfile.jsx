"use client";

import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { GrUserAdmin } from "react-icons/gr";
import Image from "next/image";
import Loader from "@/components/shared/Loader";
import toast from "react-hot-toast";
import { BiEditAlt } from "react-icons/bi";
import ImageSection from "../addProduct/ImageSection";
import { AiOutlineClose } from "react-icons/ai";

const EditProfile = (props) => {
  let [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [passSection, setPassSection] = useState(false);
  const [form, setForm] = useState({
    displayName: props?.user?.name || "",
    username: props?.user?.username || "",
    image: "",
    password: "",
    currentPassword: "",
  });

  function closeModal() {
    setIsOpen(false);
    setPassSection(false);
    setForm({
      displayName: props?.user?.name || "",
      username: props?.user?.username || "",
      image: "",
      password: "",
      currentPassword: "",
    });
  }

  function openModal() {
    setIsOpen(true);
  }

  const changeHandler = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div onClick={openModal} className="cursor-pointer">
        <Image
          src={
            props.user.image ||
            (props.user.roll === "ADMIN" ? "/person.jpg" : "/man.png")
          }
          width={250}
          height={250}
          alt={props.user.name}
          priority
          className="rounded-full"
        />
        <button className="absolute top-3 right-4 border bg-white text-gray-600 rounded-full p-3 text-2xl">
          <BiEditAlt />
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full space-y-3 max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="w-full flex items-center justify-between"
                  >
                    <ImageSection form={form} setForm={setForm} />
                  </Dialog.Title>
                  <div className="space-y-1">
                    <label className="font-bold text-sm px-4">Username</label>
                    <input
                      name="username"
                      type="text"
                      value={form.username}
                      onChange={changeHandler}
                      placeholder="Username"
                      className="placeholder:text-sm w-full rounded-full border border-gray-200 bg-gray-100 focus:outline focus:outline-black outline-none py-3 px-4"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="font-bold text-sm px-4">
                      Display Name
                    </label>
                    <input
                      name="displayName"
                      type="text"
                      value={form.displayName}
                      onChange={changeHandler}
                      placeholder="Display Name"
                      className="placeholder:text-sm w-full rounded-full border border-gray-200 bg-gray-100 focus:outline focus:outline-black outline-none py-3 px-4"
                    />
                  </div>
                  {!passSection && (
                    <button
                      type="button"
                      onClick={() => setPassSection(true)}
                      className="font-bold text-sm rounded-lg hover:bg-gray-200 transition duration-75 py-1 px-4"
                    >
                      Change password?
                    </button>
                  )}

                  {passSection && (
                    <>
                      <div className="flex items-center gap-4">
                        <input
                          name="password"
                          type="password"
                          value={form.password}
                          onChange={changeHandler}
                          placeholder="Password"
                          className="placeholder:text-sm w-full rounded-full border border-gray-200 bg-gray-100 focus:outline focus:outline-black outline-none py-3 px-4"
                        />
                        <button
                          type="button"
                          onClick={() => setPassSection(false)}
                          className="font-bold text-[20px] rounded-full text-gray-500 bg-gray-200 hover:bg-gray-200 transition duration-75 p-[15px]"
                        >
                          <AiOutlineClose />
                        </button>
                      </div>
                      <input
                        name="currentPassword"
                        type="password"
                        value={form.currentPassword}
                        onChange={changeHandler}
                        placeholder="Current Password"
                        className="placeholder:text-sm w-full rounded-full border border-gray-200 bg-gray-100 focus:outline focus:outline-black outline-none py-3 px-4"
                      />
                    </>
                  )}
                  <button
                    type="button"
                    className="bg-blue-100 border-2 border-blue-200 hover:bg-blue-200 text-blue-500 transition duration-150 rounded-xl w-full font-bold text-md py-2 flex items-center justify-center"
                  >
                    Save
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default EditProfile;
