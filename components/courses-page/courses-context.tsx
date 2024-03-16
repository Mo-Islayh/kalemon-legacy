"use client";
import React, { createContext, useState, useRef } from "react";
import { getCourses } from "@/api/home-page/featured-courses-list";
export const coursesContext = createContext<any>(null);

function CoursesState({ children }: { children: React.ReactNode }) {
  const [filteredCourses, setFilteredCourses] = useState(null);
  const [params, setParams] = useState<any>(null);
  const currentSelectedRef = useRef<any>(null);
  const currentSearchInputRef = useRef<any>(null);
  const advanceFilterValues = useRef<any>({});

  const [showAdvanceFilter, setShowAdvanceFilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const storeFilteredCourses = (filteredCourses: any) => {
    setFilteredCourses(filteredCourses);
  };
  const storeParams = (params: any) => {
    setParams(params);
  };

  const fetchFilteredCourses = async () => {
    setLoading(true);
    // stringfy the array of checkboxes
    let stringfiedArray: any = { ...advanceFilterValues.current };
    Object.entries(stringfiedArray).forEach((ele) => {
      stringfiedArray[ele[0]] = JSON.stringify(ele[1]);
    });

    const params = {
      ...stringfiedArray,
      term: currentSearchInputRef.current,
      [currentSelectedRef.current]: true,
    };
    const params1 = {
      ...params,
      page: 1,
    };
    const res1 = await getCourses(params1);
    if (res1) {
      if (res1.to != res1.total && res1.to) {
        const params2 = {
          ...params1,
          page: 2,
        };
        const res2 = await getCourses(params2);
        if (res2) {
          const finalResponse = {
            ...res2,
            data: [...res1.data, ...res2.data],
          };
          delete params1.page;
          storeFilteredCourses(finalResponse);
          storeParams(params1);
        }
      } else {
        delete params1.page;
        storeFilteredCourses(res1);
        storeParams(params1);
      }
    }

    setLoading(false);
  };

  // ========================================Advance search functions================================================================= //

  const updateAdvanceFilterCheckboxesValues = (name: any, values: any) => {
    advanceFilterValues.current = {
      ...advanceFilterValues.current,
      [name]: values,
    };
    fetchFilteredCourses();
  };

  const removeValueFromFilter = (name: any, value: any) => {
    const currentValues = advanceFilterValues.current[name];
    if (!currentValues) return;
    const updatedValues = currentValues.filter((ele: any) => ele !== value);
    if (updatedValues.length > 0) {
      updateAdvanceFilterCheckboxesValues(name, updatedValues);
    } else {
      delete advanceFilterValues.current[name];
      fetchFilteredCourses();
    }
  };

  const addValueToFilter = (name: any, value: any) => {
    const currentValues = advanceFilterValues.current[name];
    const updatedValues = currentValues ? [...currentValues, value] : [value];

    updateAdvanceFilterCheckboxesValues(name, updatedValues);
  };

  const setSelectedCheckboxes = (checked: any, name: any, value: any) => {
    if (checked) {
      addValueToFilter(name, value);
    } else {
      removeValueFromFilter(name, value);
    }
  };

  const setSelectedRadio = (name: any, value: any) => {
    advanceFilterValues.current = {
      ...advanceFilterValues.current,
      [name]: value,
    };
    fetchFilteredCourses();
  };

  const storeMultiRangeSlider = (
    minValue: any,
    maxValue: any,
    dontFetchData: any,
  ) => {
    advanceFilterValues.current = {
      ...advanceFilterValues.current,
      min: minValue,
      max: maxValue,
    };
    !dontFetchData && fetchFilteredCourses();
  };

  const storeDurationValue = (name: any, value: any) => {
    const keys = name.split("-");
    const values = value.split("-");
    advanceFilterValues.current = {
      ...advanceFilterValues.current,
      [keys[0]]: values[0],
      [keys[1]]: values[1],
    };
    fetchFilteredCourses();
  };

  // ==================================Simple search functions====================================================================== //

  const onChangeSelect = async (value: any) => {
    if (currentSelectedRef.current != value) {
      currentSelectedRef.current = value;
      fetchFilteredCourses();
    }
  };

  let isTyping = false; // A flag to track ongoing changes
  let timeoutId: any; // To store the timeout ID
  const onChangeSearchInput = (value: any) => {
    currentSearchInputRef.current = value == "" ? null : value;
    clearTimeout(timeoutId);
    isTyping = true;
    timeoutId = setTimeout(async () => {
      isTyping = false;
      fetchFilteredCourses();
    }, 700);
  };

  const clickFilterButton = () => {
    setShowAdvanceFilter(!showAdvanceFilter);
  };

  const storeDefaultSortBy = (value: any) => {
    currentSelectedRef.current = value;
  };

  const state = {
    filteredCourses,
    params,
    showAdvanceFilter,
    storeDefaultSortBy,
    onChangeSelect,
    onChangeSearchInput,
    setSelectedRadio,
    storeMultiRangeSlider,
    storeDurationValue,
    clickFilterButton,
    setSelectedCheckboxes,
    loading,
  };
  return (
    <coursesContext.Provider value={state}>{children}</coursesContext.Provider>
  );
}
export default CoursesState;
