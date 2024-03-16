"use client";
import React from "react";
import Swiper from "../swiper";
import InstructorCard from "../../cards/instructor-card";
import { getInstructors } from "@/api/home-page/featured-instructors-list";
const InstructorsSwiper = ({
  firstInstructorsList,
  className,
  apiParams,
  breakpoints,
  cardClassName,
}: any) => {
  return (
    <>
      <Swiper
        firstDataList={firstInstructorsList}
        className={className}
        apiParams={apiParams}
        Card={InstructorCard}
        getDataApi={getInstructors}
        breakpoints={breakpoints}
        cardClassName={cardClassName}
        loading={false}
      />
    </>
  );
};

export default InstructorsSwiper;
