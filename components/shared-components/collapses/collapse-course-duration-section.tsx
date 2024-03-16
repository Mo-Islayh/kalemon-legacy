import React, { useState } from "react";
import classNames from "classnames";
import DefaultRadio from "@/components/shared-components/radio/default-radio";

import useTranslation from "next-translate/useTranslation";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";

const CollapseCourseDurationSection = ({ storeDurationValue }: any) => {
  const { t } = useTranslation("advance-search");
  const [showCollapse, setShowCollapse] = useState(true);

  const list = [
    { text: t("from-6-to-12-month"), value: "6-12" },
    { text: t("from-3-to-6-month"), value: "3-6" },
    { text: t("from-1-to-3-month"), value: "1-3" },
    { text: t("from-1-to-4-week"), value: "1-4" },
    { text: t("from-1-to-7-day"), value: "1-7" },
  ];
  return (
    <div className="h-full w-full rounded-[5px]  border border-secondary-k-gray-tab ">
      <div className="flex h-[74px] items-center justify-between rounded-[5px] border-b border-secondary-k-gray-tab px-5">
        <p className="size-18px k-font-bold text-secondary-k-black-txt ">
          {t("course-duration")}
        </p>
        <i
          className={classNames(
            " size-28px cursor-pointer text-secondary-k-black-txt",
            {
              "ri-arrow-up-s-line": showCollapse,
              "ri-arrow-down-s-line": !showCollapse,
            },
          )}
          onClick={() => setShowCollapse(!showCollapse)}
        ></i>
      </div>
      <Collapsible open={showCollapse}>
        <CollapsibleContent>
          <div
            className={
              "flex h-[215px] w-full flex-col justify-between px-2 py-6"
            }
          >
            {list.map(({ text, value }, index) => (
              <div className="flex items-center justify-between" key={index}>
                <div className="flex w-full items-center gap-[5%]">
                  <DefaultRadio
                    name={"min_duration-max_duration"}
                    value={value}
                    onChange={storeDurationValue}
                  />
                  <p
                    className={
                      " size-14px k-font-medium text-secondary-k-black-txt"
                    }
                  >
                    {text}
                  </p>
                </div>

                <p className="k-font-light text-base text-secondary-gray-text">
                  100
                </p>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
export default CollapseCourseDurationSection;
