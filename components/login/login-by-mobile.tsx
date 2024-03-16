import React, { useState, useEffect } from "react";
import PhoneInput from "@/components/shared-components/inputs/phone-input";
import PasswordInput from "@/components/shared-components/inputs/password-input";
import { useFormik } from "formik";
import { object, string } from "yup";
import { isPossiblePhoneNumber, isValidNumber } from "libphonenumber-js";
import classNames from "classnames";
import { login } from "@/api/login/login";

import PrimaryButton from "@/components/shared-components/buttons/primary-button";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
const MobileLogin = () => {
  const { t } = useTranslation("login");
  const router = useRouter();

  const [isDisabled, setIsDisabled] = useState(true);
  const [hideInvalidMessage, setHideInvalidMessage] = useState(false);

  const userSchema = () => {
    let schema = object({
      // @ts-ignore
      phone: string(t("mobile-input-invalid-message"))
        .required("Required")
        .test(
          "valid-phone",
          t("mobile-input-invalid-message"),
          function (value) {
            if (!value) {
              return true;
            }
            let countryCode = this.parent.phone_country?.toUpperCase();
            return (
              isValidNumber(value, countryCode) &&
              isPossiblePhoneNumber(value, countryCode)
            );
          },
        ),
      password: string().required("Required"),
    });

    return schema;
  };

  const formik: any = useFormik({
    initialValues: {
      phone: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values, { resetForm }) => submitForm(values, resetForm),
    validateOnChange: false,
    validateOnMount: true,
  });

  const determineInputValidity = (fieldName: any) => {
    return (
      formik.errors[fieldName] !== "Required" &&
      formik.errors[fieldName] &&
      formik.touched[fieldName]
    );
  };

  useEffect(() => {
    setIsDisabled(!formik.isValid);
  }, [formik.isValid]);

  useEffect(() => {
    return () => {
      formik.resetForm();
      formik.validateForm();
      setIsDisabled(true);
    };
  }, []);

  const submitForm = async (values: any, resetForm: any) => {
    try {
      await login(values);
      handleSuccessSubmit(resetForm);
    } catch (error: any) {
      handleFailedSubmit();
    }
  };

  const handleSuccessSubmit = (resetForm: any) => {
    resetForm();
    setIsDisabled(true);
    router.push("/");
  };
  const handleFailedSubmit = () => {
    setHideInvalidMessage(true);
    formik.setErrors({
      phone: "responseError",
      password: "responseError",
    });
  };

  // to hide the error message when on focus the phone input after faild login
  const hideInvalidMessageAfterRes = () => {
    setHideInvalidMessage(false);
    formik.errors.phone == "responseError" && formik.setErrors({ phone: "" });
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <p
        className={classNames(
          "k-font-regular leading-30 size-16px my-2 h-[30px] font-normal text-secondary-candy-red-err",
          {
            hidden: formik.errors.phone != "responseError",
          },
        )}
      >
        {t("incorrect-credential")}
      </p>
      <fieldset
        className={classNames("", {
          "mt-10": formik.errors.phone != "responseError",
        })}
        onFocus={hideInvalidMessageAfterRes}
      >
        <PhoneInput formik={formik} hideInvalideMessage={hideInvalidMessage} />
      </fieldset>
      <fieldset
        className={classNames("", {
          "mt-6": !determineInputValidity("phone") || hideInvalidMessage,
        })}
      >
        <PasswordInput formik={formik} t={t} hideInvalideMessage={true} />
      </fieldset>
      <p className="k-font-regular size-16px k-font-medium mb-4 mt-4  cursor-pointer text-secondary-blue-link  sm:mt-2">
        {t("forgot-password-?")}
      </p>
      <div className="h-[45px]">
        <PrimaryButton
          data_testid="login-button"
          isDisabled={isDisabled}
          text={t("login-button")}
          fontSize={"size-18px"}
        />
      </div>
    </form>
  );
};

export default MobileLogin;
