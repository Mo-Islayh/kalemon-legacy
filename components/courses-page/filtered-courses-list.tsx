"use client";
import React, { useContext } from "react";
import { coursesContext } from "./courses-context";
import classNames from "classnames";
import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";

const Filter = dynamic(() => import("./filter"));
const AdvanceFilter = dynamic(() => import("./advance-filter"));
const FilteredCoursesSwiper = dynamic(
  () =>
    import(
      "@/components/shared-components/swipers/swiper-types/filtered-courses-swiper"
    ),
);

const FilteredCoursesList = ({
  firstCoursesList,
  defaultFilteredBy,
  coursesLevels,
}: any) => {
  const { t } = useTranslation("courses");
  const { filteredCourses, params, showAdvanceFilter, loading } =
    useContext(coursesContext);
  const apiParams = params ? params : defaultFilteredBy;
  const initialCoursesList = filteredCourses
    ? filteredCourses
    : firstCoursesList;

  return (
    <>
      <h2 className="size-28px k-font-medium mt-12  h-16 text-secondary-k-black-txt">
        {t("sec-title")}
      </h2>
      <section className="flex h-12 items-center justify-between">
        <Filter />
      </section>
      <section
        className={classNames("mt-10", {
          "flex justify-between": showAdvanceFilter,
        })}
      >
        {showAdvanceFilter && (
          <div className={"!w-[23%] !basis-auto"}>
            <section>
              <AdvanceFilter coursesLevels={coursesLevels} />
            </section>
          </div>
        )}

        <div
          className={classNames("", {
            "w-[74%]": showAdvanceFilter,
            "w-100%": !showAdvanceFilter,
          })}
        >
          <FilteredCoursesSwiper
            loading={loading}
            apiParams={apiParams}
            startPageApi={2}
            className={"mb-4"}
            cardClassName={"h-[450px] mb-6"}
            hideCardButton={true}
            rows={4}
            firstCoursesList={initialCoursesList}
            breakpoints={{
              1024: {
                slidesPerView: showAdvanceFilter ? 2 : 3,
                slidesPerGroup: showAdvanceFilter ? 2 : 3,
              },
              1240: {
                slidesPerView: showAdvanceFilter ? 3 : 4,
                slidesPerGroup: showAdvanceFilter ? 3 : 4,
              },
            }}
          />
        </div>
      </section>
    </>
  );
};
export default FilteredCoursesList;
