import Image from "next/image";
import React from "react";
import StartBuuton from "./buttons/start-buuton";
import useTranslation from "next-translate/useTranslation";

const BecomeInstructorBanner = () => {
  const { t } = useTranslation("common");

  return (
    <>
      <div className="relative flex h-3/4 flex-row-reverse items-end sm:h-full ">
        <div className="flex h-5/6 w-full rounded-[20px] bg-primary-k-divider-blue">
          <section className="hidden w-3/4 px-20 py-5 sm:flex sm:flex-col sm:justify-evenly 2xl:w-2/3">
            <p className="size-40px k-font-bold text-white">
              {t("be-instructor")}
            </p>
            <p className="size-20px k-font-light max-h-[1/3] overflow-hidden text-white">
              {t("first-description")}
              <br />
              {t("second-description")}
            </p>
            <div className="hidden h-[15%] w-2/5 sm:block xl:h-[13%]  ">
              <StartBuuton text={t("start-button")} />
            </div>
          </section>
        </div>
        <Image
          className="absolute h-full w-full border-t border-white object-contain sm:w-auto"
          src={
            "/assets/images/cheerful-bearded-caucasian-male-with-gentle-smile-dressed-casual-outfit-shows-you-direction-nice-place-indicates-with-thumb-aside.png"
          }
          width={423}
          height={453}
          alt="become an instructor"
          loading="lazy"
        />
      </div>
      <div className="h-[13%] w-full sm:hidden">
        <StartBuuton text={t("start-button")} />
      </div>
    </>
  );
};

export default BecomeInstructorBanner;
