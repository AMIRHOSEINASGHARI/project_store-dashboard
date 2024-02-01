"use client";

import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import Loader from "@/components/shared/Loader";
import toast from "react-hot-toast";
import { BiEditAlt } from "react-icons/bi";
import ImageSection from "../addProduct/ImageSection";
import { uploadImage } from "@/utils/functions";
import { updateUserInfo } from "@/utils/api";
import { signOut } from "next-auth/react";

const EditProfile = (props) => {
  let [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    displayName: props?.user?.name || "",
    username: props?.user?.username || "",
    image: "",
  });

  function closeModal() {
    setIsOpen(false);
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

  const saveData = async () => {
    if (!form.username || !form.displayName) {
      toast.error("Username and display name cannot be empty");
      return;
    }

    setLoading(true);
    if (form.image) {
      const uploadResult = await uploadImage(form.image);
      const result = await updateUserInfo({
        displayName: form.displayName,
        username: form.username,
        image: uploadResult.imageUrl,
      });
      setLoading(false);
      if (result.success) {
        toast.success(result.msg);
        // signOut();
      } else {
        toast.error(result.msg);
      }
    } else {
      const result = await updateUserInfo({
        displayName: form.displayName,
        username: form.username,
      });
      setLoading(false);
      if (result.success) {
        toast.success(result.msg);
        signOut();
      } else {
        toast.error(result.msg);
      }
    }
  };

  return (
    <>
      <div onClick={openModal} className="cursor-pointer">
        <Image
          src={
            props?.user?.image ||
            (props?.user?.roll === "ADMIN" ? "/person.jpg" : "/man.png")
          }
          width={250}
          height={250}
          alt={props?.user?.name}
          priority
          className="rounded-full w-[120px] h-[120px] object-cover outline outline-offset-4 outline-2 outline-gray-100"
        />
        <button className="absolute -bottom-1 right-2 border-2 shadow-xl bg-white text-gray-600 rounded-full p-2 text-md">
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
                  <button
                    type="button"
                    className="bg-blue-100 border-2 border-blue-200 hover:bg-blue-200 text-blue-500 transition duration-150 rounded-full w-full font-bold text-md py-3 flex items-center justify-center"
                    onClick={saveData}
                  >
                    {loading ? <Loader w={30} h={26} /> : "Save"}
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
