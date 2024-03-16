import React from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { Button } from "../ui/button";

export default function socialMediaRegistrationSection({ t }: any) {
  return (
    <>
      <section className=" max-sm:w-[311px] h-[34px] mt-4  flex items-center justify-between">
        <hr className="border-secondary-gray-txt w-[183px] max-sm:w-[77px]" />

        <p className="text-secondary-paragraph-txt max-sm:hidden">
          {t("devider-line-message-large-view")}
        </p>

        <p className="text-secondary-paragraph-txt sm:hidden">
          {t("devider-line-message-small-view")}
        </p>

        <hr className="border-secondary-gray-txt w-[183px] max-sm:w-[77px]" />
      </section>

      <section className="max-sm:w-[311px] h-[45px] flex justify-between mt-4">
        <Button
          onClick={() => signIn("google")}
          type="button"
          className="w-[204px] max-sm:w-[143px] h-full bg-primary-k-divider-blue rounded text-white font-normal text-base leading-9 tracking-normal  text-center"
        >
          <p className="sm:hidden">
            {t("signup-by-google-button-small-view")}
          </p>
          <p className="max-sm:hidden">
            {t("signup-by-google-button-large-view")}
          </p>
        </Button>

        <Button
          type="button"
          className="w-[204px] max-sm:w-[143px] h-full bg-primary-k-divider-blue rounded text-white font-normal text-base leading-9 tracking-normal  text-center"
        >
          <p className="sm:hidden">
            {t("signup-by-apple-button-small-view")}
          </p>
          <p className="max-sm:hidden">
            {t("signup-by-apple-button-large-view")}
          </p>
        </Button>
      </section>

      <p className="mt-4    h-[30px]  text-center text-sm font-normal leading-[26px] tracking-normal text-secondary-k-black-txt">
        {t("did-you-have-account-label")}
        <Link href="/login" className="text-secondary-blue-link">
          {t("sign-in-label")}
        </Link>
      </p>
    </>
  );
}
