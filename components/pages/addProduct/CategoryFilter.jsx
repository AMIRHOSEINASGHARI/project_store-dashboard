"use client";

import { categories } from "@/constants";
import { Listbox, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const CategoryFilter = ({ setForm, form }) => {
  const [selected, setSelected] = useState(form.category);

  const changeHandler = (e) => {
    setSelected(e.name);
    setForm({
      ...form,
      category: e.name,
    });
  };
  return (
    <div className="w-full text-left">
      <Listbox value={selected} onChange={changeHandler}>
        <div className="relative">
          <Listbox.Button className="relative cursor-pointer w-full rounded-full bg-gray-100 p-4 text-left">
            <span className="block truncate text-xs capitalize">
              {selected || "Select a Category"}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <BiChevronDown className="h-5 w-5 text-gray-400" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-50 mt-1 h-[300px] w-full overflow-auto bg-white shadow-2xl shadow-gray-300">
              <Listbox.Option value="" className="py-2 px-4 text-gray-400">
                Select a Category
              </Listbox.Option>
              {categories.map((filter, index) => (
                <Listbox.Option
                  key={index}
                  value={filter}
                  className="py-2 px-4 hover:bg-gray-100 transition duration-100 ease-in-out cursor-pointer flex items-center gap-4"
                >
                  <div>{filter.icon}</div>
                  <p>{filter.name}</p>
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default CategoryFilter;
