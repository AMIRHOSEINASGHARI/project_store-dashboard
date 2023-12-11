"use client";

import { Oval } from "react-loader-spinner";

const Loader = ({ h, w, color }) => {
  return (
    <>
      <Oval
        height={h || 50}
        width={w || 50}
        color={color || "#000"}
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </>
  );
};

export default Loader;
