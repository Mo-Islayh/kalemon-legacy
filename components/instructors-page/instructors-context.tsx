"use client";
import React, { createContext, useState, useRef } from "react";
import { getInstructors } from "@/api/home-page/featured-instructors-list";
export const instructorsContext = createContext<any>(null);
function InstructorsState({ children }: { children: React.ReactNode }) {
  // ===================================Fetch data after filter functions===================================================
  const [filteredInstructors, setFilteredInstructors] = useState(null);
  const [params, setParams] = useState(null);
  const currentSelectedRef = useRef<any>(null);
  const currentSearchInputRef = useRef<any>(null);

  const [loading, setLoading] = useState(false);
  const storeFilteredInstructors = (filteredInstructors: any) => {
    setFilteredInstructors(filteredInstructors);
  };
  const storeParams = (params: any) => {
    setParams(params);
  };

  const fetchFilteredInstructors = async () => {
    setLoading(true);
    const params = {
      term: currentSearchInputRef.current,
      ...currentSelectedRef.current,
    };
    const params1 = {
      ...params,
      page: 1,
    };
    const res1 = await getInstructors(params1);
    if (res1.to != res1.total && res1.to) {
      const params2 = {
        ...params1,
        page: 2,
      };
      const res2 = await getInstructors(params2);
      const finalResponse = {
        ...res2,
        data: [...res1.data, ...res2.data],
      };
      delete params1.page;
      storeFilteredInstructors(finalResponse);
      storeParams(params1);
    } else {
      delete params1.page;
      storeFilteredInstructors(res1);
      storeParams(params1);
    }
    setLoading(false);
  };

  // ==================================Simple search functions====================================================================== //

  const onChangeSelect = async (value: any, whichSelect: any) => {
    if (currentSelectedRef.current[whichSelect] != value) {
      currentSelectedRef.current[whichSelect] = value;
      fetchFilteredInstructors();
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
      fetchFilteredInstructors();
    }, 700);
  };

  const storeDefaultSortBy = (value: any) => {
    currentSelectedRef.current = { ...value };
  };

  const state = {
    filteredInstructors,
    params,
    onChangeSearchInput,
    onChangeSelect,
    storeDefaultSortBy,
    loading,
  };
  return (
    <instructorsContext.Provider value={state}>
      {children}
    </instructorsContext.Provider>
  );
}
export default InstructorsState;
