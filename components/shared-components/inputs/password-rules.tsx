import React from "react";
import classNames from "classnames";
import useTranslation from "next-translate/useTranslation";

const PasswordRuls = ({ formik, checkPasswordRequirements }: any) => {
  const { t } = useTranslation("registration");
  const passwordRequirements = checkPasswordRequirements();

  return (
    <>
      <div className="leading-30    my-2  h-auto text-base font-normal text-secondary-gray-text ">
        <p className="k-font-regular leading-30 size-16px flex mt-3 mb-3">
          {t("password-rules-title")}
        </p>
        <div
          data-testid="password-input-invalid-message-capital-letter"
          className={classNames("k-font-regular leading-30 size-16px flex", {
            "text-secondary-green-succses":
              formik.values.password && passwordRequirements.hasCapitalLetter,
            "text-secondary-candy-red-err":
              formik.values.password && !passwordRequirements.hasCapitalLetter,
          })}
        >
          <i
            className={classNames("ri-checkbox-circle-line ", {
              "ri-close-circle-line":
                formik.values.password &&
                !passwordRequirements.hasCapitalLetter,
            })}
          ></i>
          <p className="px-1">{t("capital-letter-password-rules-label")}</p>
        </div>
        <div
          className={classNames("k-font-regular leading-30 size-16px flex", {
            "text-secondary-green-succses":
              formik.values.password && passwordRequirements.hasSmallLetter,
            "text-secondary-candy-red-err":
              formik.values.password && !passwordRequirements.hasSmallLetter,
          })}
        >
          <i
            className={classNames("ri-checkbox-circle-line ", {
              "ri-close-circle-line":
                formik.values.password && !passwordRequirements.hasSmallLetter,
            })}
          ></i>
          <p className="px-1">{t("small-letter-password-rules-label")}</p>
        </div>
        <div
          className={classNames("k-font-regular leading-30 size-16px flex", {
            "text-secondary-green-succses":
              formik.values.password && passwordRequirements.hasDigit,
            "text-secondary-candy-red-err":
              formik.values.password && !passwordRequirements.hasDigit,
          })}
        >
          <i
            className={classNames("ri-checkbox-circle-line", {
              "ri-close-circle-line":
                formik.values.password && !passwordRequirements.hasDigit,
            })}
          ></i>
          <p className="px-1">{t("digit-password-rules-label")}</p>
        </div>
        <div
          className={classNames("k-font-regular leading-30 size-16px flex", {
            "text-secondary-green-succses":
              formik.values.password && passwordRequirements.hasSpecialChar,
            "text-secondary-candy-red-err":
              formik.values.password && !passwordRequirements.hasSpecialChar,
          })}
        >
          <i
            className={classNames("ri-checkbox-circle-line", {
              "ri-close-circle-line":
                formik.values.password && !passwordRequirements.hasSpecialChar,
            })}
          ></i>
          <p className="px-1">{t("special-char-password-rules-label")}</p>
        </div>
        <div
          className={classNames("k-font-regular leading-30 size-16px flex", {
            "text-secondary-green-succses":
              formik.values.password && passwordRequirements.isLengthValid,
            "text-secondary-candy-red-err":
              formik.values.password && !passwordRequirements.isLengthValid,
          })}
        >
          <i
            className={classNames("ri-checkbox-circle-line", {
              "ri-close-circle-line":
                formik.values.password && !passwordRequirements.isLengthValid,
            })}
          ></i>
          <p className="px-1">{t("length-password-rules-label")}</p>
        </div>
      </div>
    </>
  );
};

export default PasswordRuls;
