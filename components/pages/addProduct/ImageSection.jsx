import { resizeFile } from "@/utils/functions";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";
import { AiOutlineFolderAdd } from "react-icons/ai";
import { FiTrash } from "react-icons/fi";

const ImageSection = ({ form, setForm, type }) => {
  const handleChangeImage = async (e) => {
    e.preventDefault();

    const file = e.target.files[0];

    if (!file) return;
    if (!file.type.includes("image/"))
      return toast.error("Please an image file!");

    const image = await resizeFile(file);
    setForm({
      ...form,
      image: image,
    });
  };

  return (
    <div>
      <div className="relative w-full flex items-center flex-col text-gray-500 text-sm">
        <label className="w-full border-2 border-dashed min-h-[200px] lg:min-h-[300px] flex flex-col items-center justify-center p-3 text-center">
          {!form?.image && (
            <>
              <AiOutlineFolderAdd className="text-4xl text-gray-700" />
              <span>Drag and Drop or tap here to upload a Photo</span>
              <span className="text-purple-600 font-semibold bg-purple-50 py-1 px-3">
                Images less than 10MB
              </span>
            </>
          )}
        </label>
        <input
          type="file"
          required={type === "createProduct" || type === "createBlog"}
          accept="image/*"
          className="absolute inset-0 opacity-0 cursor-pointer z-10"
          onChange={handleChangeImage}
        />
        {form?.image && (
          <Image
            className="object-contain"
            src={form?.image}
            fill
            alt="project image"
          />
        )}
      </div>
      {form?.image && (
        <div className="flex items-center justify-center w-full">
          <div
            onClick={() => setForm({ ...form, image: "" })}
            className=" p-4 w-fit rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200 transition duration-100 ease-in-out"
          >
            <FiTrash />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageSection;
