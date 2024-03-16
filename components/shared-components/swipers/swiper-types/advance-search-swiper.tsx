"use client";
import React from "react";
import Swiper from "../swiper";
import AdvanceSearchCard from "../../cards/advance-search-card";
import { advanceSearch } from "@/api/advance-search-page/advance-search";
import AdvanceSearchSkeleton from "@/components/shared-components/skeletons/advance-search-skeleton";
const InstructorsSwiper = ({
  firstFilteredList,
  className,
  apiParams,
  breakpoints,
  rows,
  cardClassName,
  firstCardInViewClass,
  lastCardInViewClass,
  loading,
}: any) => {
  return (
    <>
      <Swiper
        firstDataList={firstFilteredList}
        className={className}
        apiParams={apiParams}
        Card={AdvanceSearchCard}
        getDataApi={advanceSearch}
        rows={rows}
        breakpoints={breakpoints}
        cardClassName={cardClassName}
        firstCardInViewClass={firstCardInViewClass}
        lastCardInViewClass={lastCardInViewClass}
        loading={loading}
        Skeleton={AdvanceSearchSkeleton}
      />
    </>
  );
};

export default InstructorsSwiper;
