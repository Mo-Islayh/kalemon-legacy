"use client";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import PrimaryButton from "@/components/shared-components/buttons/primary-button";
const RegistrationForm = () => {
  // const
  const { t } = useTranslation("otp");

  // Render
  return (
    <form className="m-auto h-auto  w-[311px] bg-white px-0  pb-8 pt-4  shadow-none sm:w-[538px] sm:px-14 sm:pb-8 sm:pt-8 sm:shadow-md ">
      {/* Title  */}

      <p className="k-font-medium size-25px  mb-10 h-[50px] leading-[47px] tracking-normal text-primary-k-divider-blue sm:mb-4">
        {t("register-successful")}
      </p>

      {/* successful icon */}
      <i className="ri-checkbox-circle-line mb-10 flex h-32 w-full items-center justify-center text-[108px] text-secondary-green-succses sm:mb-8 sm:h-[118px] sm:text-8xl"></i>

      {/* start button */}
      <div className="h-[45px] w-full">
        <PrimaryButton text={t("start-button")} fontSize={"size-18px"} />
      </div>
    </form>
  );
};
export default RegistrationForm;
