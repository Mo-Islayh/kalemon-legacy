"use client";
import React, { useContext } from "react";
import CollapseRatingSection from "../shared-components/collapses/collapse-rating-section";
import CollapseCourseLevelSection from "../shared-components/collapses/collapse-course-level-section";
import CollapseCourseDurationSection from "../shared-components/collapses/collapse-course-duration-section";
import CollapsePriceSection from "../shared-components/collapses/collapse-price-section";
import { coursesContext } from "./courses-context";
import useTranslation from "next-translate/useTranslation";

const AdvanceFilter = ({ coursesLevels }: any) => {
  const { t } = useTranslation("advance-search");
  const {
    storeDurationValue,
    setSelectedCheckboxes,
    storeMultiRangeSlider,
    setSelectedRadio,
  } = useContext(coursesContext);

  return (
    <>
      <section className=" w-full mb-6">
        <CollapseRatingSection
          title={t("course-rating")}
          radioName={"course_review"}
          setSelectedRadio={setSelectedRadio}
        />
      </section>
      <section className=" w-full mb-6">
        <CollapseCourseLevelSection
          coursesLevels={coursesLevels}
          setSelectedCheckboxes={setSelectedCheckboxes}
        />
      </section>
      <section className=" w-full mb-6">
        <CollapsePriceSection storeMultiRangeSlider={storeMultiRangeSlider} />
      </section>
      <section className=" w-full mb-6">
        <CollapseCourseDurationSection
          storeDurationValue={storeDurationValue}
        />
      </section>
    </>
  );
};
export default AdvanceFilter;
