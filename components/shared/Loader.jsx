"use client";

import { TailSpin } from "react-loader-spinner";

const Loader = ({ h, w, color }) => {
  return (
    <>
      <TailSpin
        visible={true}
        height={h || 50}
        width={w || 50}
        color={color || "#000"}
        ariaLabel="tail-spin-loading"
        radius="1"
      />
    </>
  );
};

export default Loader;
