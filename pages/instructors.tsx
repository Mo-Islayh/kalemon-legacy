import { getInstructors } from "@/api/home-page/featured-instructors-list";
import FilteredInstructorsList from "@/components/instructors-page/filtered-instructors-list";
import InstructorsState from "@/components/instructors-page/instructors-context";
import { InferGetServerSidePropsType } from "next";
import React from "react";

export const getServerSideProps = async () => {
  const defaultGender = "a";
  const defaultRating = "5";
  const defaultFilteredBy = {
    rating: defaultRating,
    gender: defaultGender,
  };

  const firstInstructorsList = await getInstructors({
    ...defaultFilteredBy,
    page: 1,
  });

  const secondInstructorsList = await getInstructors({
    ...defaultFilteredBy,
    page: 2,
  });
  const initialInstructorsList = {
    ...secondInstructorsList,
    data: [...firstInstructorsList.data, ...secondInstructorsList.data],
  };

  return {
    props: {
      defaultFilteredBy,
      initialInstructorsList,
    },
  };
};

type TInstructors = InferGetServerSidePropsType<typeof getServerSideProps>;

function Instructors({
  defaultFilteredBy,
  initialInstructorsList,
}: TInstructors) {
  return (
    <InstructorsState>
      <section className="mx-auto mt-10 w-[85%] max-w-[1230px] ">
        <FilteredInstructorsList
          firstInstructorsList={initialInstructorsList}
          defaultFilteredBy={defaultFilteredBy}
        />
      </section>
    </InstructorsState>
  );
}

export default Instructors;
