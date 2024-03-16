import dynamic from "next/dynamic";

import { InferGetServerSidePropsType } from "next";
import {
  getCourses,
  getCoursesCategories,
} from "@/api/home-page/featured-courses-list";
import { getInstructors } from "@/api/home-page/featured-instructors-list";
import { getTestimonials } from "@/api/testimonials/testimonials";
import HeroSection from "@/components/home-page/hero-section";
import Image from "next/image";

const FeaturedCourseList = dynamic(
  () => import("@/components/home-page/featured-course-list"),
);
const FeaturedInstructorsList = dynamic(
  () => import("@/components/home-page/featured-instructors-list"),
);
const TestimonialsList = dynamic(
  () => import("@/components/home-page/testimonials-list"),
);
const BookingOnlineSission = dynamic(
  () => import("@/components/shared-components/booking-online-sission"),
);
const BecomeInstructorBanner = dynamic(
  () => import("@/components/shared-components/become-instructor-banner"),
);

export const getServerSideProps = async () => {
  const categories = await getCoursesCategories();
  const firstCoursesList = await getCourses({
    category_id: categories?.data[0]?.id,
    page: 1,
  });

  const firstInstructorsList = await getInstructors({
    page: 1,
  });

  const firstTestimonialsList = await getTestimonials({
    page: 1,
  });

  console.log(firstInstructorsList.data)

  return {
    props: {
      categories,
      firstCoursesList,
      firstInstructorsList,
      firstTestimonialsList,
    },
  };
};

type THome = InferGetServerSidePropsType<typeof getServerSideProps>;

export default function Home({
  categories,
  firstCoursesList,
  firstInstructorsList,
  firstTestimonialsList,
}: THome) {
  return (
    <>
      <div className="w-full">
        <section className="mt-20 ">
          <HeroSection />
        </section>
        <section className="mx-auto mt-10 h-[920px] w-[85%] max-w-[1230px]">
          <FeaturedCourseList
            categories={categories}
            firstCoursesList={firstCoursesList}
          />
        </section>
        <section className="mx-auto mt-12 w-[83%] max-w-[1200px] ">
          <BookingOnlineSission />
        </section>
        <section className="mt-10 h-[785px] bg-primary-k-white-auth pb-6 pt-12 ">
          <FeaturedInstructorsList
            firstInstructorsList={firstInstructorsList}
            className={"mx-auto h-full w-[83%] max-w-[1200px]"}
          />
        </section>

        {firstTestimonialsList.data.length > 0 && (
          <section className="mx-auto mt-28 h-[588px] w-[83%] max-w-[1200px] ">
            <TestimonialsList firstTestimonialsList={firstTestimonialsList} />
          </section>
        )}
        <section className="mx-auto mt-16 h-[300px] w-[83%] max-w-[1200px] xl:h-[350px] 2xl:h-[452px] ">
          <BecomeInstructorBanner />
        </section>
      </div>
    </>
  );
}

const Testing = () => {
  return (
    <>
      <div>
        <Image
          src={
            "/assets/images/cheerful-bearded-caucasian-male-with-gentle-smile-dressed-casual-outfit-shows-you-direction-nice-place-indicates-with-thumb-aside.png"
          }
          width={150}
          height={150}
          className="aspect-squar  "
          alt="advance search card"
          priority
        />
      </div>
    </>
  );
};
