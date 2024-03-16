import React from "react";

interface Props {
  text: string;
}

export default function LiveSessionButton({ text }: Props) {
  return (
    <button className=" size-18px k-font-light flex h-full w-full items-center  justify-center whitespace-nowrap  rounded-3xl bg-secondary-yallow-warn  px-5  text-primary-k-navey">
      {text}
    </button>
  );
}
