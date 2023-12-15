import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdAdd } from "react-icons/md";
import { IoIosClose } from "react-icons/io";

const KeywordsSection = ({ form, setForm, placeholder }) => {
  const [keywords, setKeyWords] = useState([]);
  const [value, setValue] = useState("");

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (!value) {
      toast.error("Type a keyword please!");
      return;
    }

    if (keywords.find((item) => item === value)) {
      toast.error("You've already pick this keyword");
      return;
    }
    setKeyWords([...keywords, value]);
    setValue("");
    toast.success("Keyword added");
  };

  useEffect(() => {
    setForm({
      ...form,
      keywords: keywords,
    });
  }, [keywords]);

  const removeKeyword = (keyword) => {
    const newKeywords = keywords.filter((item) => item !== keyword);
    setKeyWords(newKeywords);
  };

  return (
    <form className="flex flex-col gap-1" onSubmit={submitHandler}>
      <label className="font-semibold">Keywords</label>
      <div className="flex items-center gap-2 rounded-full overflow-hidden">
        <button
          type="submit"
          className="bg-gray-200 border-gray-400 border-1 py-3 px-4 flex items-center gap-2 w-fit"
        >
          <MdAdd />
          Add
        </button>
        <input
          type="text"
          value={value}
          onChange={changeHandler}
          placeholder={placeholder}
          className="placeholder:text-xs border border-gray-200 focus:outline focus:outline-black outline-none py-3 px-4 w-full"
        />
      </div>
      {keywords.length !== 0 && (
        <div className="flex gap-2 flex-wrap mt-3">
          {keywords.map((keyword) => (
            <div
              key={keyword}
              className="rounded-lg bg-gray-200 border-gray-400 border-1 py-1 px-4 flex items-center gap-2 w-fit"
            >
              <span>{keyword}</span>
              <button type="button" onClick={() => removeKeyword(keyword)}>
                <IoIosClose className="text-[40px]" />
              </button>
            </div>
          ))}
        </div>
      )}
    </form>
  );
};

export default KeywordsSection;
