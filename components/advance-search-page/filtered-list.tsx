"use client";
import React, { useContext } from "react";
import useTranslation from "next-translate/useTranslation";
import Filter from "./filter";
import { advanceSearchContext } from "./advance-search-context";
import classNames from "classnames";
import dynamic from "next/dynamic";

const AdvanceFilter = dynamic(() => import("./advance-filter"));
const AdvanceSearchSwiper = dynamic(
  () =>
    import(
      "@/components/shared-components/swipers/swiper-types/advance-search-swiper"
    ),
);

const FilteredInstructorsList = ({
  firstFilteredList,
  defaultFilteredBy,
  coursesLevels,
}: any) => {
  // const
  const { t } = useTranslation("advance-search");
  // state
  const { filteredData, params, showAdvanceFilter, loading } =
    useContext(advanceSearchContext);
  const apiParams = params ? params : defaultFilteredBy;
  const initialFilteredData = filteredData ? filteredData : firstFilteredList;

  return (
    <>
      <h1 className="size-40px k-font-bold mt-12  h-16 text-secondary-k-black-txt">
        {t("title")}
      </h1>
      <section className="mt-12 flex h-12 items-center justify-between">
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
          <AdvanceSearchSwiper
            loading={loading}
            apiParams={apiParams}
            className={"mb-4 w-[100%] "}
            cardClassName={"border-b border-secondary-k-gray-tab py-[3%]"}
            firstCardInViewClass={"!pt-0"}
            lastCardInViewClass={"!border-none"}
            hideCardButton={true}
            rows={5}
            firstFilteredList={initialFilteredData}
            breakpoints={{
              768: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              1024: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
              1240: {
                slidesPerView: 1,
                slidesPerGroup: 1,
              },
            }}
          />
        </div>
      </section>
    </>
  );
};
export default React.memo(FilteredInstructorsList);
