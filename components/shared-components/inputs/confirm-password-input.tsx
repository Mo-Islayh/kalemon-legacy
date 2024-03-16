import React, { useState } from "react";
import classNames from "classnames";
import { Input } from "@/components/ui/input";

const ConfirmPassword = ({ formik, t, hideInvalideMessage }: any) => {
  const { errors, touched, values, handleBlur, handleChange } = formik;

  const isInvalidInput =
    errors.password_confirmation !== "Required" &&
    errors.password_confirmation &&
    touched.password_confirmation;

  // State
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  return (
    <>
      <div className="relative  flex w-full  items-center justify-end">
        <Input
          autoComplete=""
          data-testid="confirm-password-input"
          type={showConfirmedPassword ? "text" : "password"}
          name="password_confirmation"
          className={classNames(
            "k-font-regular size-18px h-[49px]  rounded-[5px] border   border-solid !bg-primary-k-white pb-2 pl-2 pr-[13px] pt-[7px] focus:!border focus:!border-primary-k-navey focus:!outline-none",
            {
              " !border-secondary-candy-red-err !bg-secondary-candy-fill-err text-secondary-candy-red-err":
                isInvalidInput,
              "!border-secondary-k-gray-tab": !isInvalidInput,
            },
          )}
          placeholder={t("confirm-password-input-placeholder")}
          onBlur={handleBlur}
          onChange={handleChange}
          value={values.password_confirmation}
        />
        <i
          className={classNames(
            "!absolute cursor-pointer items-center px-4 text-2xl text-primary-k-divider-blue",
            {
              "ri-eye-line cursor-pointer": showConfirmedPassword,
              "ri-eye-off-line cursor-pointer": !showConfirmedPassword,
              "text-secondary-candy-red-err": isInvalidInput,
            },
          )}
          onClick={() => setShowConfirmedPassword(!showConfirmedPassword)}
        />
      </div>
      {isInvalidInput && !hideInvalideMessage && (
        <p
          data-testid="confirm-password-input-invalid-message"
          className="k-font-regular leading-30 size-16px  my-2 h-[30px] font-normal text-secondary-candy-red-err"
        >
          {formik.errors.password_confirmation}
        </p>
      )}
    </>
  );
};

export default ConfirmPassword;
