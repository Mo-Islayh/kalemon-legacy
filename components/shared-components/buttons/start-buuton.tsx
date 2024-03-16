import React from "react";

export default function StartBuuton({ text }: { text: string }) {
  return (
    <>
      <button className="k-font-bold lg:size-16px  size-14px hidden h-full w-full rounded-[20px]   bg-white   text-center text-primary-k-navey sm:block">
        {text}
      </button>
      <button className="k-font-light mt-2.5 block h-full  w-full rounded-[20px] bg-secondary-green-succses text-center text-base  text-white sm:hidden">
        {text}
      </button>
    </>
  );
}
