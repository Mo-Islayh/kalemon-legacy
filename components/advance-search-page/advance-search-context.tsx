"use client";
import React, { createContext, useState, useRef } from "react";
import { advanceSearch } from "@/api/advance-search-page/advance-search";
export const advanceSearchContext = createContext<any>(null);
function AdvanceSearchState({ children }: { children: React.ReactNode }) {
  // ==============================Fetch data after filter================================================ //
  const [filteredData, setFilteredData] = useState(null);
  const [params, setParams] = useState(null);
  const [showAdvanceFilter, setShowAdvanceFilter] = useState(false);
  const [loading, setLoading] = useState(false);
  const storeFilteredDate = (filteredData: any) => {
    setFilteredData(filteredData);
  };
  const storeParams = (params: any) => {
    setParams(params);
  };
  const advanceFilterValues = useRef<any>({});
  const currentSearchInputRef = useRef<any>(null);
  const currentSimpleSearchSelectedRef = useRef<any>(null);

  const fetchFilteredData = async () => {
    setLoading(true);
    // stringfy the array of checkboxes
    let stringfiedArray = { ...advanceFilterValues.current };
    Object.entries(stringfiedArray).forEach((ele) => {
      stringfiedArray[ele[0]] = JSON.stringify(ele[1]);
    });

    const params = {
      ...stringfiedArray,
      term: currentSearchInputRef.current,
      [currentSimpleSearchSelectedRef?.current]: true,
    };
    const params1 = {
      ...params,
      page: 1,
    };
    const res1 = await advanceSearch(params1);
    if (res1.to != res1.total && res1.to) {
      const params2 = {
        ...params1,
        page: 2,
      };
      const res2 = await advanceSearch(params2);
      const finalResponse = {
        ...res2,
        data: [...res1.data, ...res2.data],
      };
      delete params1.page;
      storeFilteredDate(finalResponse);
      storeParams(params1);
    } else {
      delete params1.page;
      storeFilteredDate(res1);
      storeParams(params1);
    }
    setLoading(false);
  };

  // ========================================Advance search functions================================================================= //

  const updateAdvanceFilterCheckboxesValues = (name: any, values: any) => {
    advanceFilterValues.current = {
      ...advanceFilterValues.current,
      [name]: values,
    };
    fetchFilteredData();
  };

  const removeValueFromFilter = (name: any, value: any) => {
    const currentValues = advanceFilterValues.current[name];
    if (!currentValues) return;
    const updatedValues = currentValues.filter((ele: any) => ele !== value);
    if (updatedValues.length > 0) {
      updateAdvanceFilterCheckboxesValues(name, updatedValues);
    } else {
      delete advanceFilterValues.current[name];
      fetchFilteredData();
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
    fetchFilteredData();
  };

  const storeMultiRangeSlider = (
    minValue: any,
    maxValue: any,
    dontFetchData: any
  ) => {
    advanceFilterValues.current = {
      ...advanceFilterValues.current,
      min: minValue,
      max: maxValue,
    };
    !dontFetchData && fetchFilteredData();
  };

  const storeDurationValue = (name: any, value: any) => {
    const keys = name.split("-");
    const values = value.split("-");
    advanceFilterValues.current = {
      ...advanceFilterValues.current,
      [keys[0]]: values[0],
      [keys[1]]: values[1],
    };
    fetchFilteredData();
  };

  const clickFilterButton = () => {
    setShowAdvanceFilter(!showAdvanceFilter);
  };

  const onChangeSelect = async (value: any) => {
    if (currentSimpleSearchSelectedRef.current != value) {
      currentSimpleSearchSelectedRef.current = value;
      fetchFilteredData();
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
      fetchFilteredData();
    }, 700);
  };

  const storeDefaultSortBy = (value: any) => {
    currentSimpleSearchSelectedRef.current = value;
  };

  const state = {
    filteredData,
    params,
    showAdvanceFilter,
    clickFilterButton,
    setSelectedCheckboxes,
    setSelectedRadio,
    onChangeSelect,
    onChangeSearchInput,
    storeDefaultSortBy,
    storeMultiRangeSlider,
    storeDurationValue,
    loading,
  };

  return (
    <advanceSearchContext.Provider value={state}>
      {children}
    </advanceSearchContext.Provider>
  );
}
export default AdvanceSearchState;
