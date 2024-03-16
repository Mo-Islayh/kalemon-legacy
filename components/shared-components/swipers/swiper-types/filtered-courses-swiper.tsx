"use client";
import React from "react";
import Swiper from "../swiper";
import CourseCard from "../../cards/course-card";
import { getCourses } from "@/api/home-page/featured-courses-list";
import CoursesSkeleton from "@/components/shared-components/skeletons/courses-skeleton";
const InstructorsSwiper = ({
  firstCoursesList,
  className,
  category_id,
  breakpoints,
  hideCardButton,
  rows,
  cardClassName,
  startPageApi,
  apiParams,
  loading,
}: any) => {
  return (
    <>
      <Swiper
        apiParams={apiParams}
        startPageApi={startPageApi}
        rows={rows}
        firstDataList={firstCoursesList}
        className={className}
        category_id={category_id}
        Card={CourseCard}
        getDataApi={getCourses}
        breakpoints={breakpoints}
        hideCardButton={hideCardButton}
        paginationType={"circle"}
        cardClassName={cardClassName}
        loading={loading}
        Skeleton={CoursesSkeleton}
      />
    </>
  );
};

export default InstructorsSwiper;
