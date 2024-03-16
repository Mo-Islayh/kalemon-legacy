import React from "react";
import classNames from "classnames";
import { Input } from "@/components/ui/input";

const NameInput = ({ formik, t, hideInvalideMessage }: any) => {
  // const
  const { errors, touched, values, handleBlur, handleChange } = formik;
  const isInvalidInput =
    errors.name && touched.name && errors.name !== "Required";

  return (
    <>
      <Input
        data-testid="name-input"
        aria-label="Name"
        type="text"
        className={classNames(
          "k-font-regular size-18px h-[49px] rounded-[5px] border   border-solid !bg-primary-k-white pb-2 pl-2  pr-[13px] pt-[7px] focus:!border focus:!border-primary-k-navey focus:!outline-none",
          {
            " !border-secondary-candy-red-err !bg-secondary-candy-fill-err text-secondary-candy-red-err":
              isInvalidInput,
            "!border-secondary-k-gray-tab": !isInvalidInput,
          },
        )}
        placeholder={t("name-input-placeholder")}
        name="name"
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.name}
        autoComplete=""
      />

      {isInvalidInput && !hideInvalideMessage && (
        <p
          data-testid="name-input-invalid-message"
          className="k-font-regular leading-30 size-16px  my-2 h-[30px] font-normal text-secondary-candy-red-err"
        >
          {errors.name}
        </p>
      )}
    </>
  );
};

export default NameInput;
