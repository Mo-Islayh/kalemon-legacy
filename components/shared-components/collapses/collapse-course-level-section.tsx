import React, { useState } from "react";
import DefaultCheckbox from "@/components/shared-components/checkbox/default-checkbox";
import classNames from "classnames";
import useTranslation from "next-translate/useTranslation";
import { Collapsible, CollapsibleContent } from "@/components/ui/collapsible";

const CollapseCourseLevelSection = ({
  coursesLevels,
  setSelectedCheckboxes,
}: any) => {
  const { t } = useTranslation("advance-search");

  const [showCollapse, setShowCollapse] = useState(true);

  // set the checked box to change the color of the text
  const checkedLevelsObject: any = {};
  coursesLevels.forEach(({ slug }: any) => {
    checkedLevelsObject[slug] = false;
  });
  const [checkedLevels, setCheckedLevels] = useState(checkedLevelsObject);
  return (
    <div className="mb-6 h-full w-full rounded-[5px] border border-secondary-k-gray-tab">
      <div className="flex h-[74px] items-center justify-between rounded-[5px] border-b border-secondary-k-gray-tab px-5">
        <p className="size-18px k-font-bold text-secondary-k-black-txt">
          {t("course-level")}
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
              "flex h-[170px] w-full flex-col justify-between px-2 py-4"
            }
          >
            {coursesLevels?.map(({ id, name, slug }: any) => {
              return (
                <div className="flex items-center justify-between" key={id}>
                  <div className="flex w-full items-center gap-[5%]">
                    <DefaultCheckbox
                      name={"level_id"}
                      value={id}
                      onChange={(onChange: any, name: any, value: any) => {
                        setSelectedCheckboxes(onChange, name, value);
                        setCheckedLevels({
                          ...checkedLevels,
                          [slug]: !checkedLevels[slug],
                        });
                      }}
                    />
                    <p
                      className={classNames(" size-14px k-font-medium", {
                        "text-secondary-k-black-txt": !checkedLevels[slug],
                        "text-primary-k-divider-blue": checkedLevels[slug],
                      })}
                    >
                      {name}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
};
export default CollapseCourseLevelSection;
