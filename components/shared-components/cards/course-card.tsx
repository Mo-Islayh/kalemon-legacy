import React from "react";
import Image from "next/image";
import Rate from "../rate";
import SubscribeButton from "../buttons/subscribe-button";
import useTranslation from "next-translate/useTranslation";

const CourseCard = ({ cardData, className, hideCardButton }: any) => {
  // const
  const {
    image,
    title,
    category,
    description,
    duration,
    average_rating,
    new_price,
    price,
  } = cardData || {};
  const { t } = useTranslation("common");
  return (
    <div className={className}>
      <Image
        src={image}
        width={482}
        height={432}
        className="w-full h-1/3 object-cover"
        alt="course card"
        priority
      />
      <section className={`flex flex-col justify-between px-6 pt-6 h-2/3`}>
        <p className=" text-primary-k-divider-blue k-font-bold text-xs h-[6%] min-h-[6%] overflow-hidden">
          {category?.name}
        </p>
        <p className=" k-font-bold text-secondary-k-black-txt  size-16px h-[8%] min-h-[8%] overflow-hidden">
          {title}
        </p>
        <p className=" k-font-light text-secondary-second-text-color  size-14px h-1/4 overflow-hidden">
          {description}
        </p>
        <div className="flex  justify-between items-center">
          <p className="k-font-bold size-14px text-secondary-yallow-warn">
            {duration}
          </p>
          <div className="h-8 w-3/12">
            <Rate rate={average_rating} />
          </div>
        </div>
        <div className="flex  gap-1.5">
          <p className="k-font-bold size-16px text-primary-k-navey">
            {new_price}
          </p>
          <p className="k-font-bold size-16px text-secondary-muted-color">
            {price}
          </p>
        </div>
        {!hideCardButton && (
          <div className="w-5/12">
            <SubscribeButton text={t("enrolling-button")} />
          </div>
        )}
      </section>
    </div>
  );
};
export default CourseCard;
