import React from "react";
import Image from "next/image";
import useTranslation from "next-translate/useTranslation";

const HeroSection = () => {
  const { t } = useTranslation("home-page");

  return (
    <>
      <div className="m-auto  flex w-[88%] max-w-[1259px] justify-between">
        <div className="h-full w-2/5">
          <p className="text-primary-k-navy k-font-bold size-58px mt-[25%]">
            {t("students-trust-us")}
          </p>
          <p className="k-font-light size-20px mt-[9%] text-secondary-gray-text">
            {t("new-learning-opportunities")}
          </p>
        </div>
        <Image
          alt="hero section image"
          src="/assets/images/hero-section-image.png"
          width={697}
          height={608}
          className="h-full  w-1/2 object-contain"
          priority
        />
      </div>
      <div className="h-56 bg-primary-k-white-auth	 xl:h-[264px]">
        <div className="m-auto flex  h-full w-3/4 max-w-[1049px] flex-wrap items-center justify-between gap-6">
          <div className="flex flex-col items-center">
            <p className="size-58px k-font-bold text-primary-k-divider-blue">
              100+
            </p>
            <p className="k-font-light size-16px text-secondary-k-black-txt">
              {t("top-partners")}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="size-58px k-font-bold text-primary-k-divider-blue">
              15
            </p>
            <p className="k-font-light size-16px text-secondary-k-black-txt">
              {t("world-countries")}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="size-58px k-font-bold text-primary-k-divider-blue">
              150000
            </p>
            <p className="k-font-light size-16px text-secondary-k-black-txt">
              {t("monthly-visitors")}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className="size-58px k-font-bold text-primary-k-divider-blue">
              15000
            </p>
            <p className="k-font-light size-16px text-secondary-k-black-txt">
              {t("happy-customers")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
