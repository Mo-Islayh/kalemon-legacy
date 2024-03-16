"use client";
import React from "react";
import useTranslation from "next-translate/useTranslation";
import InstructorsSwiper from "@/components/shared-components/swipers/swiper-types/instructors-swiper";

const FeaturedInstructorsList = ({ firstInstructorsList, className }: any) => {
  const { t } = useTranslation("home-page");

  return (
    <div className={className}>
      <p className="size-40px k-font-bold h-20 text-secondary-k-black-txt">
        {t("professional-instructors-list")}
      </p>
      <p className="size-20px k-font-light mt-1 w-11/12 text-secondary-k-black-txt xl:w-10/12">
        {t("our-instructors-stand-out")}
      </p>
      <div className="mt-10 h-[500px]">
        <InstructorsSwiper
          className="h-full"
          cardClassName={"h-[400px]"}
          firstInstructorsList={firstInstructorsList}
          breakpoints={{
            1240: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
          }}
        />
      </div>
    </div>
  );
};
export default FeaturedInstructorsList;
