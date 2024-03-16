"use client";
import React from "react";
import Swiper from "../swiper";
import InstructorsCard from "../../cards/instructor-card";
import { getInstructors } from "@/api/home-page/featured-instructors-list";
import InstructorSkeleton from "@/components/shared-components/skeletons/instructor-skeleton";
const InstructorsSwiper = ({
  firstInstructorsList,
  className,
  apiParams,
  breakpoints,
  rows,
  cardClassName,
  startPageApi,
  loading,
}: any) => {
  return (
    <>
      <Swiper
        startPageApi={startPageApi}
        rows={rows}
        firstDataList={firstInstructorsList}
        className={className}
        apiParams={apiParams}
        Card={InstructorsCard}
        getDataApi={getInstructors}
        breakpoints={breakpoints}
        paginationType={"circle"}
        cardClassName={cardClassName}
        loading={loading}
        Skeleton={InstructorSkeleton}
      />
    </>
  );
};

export default InstructorsSwiper;
