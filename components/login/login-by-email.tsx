import React, { useState, useEffect } from "react";
import PrimaryButton from "@/components/shared-components/buttons/primary-button";
import EmailInput from "@/components/shared-components/inputs/email-input";
import PasswordInput from "@/components/shared-components/inputs/password-input";
import { useFormik } from "formik";
import { object, string } from "yup";
import classNames from "classnames";
import { login } from "@/api/login/login";
import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const EmailLogin = () => {
  // const
  const { t } = useTranslation("login");

  const router = useRouter();

  // State
  const [isDisabled, setIsDisabled] = useState(true);
  const [hideInvalidMessage, setHideInvalidMessage] = useState(false);

  // yup schema for email
  const userSchema = () => {
    let schema = object({
      email: string()
        .required("Required")
        .email(t("email-input-invalid-message")),
      password: string().required("Required"),
    });

    return schema;
  };

  // Formik initialization
  const formik: any = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema, // Use the Yup schema for validation
    onSubmit: (values, { resetForm }) => submitForm(values, resetForm),
    validateOnChange: false,
    validateOnMount: true,
  });

  // Determine input validity
  const determineInputValidity = (fieldName: any) => {
    return (
      formik.errors[fieldName] !== "Required" &&
      formik.errors[fieldName] &&
      formik.touched[fieldName]
    );
  };

  // Effects
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

  // Register user
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

  // to hide the error message when on focus the email input after faild login
  const hideInvalidMessageAfterRes = () => {
    setHideInvalidMessage(false);
    formik.errors.email == "responseError" && formik.setErrors({ email: "" });
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <p
        className={classNames(
          "k-font-regular leading-30 size-16px my-2 h-[30px] font-normal text-secondary-candy-red-err",
          {
            hidden: formik.errors.email != "responseError",
          },
        )}
      >
        {t("incorrect-credential")}
      </p>
      <fieldset
        className={classNames("", {
          "mt-10": formik.errors.email != "responseError",
        })}
        onFocus={hideInvalidMessageAfterRes}
      >
        <EmailInput
          formik={formik}
          t={t}
          hideInvalideMessage={hideInvalidMessage}
        />
      </fieldset>
      <fieldset
        className={classNames("", {
          "mt-6": !determineInputValidity("email") || hideInvalidMessage,
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

export default EmailLogin;
