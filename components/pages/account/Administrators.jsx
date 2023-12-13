import { shorterText } from "@/utils/functions";
import Image from "next/image";
import React from "react";
import { GrUserAdmin } from "react-icons/gr";

const Administrators = ({ users, currentUserRoll }) => {
  if (!users || users.length === 0) return "Loading...";

  return (
    <div>
      <h1 className="heading mb-5">Administrators</h1>
      <div className="grid grid-gols-1 lg:grid-cols-2 gap-5">
        {users?.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl p-5 flex items-center justify-between"
          >
            <div className="flex gap-3 items-center">
              <Image
                src={item?.avatar || "/person.jpg"}
                width={50}
                height={50}
                alt={item?.displayName}
                priority
                className="rounded-full"
              />
              <div className="text-sm font-light">
                <p className="uppercase">{shorterText(item.displayName, 10)}</p>
                <p>{shorterText(item.username, 10)}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="bg-gray-100 rounded-xl py-1 px-3 text-xs font-bold text-gray-500 border border-gray-300">
                {item?.roll}
              </p>
              {currentUserRoll === "ADMIN" && (
                <button className="bg-blue-100 rounded-xl py-1 px-3 font-bold text-blue-500 border border-blue-300">
                  <GrUserAdmin />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Administrators;
