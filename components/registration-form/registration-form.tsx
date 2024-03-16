"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import classNames from "classnames";
import PrimaryButton from "@/components/shared-components/buttons/primary-button";
 
import NameInput from "@/components/shared-components/inputs/name-input";
import PhoneInput from "@/components/shared-components/inputs/phone-input";
import EmailInput from "@/components/shared-components/inputs/email-input";
import PasswordInputs from "@/components/shared-components/inputs/password-input";
import ConfirmPassword from "@/components/shared-components/inputs/confirm-password-input";
import yupUserSchema from "./yup-schema";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";
import { signUp } from "@/api/auth/signup";

const RegistrationForm = () => {
  const { t } = useTranslation("registration");
  const router = useRouter();

  const userSchema = yupUserSchema(t);

  const formik: any = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema: userSchema,
    onSubmit: (values, { resetForm }) => submitForm(values, resetForm),
    validateOnChange: false,
    validateOnMount: true,
  });

  const [isDisabled, setIsDisabled] = useState(true);

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

  const submitForm = async (values: any, resetForm: any) => {
    try {
      await signUp(values);
      handleSuccessSubmit(resetForm);
    } catch (error: any) {
      handleFaildSubmit(error);
    }
  };

  const handleSuccessSubmit = (resetForm: any) => {
    resetForm();
    setIsDisabled(true);
    router.push("/otp");
  };
  const handleFaildSubmit = (res: any) => {
    const errorObject = res.payload.errors;
    const errorsToUpdate: any = {};
    for (const fieldName in errorObject) {
      if (errorObject.hasOwnProperty(fieldName)) {
        const fieldErrors = errorObject[fieldName];
        errorsToUpdate[fieldName] = fieldErrors;
      }
    }
    formik.setErrors(errorsToUpdate);
  };

  return (
    <form
      className="m-auto  h-auto w-[311px] bg-white px-0 pb-8 pt-4 shadow-none sm:w-[538px] sm:px-14 sm:pb-4 sm:pt-6 sm:shadow-md"
      onSubmit={formik.handleSubmit}
    >
      <p className="k-font-medium size-25px font-medium leading-[47px] tracking-normal text-primary-k-divider-blue">
        {t("title")}
      </p>

      <p className="k-font-regular size-16px leading-30 mb-2 mt-1 h-[34px] font-normal tracking-normal text-secondary-paragraph-txt sm:mb-4">
        {t("sub-title")}
      </p>

      <fieldset>
        <NameInput formik={formik} t={t} />
      </fieldset>
      <fieldset
        className={classNames("", { "mt-6": !determineInputValidity("name") })}
      >
        <PhoneInput formik={formik} t={t} />
      </fieldset>

      <fieldset
        className={classNames("", { "mt-6": !determineInputValidity("phone") })}
      >
        <EmailInput formik={formik} t={t} />
      </fieldset>

      <fieldset
        className={classNames("", { "mt-6": !determineInputValidity("email") })}
      >
        <PasswordInputs formik={formik} t={t} />
      </fieldset>
      <fieldset>
        <ConfirmPassword formik={formik} t={t} />
      </fieldset>

      <p
        className={classNames(
          "k-font-regular size-14px w-[311px] font-normal leading-[26px] tracking-normal text-secondary-k-black-txt sm:w-[380px]",
          {
            "mt-4": !determineInputValidity("password_confirmation"),
          },
        )}
      >
        {t("terms-conditions-message")}
        <Link href={"/"} className="text-secondary-blue-link">
          {t("terms-conditions-link-message")}
        </Link>
      </p>
      <div className="mt-4 h-[45px]">
        <PrimaryButton
          data_testid="signup-button"
          isDisabled={isDisabled}
          text={t("create-account-button")}
          fontSize={"size-18px"}
        />
      </div>
    </form>
  );
};

export default RegistrationForm;
