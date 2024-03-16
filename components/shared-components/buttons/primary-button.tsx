import React from "react";
import classNames from "classnames";

export default function PrimaryButton({
  data_testid,
  isDisabled,
  text,
  onClick,
  fontSize,
}: any) {
  return (
    <button
      data-testid={data_testid}
      type="submit"
      className={classNames(
        `k-font-regular h-full  w-full   rounded font-normal text-white ${
          fontSize || "size-14px"
        }   text-center  tracking-normal`,
        {
          "bg-primary-k-disabled": isDisabled,
          "bg-primary-k-divider-blue": !isDisabled,
        },
      )}
      disabled={isDisabled}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
