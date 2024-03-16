"use client";
import React, { useContext, useEffect } from "react";
import SearchInput from "@/components/shared-components/inputs/search-input";
import FilterButton from "@/components/shared-components/buttons/filter-button";
import Select from "@/components/shared-components/select/custom-select";
import { coursesContext } from "./courses-context";
import useTranslation from "next-translate/useTranslation";

const Filter = () => {
  const { t } = useTranslation("courses");

  const sortBySelectOptions = [
    { value: "newest", text: t("recently-added") },
    { value: "added_recently 2 ", text: t("recently-added-2") },
  ];

  const {
    storeDefaultSortBy,
    onChangeSelect,
    onChangeSearchInput,
    clickFilterButton,
  } = useContext(coursesContext);

  const onClickFilterButton = () => {
    clickFilterButton();
  };

  useEffect(() => {
    storeDefaultSortBy(sortBySelectOptions[0].value);
  }, []);
  return (
    <>
      <div className="w-1/6 h-full">
        <FilterButton onClick={onClickFilterButton} />
      </div>
      <div className="w-[55%] h-full">
        <div className="w-3/5 h-full">
          <SearchInput
            placeholder={t("search-placeholder")}
            onChange={onChangeSearchInput}
          />
        </div>
      </div>

      <div className="w-1/4 h-full flex">
        <p className="flex size-14px text-secondary-gray-text k-font-bold h-full w-2/3 items-center">
          {t("soret-by")}:
        </p>
        <Select options={sortBySelectOptions} onChange={onChangeSelect} />
      </div>
    </>
  );
};
export default Filter;
