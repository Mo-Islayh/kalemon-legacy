import {
  advanceSearch,
  getCoursesLevels,
} from "@/api/advance-search-page/advance-search";
import AdvanceSearchState from "@/components/advance-search-page/advance-search-context";
import FilteredInstructorsList from "@/components/advance-search-page/filtered-list";
import { InferGetServerSidePropsType } from "next";
import React from "react";

export const getServerSideProps = async () => {
  const defaultSortBySelect = "newest";
  const defaultFilteredBy = { [defaultSortBySelect]: true };
  const params = {
    ...defaultFilteredBy,
    page: 1,
  };
  const firstFilteredList = await advanceSearch(params);

  const coursesLevels = await getCoursesLevels();

  return {
    props: {
      firstFilteredList,
      coursesLevels,
      defaultFilteredBy,
    },
  };
};

type TAdvanceSearch = InferGetServerSidePropsType<typeof getServerSideProps>;

function AdvanceSearch({
  firstFilteredList,
  coursesLevels,
  defaultFilteredBy,
}: TAdvanceSearch) {
  return (
    <AdvanceSearchState>
      <section className=" mx-auto mt-10 w-[85%] max-w-[1230px] ">
        <FilteredInstructorsList
          firstFilteredList={firstFilteredList}
          defaultFilteredBy={defaultFilteredBy}
          coursesLevels={coursesLevels}
        />
      </section>
    </AdvanceSearchState>
  );
}

export default AdvanceSearch;
