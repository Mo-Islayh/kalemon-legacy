import Image from "next/image";
import React from "react";
const TestimonialCard = ({ cardData }: any) => {
  const { user, role, image, review } = cardData;

  return (
    <>
      <div className="flex h-full  flex-row-reverse items-end relative justify-center ">
        <div className=" w-full bg-primary-k-white-auth rounded-[30px] px-[18px] flex flex-col justify-between pb-6  h-5/6 shadow-md">
          <div className="h-1/6"></div>
          <div className=" h-1/6">
            <p className="size-16px text-secondary-k-black-text k-font-bold text-center h-1/2">
              {user}
            </p>
            <p className="text-xs text-secondary-gray-text k-font-bold h-1/2 overflow-hidden text-center">
              {role}
            </p>
          </div>
          <p className="size-14px text-secondary-paragraph-txt k-font-light h-1/2  overflow-hidden">
            {review}
          </p>
        </div>
        <Image
          className="sm:w-auto top-0  absolute  rounded-full !h-[120px] !w-[120px] object-cover"
          src={image}
          width={120}
          height={120}
          alt="customer image"
          loading="lazy"
        />
      </div>
    </>
  );
};
export default TestimonialCard;
