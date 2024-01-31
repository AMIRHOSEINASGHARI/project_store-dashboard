import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { IoIosClose } from "react-icons/io";

const KeywordsSection = ({ form, setForm, placeholder }) => {
  const [keywords, setKeyWords] = useState(form.keywords);
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
      <div className="flex flex-col gap-2">
        <input
          type="text"
          value={value}
          onChange={changeHandler}
          placeholder={placeholder}
          className="input1 cursor-pointer"
        />
        <button
          type="submit"
          className="rounded-lg border py-[8px] px-[14px] text-sm w-fit flex items-center"
        >
          Add
        </button>
      </div>
      {keywords.length !== 0 && (
        <div className="flex gap-2 flex-wrap mt-3">
          {keywords.map((keyword) => (
            <button
              key={keyword}
              onClick={() => removeKeyword(keyword)}
              className="flex items-center gap-2 border bg-gray-50 rounded-xl text-[12px] font-light py-1 pl-3 pr-2"
            >
              <span>{keyword}</span>
              <div>
                <IoIosClose className="text-[20px]" />
              </div>
            </button>
          ))}
        </div>
      )}
    </form>
  );
};

export default KeywordsSection;
