import React from "react";
import useTranslation from "next-translate/useTranslation";
import TestimonialsSwiper from "@/components/shared-components/swipers/swiper-types/testimonial-swiper";

const TestimonialsList = ({ firstTestimonialsList, className }: any) => {
  const { t } = useTranslation("home-page");

  return (
    <div className={className}>
      <p className="size-40px k-font-bold h-20 text-secondary-k-black-txt">
        {t("student-reviews-and-experiences")}
      </p>

      <div className="mt-10  h-[500px]">
        <TestimonialsSwiper
          className="h-full"
          firstTestimonialsList={firstTestimonialsList}
          breakpoints={{
            1240: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
        />
      </div>
    </div>
  );
};
export default TestimonialsList;
