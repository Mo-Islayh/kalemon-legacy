import React, { useState, useMemo, useCallback } from "react";
import PasswordRules from "./password-rules";
import classNames from "classnames";
import useTranslation from "next-translate/useTranslation";
import { Input } from "@/components/ui/input";

const PasswordInput = ({ formik, hideInvalideMessage }: any) => {
  const { t } = useTranslation("login");

  const { errors, touched, values, handleBlur, handleChange } = formik;

  const isInvalidInput =
    errors.password !== "Required" && errors.password && touched.password;

  // State
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordRules, setShowPasswordRules] = useState(false);

  // Helper functions
  const checkPasswordRequirements = useCallback(
    (password = values.password) => {
      // Check if the password meets each requirement
      const hasCapitalLetter = /[A-Z]/.test(password);
      const hasSmallLetter = /[a-z]/.test(password);
      const hasDigit = /\d/.test(password);
      const hasSpecialChar = /[@#$%&]/.test(password);
      const isLengthValid = password?.length >= 8;

      return {
        hasCapitalLetter,
        hasSmallLetter,
        hasDigit,
        hasSpecialChar,
        isLengthValid,
      };
    },
    [values.password],
  );

  // When blurred, check if all requirements are met, then hide the password requirements section
  const onBlurPasswordField = useCallback(
    (e: any) => {
      handleBlur(e);

      const getPasswordStatus = checkPasswordRequirements(e.target.value);
      const allRequirementsMet =
        Object.values(getPasswordStatus).every(Boolean);
      setShowPasswordRules(!(!e.target.value || allRequirementsMet));
    },
    [checkPasswordRequirements, handleBlur],
  );

  return (
    <>
      <div
        className={classNames(
          "relative  flex w-full  items-center justify-end",
          {
            "mb-6": !showPasswordRules && !hideInvalideMessage,
          },
        )}
      >
        <Input
          className={classNames(
            "k-font-regular size-18px h-[49px] rounded-[5px] border border-solid !bg-primary-k-white pb-2 pl-2  pr-[13px] pt-[7px] focus:!border focus:!border-primary-k-navey focus:!outline-none",
            {
              " !border-secondary-candy-red-err !bg-secondary-candy-fill-err text-secondary-candy-red-err":
                isInvalidInput,
              "!border-secondary-k-gray-tab": !isInvalidInput,
            },
          )}
          data-testid="password-input"
          name="password"
          type={showPassword ? "text" : "password"}
          placeholder={t("password-input-placeholder")}
          onFocus={() => {
            setShowPasswordRules(true);
          }}
          onBlur={(e) => {
            onBlurPasswordField(e);
          }}
          onChange={handleChange}
          value={values.password}
          autoComplete=""
        />

        <i
          className={classNames(
            "!absolute  cursor-pointer items-center px-4 text-2xl text-primary-k-divider-blue",
            {
              "ri-eye-line": showPassword,
              "ri-eye-off-line": !showPassword,
              "text-secondary-candy-red-err": isInvalidInput,
            },
          )}
          onClick={() => setShowPassword(!showPassword)}
        />
      </div>
      {/* Password requirements */}
      {showPasswordRules && !hideInvalideMessage && (
        <PasswordRules
          formik={formik}
          checkPasswordRequirements={checkPasswordRequirements}
        />
      )}
    </>
  );
};

export default PasswordInput;
