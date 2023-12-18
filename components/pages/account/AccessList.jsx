"use client";

import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { GrUserAdmin } from "react-icons/gr";
import Image from "next/image";
import Loader from "@/components/shared/Loader";
import toast from "react-hot-toast";
import { giveAccessToUser } from "@/utils/api";

const AccessList = (props) => {
  let [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const giveAccess = async (username, actionType) => {
    if (props.session?.data?.user?.roll !== "ADMIN") return;

    setLoading(true);

    const result = await giveAccessToUser(username, actionType);
    setLoading(false);
    if (result.success) {
      props.reFreshData();
      toast.success(result.msg);
      closeModal();
    }
    if (!result.success) {
      toast.error(result.msg);
    }
  };

  return (
    <>
      <button
        className="bg-blue-100 rounded-xl py-1 px-3 font-bold text-blue-500 border border-blue-300"
        onClick={openModal}
      >
        <GrUserAdmin />
      </button>

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
                <Dialog.Panel className="w-full max-w-md transform rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="div"
                    className="w-full flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={props?.avatar || "/man.png"}
                        width={50}
                        height={50}
                        alt={props?.displayName}
                        priority
                        className="rounded-fullw-[50px]"
                      />
                      <div>
                        <p className="font-bold uppercase text-sm md:text-[20px] w-full break-all">
                          {props.displayName}
                        </p>
                        <p className="text-xs text-gray-400 break-all">
                          {props.username}
                        </p>
                      </div>
                    </div>
                  </Dialog.Title>
                  <div className="mt-4 space-y-2">
                    <div className="w-full flex justify-end">
                      <span className="text-xs font-bold bg-gray-200 rounded-full py-1 px-4">
                        {props.roll}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <button
                        type="button"
                        disabled={loading}
                        className="bg-red-100 border-2 border-red-200 hover:bg-red-200 text-red-500 transition duration-150 rounded-xl w-full font-bold text-md py-2 flex items-center justify-center"
                        onClick={() =>
                          giveAccess(props.username, "delete-user")
                        }
                      >
                        {loading ? <Loader w={30} h={26} /> : "Remove User"}
                      </button>
                      {props.roll === "USER" && (
                        <button
                          type="button"
                          disabled={loading}
                          className="bg-blue-100 border-2 border-blue-200 hover:bg-blue-200 text-blue-500 transition duration-150 rounded-xl w-full font-bold text-md py-2 flex items-center justify-center"
                          onClick={() =>
                            giveAccess(props.username, "set-as-co-admin")
                          }
                        >
                          {loading ? <Loader w={30} h={26} /> : "Give Access"}
                        </button>
                      )}
                      {props.roll === "Co-Admin" && (
                        <button
                          type="button"
                          disabled={loading}
                          className="bg-gray-100 border-2 border-gray-200 hover:bg-gray-200 transition duration-150 rounded-xl w-full font-bold text-md py-2 flex items-center justify-center"
                          onClick={() =>
                            giveAccess(props.username, "set-as-user")
                          }
                        >
                          {loading ? <Loader w={30} h={26} /> : "Set as USER"}
                        </button>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default AccessList;
