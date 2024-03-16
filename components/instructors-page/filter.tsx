"use client";
import React, { useContext, useEffect } from "react";
import SearchInput from "@/components/shared-components/inputs/search-input";
import Select from "@/components/shared-components/select/custom-select";
import { instructorsContext } from "./instructors-context";
import useTranslation from "next-translate/useTranslation";

const Filter = () => {
  // const
  const { t } = useTranslation("instructors");
  const genderOptions = [
    { value: "a", text: t("all-gender") },
    { value: "m", text: t("male-gender") },
    { value: "f", text: t("female-gender") },
  ];
  const ratingOptions = [
    { value: "5", text: t("5-starts") },
    { value: "4", text: t("4-starts") },
    { value: "3", text: t("3-starts") },
    { value: "2", text: t("2-starts") },
    { value: "1", text: t("1-starts") },
  ];

  const { storeDefaultSortBy, onChangeSelect, onChangeSearchInput } =
    useContext(instructorsContext);
  useEffect(() => {
    storeDefaultSortBy({
      rating: ratingOptions[0].value,
      gender: genderOptions[0].value,
    });
  }, []);

  return (
    <>
      <div className="w-1/2 h-full  flex flex-col justify-between">
        <p className="text-secondary-gray-text size-14px k-font-bold ">
          {t("search")} :
        </p>
        <div className="h-12">
          <SearchInput
            placeholder={t("find-your-instructor")}
            onChange={onChangeSearchInput}
          />
        </div>
      </div>

      <div className="w-1/3 h-full flex flex-col justify-between">
        <p className="text-secondary-gray-text size-14px k-font-bold ">
          {t("rating")} :
        </p>
        <div className="h-12">
          <Select
            options={ratingOptions}
            onChange={(value: any) => onChangeSelect(value, "rating")}
          />
        </div>
      </div>

      <div className="w-[13%] h-full flex flex-col justify-between">
        <p className="text-secondary-gray-text size-14px k-font-bold ">
          {t("gender")} :
        </p>
        <div className="h-12">
          <Select
            options={genderOptions}
            onChange={(value: any) => onChangeSelect(value, "gender")}
          />
        </div>
      </div>
    </>
  );
};
export default Filter;
