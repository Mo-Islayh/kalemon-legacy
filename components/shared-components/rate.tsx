import React from "react";

const Rate = ({ rate }: any) => {
  return (
    <div className="flex bg-primary-k-navey h-full w-full items-center justify-between py-1 px-2 rounded-[20px] overflow-hidden ">
      <p className="text-white size-14px k-font-light ">{rate}</p>
      <i className="text-secondary-yallow-warn ri-star-fill size-14px "></i>
    </div>
  );
};
export default Rate;
