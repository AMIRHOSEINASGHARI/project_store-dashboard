"use client";

import Loader from "@/components/shared/Loader";
import { addStockAndDiscount } from "@/utils/api";
import { shorterText } from "@/utils/functions";
import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import { TbSettings } from "react-icons/tb";

const ProductCardActions = ({
  projectId,
  title,
  image,
  getProducts,
  stock,
  discount,
}) => {
  let [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    stock: "",
    discount: "",
  });

  function closeModal() {
    setIsOpen(false);
    setLoading(false);
    setForm({
      stock: "",
      discount: "",
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

  const saveData = async (_id) => {
    if (form.discount === "" && form.stock === "")
      return toast.error("Fill at least one of the fields");
    if (form.stock === 0) return toast.error("Invalid value");
    if (form.discount < 0)
      return toast.error("Fields cannot be negative value");
    if (+form.stock[0] === 0) return toast.error("Wrong value");
    if (form.stock.includes(".")) return toast.error("Wrong value");
    if (!Number.isInteger(Number(form.stock)))
      return toast.error("Wrong value");
    if (Number(stock) + Number(form.stock) < 0)
      return toast.error("Wrong value");

    setLoading(true);
    const result = await addStockAndDiscount({
      ...form,
      _id,
    });
    setLoading(false);
    if (result.success) {
      toast.success(result.msg);
      getProducts();
      closeModal();
    } else {
      toast.error(result.msg);
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="bg-gray-100 text-gray-600 hover:text-blue-500 transition-all duration-150 rounded-xl p-3 flex items-center justify-center flex-1 gap-2"
      >
        <TbSettings className="text-[20px]" />
        <p className="text-xs">Actions</p>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title as="div">
                    <div className="w-full">
                      <div className="w-full h-[180px] overflow-hidden flex justify-center items-center bg-gray-100 p-3">
                        <Image
                          src={image}
                          width={150}
                          height={150}
                          priority
                          alt={title}
                          className="object-contain"
                        />
                      </div>
                      <p className="font-bold break-all text-justify mt-2">
                        {shorterText(title, 200)}
                      </p>
                    </div>
                  </Dialog.Title>
                  <div className="mb-3 mt-10 space-y-6">
                    <div className="space-y-1">
                      <div>
                        <label className="font-bold px-4">
                          Current Stocks: {stock}
                        </label>
                        <input
                          name="stock"
                          type="number"
                          min={-stock}
                          value={form.stock}
                          onChange={changeHandler}
                          placeholder="Add or reduce"
                          className="placeholder:text-sm w-full rounded-full border border-gray-200 bg-gray-100 focus:outline focus:outline-black outline-none py-3 px-4"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="font-bold px-4">
                        Current Discount: {discount}%
                      </label>
                      <input
                        name="discount"
                        type="number"
                        min={0}
                        max={100}
                        value={form.discount}
                        onChange={changeHandler}
                        placeholder="Set new discount"
                        className="placeholder:text-sm w-full rounded-full border border-gray-200 bg-gray-100 focus:outline focus:outline-black outline-none py-3 px-4"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    className="bg-blue-100 border-2 border-blue-200 hover:bg-blue-200 text-blue-500 transition duration-150 rounded-full w-full font-bold text-md py-3 flex items-center justify-center"
                    onClick={() => saveData(projectId)}
                    disabled={loading}
                  >
                    {loading ? <Loader w={30} h={26} /> : "Submit"}
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

export default ProductCardActions;
