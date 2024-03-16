"use client";
import React, { useState } from "react";
import {
  Typography,
  List,
  ListItem,
  Card,
  Collapse,
} from "@material-tailwind/react";
import { getSearch } from "@/api/layout/search";
import SearchInput from "@/components/shared-components/inputs/search-input";
import classNames from "classnames";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
import debounce from "lodash/debounce";

const Icons = ({ locale, t }: any) => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [searchResults, setSearchResults] = useState<any>([]);

  const onBlurSearchInput = (searchValue: any) => {
    if (!searchValue) {
      setShowSearchInput(false);
    }
  };

  const onChangeSearchInput = async (value: any, closeIconClicked: any) => {
    if (value) {
      const params = {
        term: value,
      };
      const { data } = await getSearch(params);
      setSearchResults(data);
    } else {
      setSearchResults(null);
      closeIconClicked && setShowSearchInput(false);
    }
  };

  return (
    <div
      className={classNames("flex gap-4 px-[2.5%]", {
        "w-3/4": showSearchInput,
      })}
    >
      {!showSearchInput && (
        <i
          className="ri-search-line text-secondary-paragraph-txt size-25px cursor-pointer"
          onClick={() => setShowSearchInput(true)}
        ></i>
      )}
      {showSearchInput && (
        <div className="h-8 ">
          <SearchInput
            onBlur={onBlurSearchInput}
            autoFocus={true}
            onChange={debounce(onChangeSearchInput, 1000)}
            className={searchResults && "rounded-b-none"}
            locale={locale}
          />
          <Collapse open={searchResults}>
            <Card className="bg-primary-k-white-auth h-auto max-h-[380px] border border-secondary-k-gray-tab sticky z-30 overflow-y-auto py-6  rounded-t-none shadow-none">
              <List className="p-0 min-w-0">
                {searchResults?.length == 0 ? (
                  <ListItem
                    ripple={false}
                    className={classNames(
                      "text-secondary-paragraph-txt size-14px k-font-light p-0 !h-fit px-4 flex justify-start "
                    )}
                  >
                    <Typography className="px-4 size-14px max-h-7 overflow-hidden text-center w-full k-font-light">
                      {t("no-results")}
                    </Typography>
                  </ListItem>
                ) : (
                  searchResults?.map((ele: any, index: number) => (
                    <ListItem
                      ripple={false}
                      className={classNames(
                        "text-secondary-paragraph-txt size-14px k-font-light p-0 !h-fit px-4 flex justify-start ",
                        { "mt-5": index != 0 }
                      )}
                      key={index}
                    >
                      {ele.image ? (
                        <Image
                          src={ele.image}
                          width={100}
                          height={100}
                          priority
                          alt="default icon"
                          className="h-6 w-6"
                        />
                      ) : (
                        <i className="ri-search-line text-secondary-paragraph-txt   items-center size-20px mx-1"></i>
                      )}
                      <Typography className="px-4 size-14px max-h-7 overflow-hidden k-font-light">
                        {ele.name}
                      </Typography>
                    </ListItem>
                  ))
                )}
              </List>
            </Card>
          </Collapse>
        </div>
      )}
      <div className="border-r border-primary-k-navey h-auto" />
      <Language />
    </div>
  );
};
export default Icons;

const Language = () => {
  const { asPath, locale } = useRouter();
  return (
    <div className="flex justify-center items-center">
      <Link passHref locale={locale === "en" ? "ar" : "en"} href={asPath}>
        <span
          className={" text-secondary-paragraph-txt size-25px cursor-pointer"}
        >
          {locale === "ar" ? "En" : "ع"}
        </span>
      </Link>
    </div>
  );
};
