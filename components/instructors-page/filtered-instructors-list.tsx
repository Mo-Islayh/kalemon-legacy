"use client";
import React, { useContext } from "react";
import Filter from "./filter";
import { instructorsContext } from "./instructors-context";
import useTranslation from "next-translate/useTranslation";
import dynamic from "next/dynamic";

const FilteredInstructorsSwiper = dynamic(
  () =>
    import(
      "@/components/shared-components/swipers/swiper-types/filtered-instructors-swiper"
    ),
  {},
);

const FilteredInstructorsList = ({
  firstInstructorsList,
  defaultFilteredBy,
}: any) => {
  const { t } = useTranslation("instructors");
  const { filteredInstructors, params, loading } =
    useContext(instructorsContext);
  const apiParams = params ? params : defaultFilteredBy;
  const initialInstructorsList = filteredInstructors
    ? filteredInstructors
    : firstInstructorsList;

  return (
    <>
      <h2 className="size-28px k-font-medium mt-12  h-16 text-secondary-k-black-txt">
        {t("title")}
      </h2>
      <section className="flex h-20 items-center justify-between">
        <Filter />
      </section>
      <section className="mt-10">
        <FilteredInstructorsSwiper
          apiParams={apiParams}
          startPageApi={2}
          className={"mb-4"}
          cardClassName={"h-[400px] mb-6"}
          hideCardButton={true}
          rows={3}
          firstInstructorsList={initialInstructorsList}
          breakpoints={{
            1240: {
              slidesPerView: 5,
              slidesPerGroup: 5,
            },
          }}
          loading={loading}
        />
      </section>
    </>
  );
};
export default FilteredInstructorsList;
