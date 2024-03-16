import React from "react";
import Image from "next/image";
import Rate from "../rate";

const AdvanceSearchCard = ({ cardData, className }: any) => {
  // const
  const {
    image,
    average_rating,
    id,
    model,
    name,
    number_of_user_rating,
    slug,
  } = cardData || {};
  return (
    <div className={`h-full w-full flex  ${className}`}>
      <Image
        src={image}
        width={268}
        height={186}
        className="w-[30%] h-full object-contain"
        alt="advance search card"
        priority
      />
      <section className={`h-auto w-[70%] flex flex-col justify-between p-4`}>
        <div className="flex justify-between h-8 overflow-hidden">
          <p className="size-16px k-font-bold text-secondary-k-black-txt">
            {name}
          </p>
          <p className="text-xs	text-primary-k-divider-blue k-font-bold">
            {model}
          </p>
        </div>
        <p className="size-14px k-font-light text-secondary-second-text-color h-8 overflow-hidden">
          برنامج أوتوديسك ريفيت Autodesk Revit هو برنامج نمذجة معلومات
        </p>
        <div className="flex justify-between items-center h-8">
          <p className="size-14px k-font-bold text-secondary-yallow-warn">
            20 ساعة
          </p>
          <div className="w-16 h-full">
            <Rate rate={average_rating} />
          </div>
        </div>
        <div className="flex flex-row-reverse gap-4">
          <p className="k-font-bold size-16px text-secondary-muted-color">
            23232
          </p>
          <p className="k-font-bold size-16px text-primary-k-navey">232</p>
        </div>
      </section>
    </div>
  );
};
export default AdvanceSearchCard;
