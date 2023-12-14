import { RadioGroup } from "@headlessui/react";
import { FaCheckCircle } from "react-icons/fa";
import { categories } from "@/constants";

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div>
      <h1 className="font-semibold">Category</h1>
      <div className="w-full my-5">
        <div className="w-full">
          <RadioGroup value={selectedCategory} onChange={setSelectedCategory}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {categories.map((item) => (
                <RadioGroup.Option
                  key={item.name}
                  value={item}
                  className={({ active, checked }) =>
                    `${
                      active
                        ? "ring-2 ring-white/60 ring-offset-2 ring-offset-sky-300"
                        : ""
                    }
                  ${checked ? "bg-sky-900/75 text-white" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                  }
                >
                  {({ active, checked }) => (
                    <>
                      <div className="flex w-full items-center justify-between">
                        <div className="flex items-center">
                          <div className="text-sm">
                            <RadioGroup.Label
                              as="div"
                              className={`font-medium flex items-center gap-4 ${
                                checked ? "text-white" : "text-gray-900"
                              }`}
                            >
                              <div className="text-xl">{item.icon}</div>
                              {item.name}
                            </RadioGroup.Label>
                          </div>
                        </div>
                        {checked && (
                          <div className="shrink-0 text-white">
                            <FaCheckCircle className="h-6 w-6" />
                          </div>
                        )}
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              ))}
            </div>
          </RadioGroup>
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
