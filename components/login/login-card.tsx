"use client";
import React from "react";
import Link from "next/link";

import MobileLogin from "./login-by-mobile";
import EmailLogin from "./login-by-email";
import { TabsContent, TabsList, TabsTrigger, Tabs } from "../ui/tabs";

import useTranslation from "next-translate/useTranslation";
import { useRouter } from "next/router";

const LoginCard = () => {
  const { t } = useTranslation("login");
  const { locale } = useRouter();

  return (
    <div className="m-auto  h-auto w-[311px] bg-white  px-0 pb-8  pt-4 shadow-none sm:w-[538px] sm:px-14 sm:pb-4  sm:pt-6 sm:shadow-md ">
      <p className="k-font-medium  size-25px  leading-[47px] tracking-normal text-primary-k-divider-blue">
        {t("title")}
      </p>
      <p className="k-font-regular size-16px leading-30 mb-2 mt-1 h-[34px] font-normal tracking-normal text-secondary-paragraph-txt sm:mb-4">
        {t("sub-title")}
      </p>

      <Tabs
        defaultValue="phone"
        className="w-full"
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <TabsList className="w-full justify-between">
          <TabsTrigger
            value="phone"
            className="k-font-light size-18px w-full rounded-lg p-2 data-[state=active]:bg-primary-k-blue data-[state=active]:text-white"
          >
            {t("tabs-phone")}
          </TabsTrigger>
          <TabsTrigger
            value="email"
            className="k-font-light size-18px w-full rounded-lg p-2 data-[state=active]:bg-primary-k-blue data-[state=active]:text-white"
          >
            {t("tabs-email")}
          </TabsTrigger>
        </TabsList>
        <TabsContent value="phone">
          <MobileLogin />
        </TabsContent>
        <TabsContent value="email">
          <EmailLogin />
        </TabsContent>
      </Tabs>
      <p className="k-font-light  size-16px mt-4 text-center font-normal leading-[26px] tracking-normal text-secondary-k-black-txt">
        {t("you-dont-have-account")}
        <Link href="/registration" className="text-secondary-blue-link">
          {t("create-account")}
        </Link>
      </p>
    </div>
  );
};

export default LoginCard;
