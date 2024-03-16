"use client";
import React from "react";
import Swiper from "../swiper";
import TestimonialsCard from "../../cards/testimonial-card";
import { getTestimonials } from "@/api/testimonials/testimonials";
const TestimoniasSwiper = ({
  firstTestimonialsList,
  className,
  apiParams,
  breakpoints,
  hideCardButton,
}: any) => {
  return (
    <>
      <Swiper
        firstDataList={firstTestimonialsList}
        className={className}
        apiParams={apiParams}
        Card={TestimonialsCard}
        getDataApi={getTestimonials}
        breakpoints={breakpoints}
        hideCardButton={hideCardButton}
      />
    </>
  );
};

export default TestimoniasSwiper;
