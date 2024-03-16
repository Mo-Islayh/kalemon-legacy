import React, { useState } from "react";
import DefaultRadio from "@/components/shared-components/radio/default-radio";
import classNames from "classnames";
import useTranslation from "next-translate/useTranslation";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";

const CollapseRatingSection = ({ title, radioName, setSelectedRadio }: any) => {
  const { t } = useTranslation("advance-search");
  const [showCollapse, setShowCollapse] = useState(true);

  const rating = [5, 4, 3];
  return (
    <div className="h-full w-full rounded-[5px] border border-secondary-k-gray-tab">
      <div className="flex h-[74px] items-center justify-between rounded-[5px] border-b border-secondary-k-gray-tab px-5">
        <p className="size-18px k-font-bold text-secondary-k-black-txt">
          {title}
        </p>
        <i
          className={classNames(
            "size-28px cursor-pointer text-secondary-k-black-txt",
            {
              "ri-arrow-up-s-line": showCollapse,
              "ri-arrow-down-s-line": !showCollapse,
            },
          )}
          onClick={() => setShowCollapse(!showCollapse)}
        />
      </div>
      <Collapsible open={showCollapse}>
        <CollapsibleContent>
          <div
            className={"flex h-32 w-full flex-col justify-between px-2 py-4"}
          >
            {rating.map((rate, index) => (
              <div className="flex items-center justify-between" key={index}>
                <div className="flex w-full items-center gap-[5%]">
                  <DefaultRadio
                    name={radioName}
                    value={rate}
                    onChange={setSelectedRadio}
                  />

                  <p className="size-14px k-font-medium text-secondary-k-black-txt">
                    {`${rate}.0`}
                  </p>
                  <i className="ri-star-fill size-14px text-secondary-yallow-warn "></i>
                  <p className="size-14px k-font-medium text-secondary-k-black-txt">
                    {t("more")}
                  </p>
                </div>
                <p className="k-font-light text-base text-secondary-gray-text">
                  500
                </p>
              </div>
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
export default CollapseRatingSection;
