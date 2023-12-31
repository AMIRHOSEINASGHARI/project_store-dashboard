import { defaultColors } from "@/constants";
import React, { useEffect, useState } from "react";
import { CirclePicker } from "react-color";
import toast from "react-hot-toast";
import { IoIosClose } from "react-icons/io";

const ColorsSection = ({ form, setForm }) => {
  const [selectedColors, setSelectedColors] = useState(form.colors);

  const changeHandler = (color, e) => {
    if (selectedColors.find((item) => item === color.hex)) {
      toast.error("You've already pick this color");
      return;
    }
    setSelectedColors([...selectedColors, color.hex]);
  };

  useEffect(() => {
    setForm({
      ...form,
      colors: selectedColors,
    });
  }, [selectedColors]);

  const removeColor = (color) => {
    const newColors = selectedColors.filter((item) => item !== color);
    setSelectedColors(newColors);
  };

  return (
    <div className="space-y-3">
      <label className="font-semibold text-red-600">Colors *</label>
      <CirclePicker
        width="100%"
        circleSize={50}
        colors={defaultColors}
        onChange={changeHandler}
      />
      {selectedColors.length !== 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-2">
          {selectedColors.map((color, index) => (
            <div
              key={index}
              className="flex w-full items-center gap-3 px-2 py-2 border-2 border-gray-300 rounded-full"
            >
              <div
                style={{ backgroundColor: color }}
                className="w-full h-full rounded-full"
              />
              <button type="button" onClick={() => removeColor(color)}>
                <IoIosClose className="text-[50px]" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ColorsSection;
