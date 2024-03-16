"use client";
import React from "react";
import Swiper from "../swiper";
import CourseCard from "../../cards/course-card";
import { getCourses } from "@/api/home-page/featured-courses-list";
import CoursesSkeleton from "@/components/shared-components/skeletons/courses-skeleton";
const InstructorsSwiper = ({
  firstCoursesList,
  className,
  apiParams,
  breakpoints,
  hideCardButton,
  loading,
  cardClassName,
}: any) => {
  return (
    <>
      <Swiper
        firstDataList={firstCoursesList}
        className={className}
        apiParams={apiParams}
        Card={CourseCard}
        getDataApi={getCourses}
        breakpoints={breakpoints}
        hideCardButton={hideCardButton}
        loading={loading}
        Skeleton={CoursesSkeleton}
        cardClassName={cardClassName}
      />
    </>
  );
};

export default InstructorsSwiper;
