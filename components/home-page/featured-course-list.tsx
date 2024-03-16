"use client";
import React, { useState, useCallback, useRef, useLayoutEffect } from "react";
import UnderlineTabs from "@/components/shared-components/underlined-tabs";
import CoursesSwiper from "@/components/shared-components/swipers/swiper-types/courses-swiper";
import { getCourses } from "@/api/home-page/featured-courses-list";
import useTranslation from "next-translate/useTranslation";

const FeaturedCourseList = ({ categories, firstCoursesList }: any) => {
  const { t } = useTranslation("home-page");

  const [currentTab, setCurrentTab] = useState(0);
  const [category_id, setCategoryId] = useState(categories?.data[0]?.id);
  const clonedCategories = [...categories?.data];
  clonedCategories[0].description = (
    <div className="h-[90%]">
      <CoursesSwiper
        // apiParams={{ category_id }}
        firstCoursesList={firstCoursesList}
        breakpoints={{
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          1024: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
          1240: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        className={"h-[95%] p-5"}
        hideCardButton={true}
        cardClassName={"h-[500px]"}
        loading={false}
      />
    </div>
  );
  const [categoriesTabs, setCategoriesTabs] = useState(clonedCategories);
  const tabsAlreadyClicked = useRef<any>({ 0: true });

  const handleTabClick = useCallback(async (tabIndex: any, categoryId: any) => {
    setCurrentTab(tabIndex);
    setCategoryId(categoryId);
  }, []);

  useLayoutEffect(() => {
    if (!tabsAlreadyClicked.current[currentTab] && categoriesTabs) {
      const updateTabDescription = async () => {
        tabsAlreadyClicked.current[currentTab] = true;
        let updatedCategoriesTabs = [...categoriesTabs];
        updatedCategoriesTabs[currentTab].description = // set the loading swiper
          (
            <div className="h-[90%]">
              <CoursesSwiper
                loading={true}
                // apiParams={{ category_id }}
                firstCoursesList={firstCoursesList}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                  },
                  1240: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                  },
                }}
                className={"h-[95%] p-5"}
                hideCardButton={true}
                cardClassName={"h-[500px]"}
              />
            </div>
          );
        setCategoriesTabs(updatedCategoriesTabs);

        // get new data if category changed
        const coursesList = await getCourses({  page: 1 });
        const updatedCategoriesTabs2 = [...categoriesTabs];
        updatedCategoriesTabs2[currentTab].description = // set the actuall swiper
          (
            <div className="h-[90%]">
              <CoursesSwiper
                loading={false}
                // apiParams={{ category_id }}
                firstCoursesList={coursesList}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                    slidesPerGroup: 3,
                  },
                  1240: {
                    slidesPerView: 4,
                    slidesPerGroup: 4,
                  },
                }}
                className={"h-[95%] p-5"}
                hideCardButton={true}
                cardClassName={"h-[500px]"}
              />
            </div>
          );
        setCategoriesTabs(updatedCategoriesTabs2);
      };
      updateTabDescription();
    }
  }, [currentTab, category_id, firstCoursesList, categoriesTabs]);

  return (
    <>
      <h1 className="size-40px k-font-bold text-secondary-k-black-txt ">
        {t("title")}
      </h1>
      <h2 className="size-20px k-font-light mb-10 mt-4 h-16 text-secondary-k-black-txt">
        {t("sub-title")}
      </h2>

      <UnderlineTabs
        className={"h-4/5"}
        data={categoriesTabs}
        handleTabClick={handleTabClick}
      />
      
    </>
  );
};

export default FeaturedCourseList;
