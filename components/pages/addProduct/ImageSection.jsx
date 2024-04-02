import { icons } from "@/constants";
import { resizeFile } from "@/utils/functions";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

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
    <div className="w-full rounded-3xl overflow-hidden hover:bg-gray-100 transition-all duration-200 ease-in-out">
      <div className="relative w-full flex items-center flex-col text-gray-500 text-sm">
        <label className="w-full border-2 border-dashed rounded-3xl min-h-[200px] lg:min-h-[300px] flex flex-col md:flex-row items-center justify-center gap-5 p-3 text-center">
          {!form?.image && (
            <>
              {/* <AiOutlineFolderAdd className="text-4xl text-blue-500" />
              <span>Drag and Drop or tap here to upload a Photo</span>
              <span className="text-white rounded-full font-semibold bg-blue-500 py-2 px-5 mt-2">
                Images less than 10MB
              </span> */}
              <div className="bg-gray-200 rounded-full w-[70px] h-[70px] text-[30px] flex items-center justify-center">
                {icons.upload}
              </div>
              <div>
                <p className="md:flex font-semibold text-[20px]">
                  Click to upload
                </p>
                <p>(JPG, PNG, maximum 2MB 400x400)</p>
              </div>
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
    </div>
  );
};

export default ImageSection;
