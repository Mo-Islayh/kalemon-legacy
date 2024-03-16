import { getCoursesLevels } from "@/api/advance-search-page/advance-search";
import {
  getCourses,
  getCoursesCategories,
} from "@/api/home-page/featured-courses-list";
import CoursesState from "@/components/courses-page/courses-context";
import { InferGetServerSidePropsType } from "next";
import dynamic from "next/dynamic";
import React from "react";

const FeaturedCourseList = dynamic(
  () => import("@/components/courses-page/courses-list"),
);
const FilteredCoursesList = dynamic(
  () => import("@/components/courses-page/filtered-courses-list"),
);

export const getServerSideProps = async () => {
  const defaultSortBySelect = "newest";

  const categories = await getCoursesCategories();

  const firstCoursesList = await getCourses({
    category_id: categories?.data[0]?.id,
    page: 1,
  });

  const defaultFilteredBy = { [defaultSortBySelect]: true };

  const firstFilterdcondCoursesList = await getCourses({
    ...defaultFilteredBy,
    page: 1,
  });
  const secondFilterdCoursesListList = await getCourses({
    ...defaultFilteredBy,
    page: 2,
  });

  let initialCoursesList = {};
  if (firstFilterdcondCoursesList && secondFilterdCoursesListList) {
    initialCoursesList = {
      ...secondFilterdCoursesListList,
      data: [
        ...firstFilterdcondCoursesList.data,
        ...secondFilterdCoursesListList.data,
      ],
    };
  }

  const coursesLevels = await getCoursesLevels();

  return {
    props: {
      categories,
      firstCoursesList,
      defaultFilteredBy,
      initialCoursesList,
      coursesLevels,
    },
  };
};

type TCourses = InferGetServerSidePropsType<typeof getServerSideProps>;

function Courses({
  categories,
  firstCoursesList,
  defaultFilteredBy,
  initialCoursesList,
  coursesLevels,
}: TCourses) {
  return (
    <CoursesState>
      <div className="w-full">
        <section className="mx-auto mt-10 h-[800px] w-[85%] max-w-[1230px]">
          <FeaturedCourseList
            categories={categories}
            firstCoursesList={firstCoursesList}
          />
        </section>
        <section className=" mx-auto mt-10 w-[85%] max-w-[1230px] ">
          <FilteredCoursesList
            defaultFilteredBy={defaultFilteredBy}
            firstCoursesList={initialCoursesList}
            coursesLevels={coursesLevels}
          />
        </section>
      </div>
    </CoursesState>
  );
}

export default Courses;
