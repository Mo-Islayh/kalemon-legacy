"use client";
import React, { useState } from "react";
import classNames from "classnames";
import useTranslation from "next-translate/useTranslation";
import { Input } from "@/components/ui/input";

const SearchInput = ({
  onBlur,
  autoFocus,
  onChange,
  className,
  locale,
  placeholder,
}: any) => {
  const [showClearIcon, setShowClearIcon] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const { t } = useTranslation("common");

  const onChangeSelect = (value: any, closeIconCLicked: any) => {
    setInputValue(value);
    onChange && onChange(value, closeIconCLicked);
    value ? setShowClearIcon(true) : setShowClearIcon(false);
  };

  return (
    <div className="relative h-full w-full">
      {/* @ts-ignore */}
      <Input
        autoFocus={autoFocus}
        data-testid="search-input"
        name="search-input"
        type="text"
        className={`k-font-regular pt-7px size-20px relative h-full rounded-[5px] border border-solid border-secondary-k-gray-tab !bg-primary-k-white px-9 pb-2 text-lg focus:!border focus:!border-primary-k-navey focus:!outline-none ${className}`}
        placeholder={placeholder || t("search")}
        onBlur={(e) => {
          onBlur && onBlur(e.target.value);
        }}
        onChange={(e) => {
          onChangeSelect(e.target.value, null);
        }}
        autoComplete=""
        value={inputValue}
        aria-label="Search input"
      />
      {showClearIcon && (
        <i
          className={classNames(
            "ri-close-line size-20px absolute  top-1/2 -translate-y-1/2 transform cursor-pointer text-secondary-paragraph-txt",
            {
              "right-3": locale == "en",
              "left-3": locale == "ar" || !locale,
            },
          )}
          onClick={() => onChangeSelect("", true)}
        ></i>
      )}
      <i
        className={classNames(
          "ri-search-line size-20px absolute  top-1/2 -translate-y-1/2 transform cursor-pointer text-secondary-paragraph-txt",
          {
            "left-3": locale == "en",
            "right-3": locale == "ar" || !locale,
          },
        )}
      ></i>
    </div>
  );
};

export default SearchInput;
