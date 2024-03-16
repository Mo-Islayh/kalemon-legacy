import React, { useEffect, useState } from "react";
import classNames from "classnames";
import useTranslation from "next-translate/useTranslation";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";
import dynamic from "next/dynamic";

const DefaultMultiRangeSlider = dynamic(
  () =>
    import(
      "@/components/shared-components/multi-range-slider/multi-range-slider"
    ),
);

const CollapsePriceSection = ({ storeMultiRangeSlider }: any) => {
  const { t } = useTranslation("advance-search");
  const [showCollapse, setShowCollapse] = useState(true);
  const [maxValue, setMaxValue] = useState(100);
  const [minValue, setMinValue] = useState(0);

  const handleRangeSliderChange = (e: any) => {
    setMinValue(e[0]);
    setMaxValue(e[1]);
  };

  const handleRangeSliderAfterChange = (e: any) => {
    storeMultiRangeSlider(e[0], e[1]);
    return;
  };
  useEffect(() => {
    // store the default min and max without fetch api for the first time
    storeMultiRangeSlider(minValue, maxValue, true);
  }, []);

  return (
    <div className="h-full w-full rounded-[5px] border border-secondary-k-gray-tab ">
      <div className="flex h-[74px] items-center justify-between rounded-[5px] border-b border-secondary-k-gray-tab px-5">
        <p className="size-18px k-font-bold text-secondary-k-black-txt">
          {t("price")}
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
            className={"flex	h-32 w-full flex-col justify-around px-2 py-4"}
            dir="ltr"
          >
            <DefaultMultiRangeSlider
              minValue={0}
              maxValue={100}
              handleRangeSliderChange={handleRangeSliderChange}
              handleRangeSliderAfterChange={handleRangeSliderAfterChange}
              className={"mx-auto !w-[95%]"}
            />
            <div className="flex justify-between">
              <div className="size-16px k-font-light h-12 w-[48%] rounded-[5px] border border-secondary-k-gray-tab  text-secondary-gray-text">
                <p className="text-center"> {t("min-price")}</p>
                <p className="text-center"> {minValue} JOD</p>
              </div>
              <div className="size-16px k-font-light h-12 w-[48%] rounded-[5px] border border-secondary-k-gray-tab  text-secondary-gray-text">
                <p className="text-center">{t("max-price")}</p>
                <p className="text-center"> {maxValue} JOD</p>
              </div>
            </div>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
export default CollapsePriceSection;
