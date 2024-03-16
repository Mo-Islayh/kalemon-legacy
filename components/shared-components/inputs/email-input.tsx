import React from "react";
import classNames from "classnames";
import { Input } from "@/components/ui/input";

const EmailInput = ({ formik, t, hideInvalideMessage }: any) => {
  const { errors, touched, values, handleBlur, handleChange } = formik;
  const isInvalidInput =
    errors.email && touched.email && errors.email !== "Required";

  return (
    <React.Fragment>
      <Input
        autoComplete=""
        data-testid="email-input"
        name="email"
        type="text"
        className={classNames(
          "k-font-regular size-18px h-[49px]  rounded-[5px] border border-solid !bg-primary-k-white pb-2 pl-2  pr-[13px] pt-[7px] focus:!border focus:!border-primary-k-navey focus:!outline-none",
          {
            " !border-secondary-candy-red-err !bg-secondary-candy-fill-err text-secondary-candy-red-err":
              isInvalidInput,
            "!border-secondary-k-gray-tab": !isInvalidInput,
          },
        )}
        placeholder={t("email-input-placeholder")}
        onBlur={handleBlur}
        onChange={handleChange}
        value={values.email}
      />
      {isInvalidInput && !hideInvalideMessage && (
        <p
          data-testid="email-input-invalid-message"
          className="k-font-regular leading-30 size-16px  my-2 h-[30px] font-normal text-secondary-candy-red-err"
        >
          {errors.email}
        </p>
      )}
    </React.Fragment>
  );
};

export default EmailInput;
