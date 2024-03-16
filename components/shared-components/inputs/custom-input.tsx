import React from "react";

export default function CustomInput({
  placeholder,
  data_testid,
  name,
  type,
  autoFocus,
}: any) {
  return (
    <input
      autoFocus={autoFocus}
      data-testid={data_testid}
      name={name}
      type={type}
      // @ts-ignore
      containerprops={{
        className: " h-full rounded-[5px] flex items-center flex-row-reverse  ",
      }}
      className="k-font-light px-7 rounded-[5px]  border border-solid border-secondary-k-gray-tab  pt-7px  pb-2 min-w-0  text-lg focus:!border focus:!border-primary-k-navey focus:!outline-none size-20px !text-secondary-gray-text  h-full w-full !bg-primary-k-white"
      placeholder={placeholder}
      labelprops={{
        className: "hidden",
      }}
      autoComplete=""
    />
  );
}
