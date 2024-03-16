import React from "react";
import Image from "next/image";
import Rate from "../rate";
const InstructorCard = ({ cardData, className }:any) => {
  const { user, id, image, biography, rating, videos } = cardData;
  return (
    <div className={`rounded-[20px] shadow-md ${className}`}>
      <Image
        src={image}
        width={465}
        height={432}
        alt="instructor card"
        className="h-3/5 w-full rounded-t-20px object-cover"
        priority
      />
      <section className="p-6 h-2/5 bg-white rounded-b-20px flex flex-col justify-between">
        <p className="size-16px text-secondary-k-black-txt k-font-bold text-center h-1/6 overflow-hidden">
          {user}
        </p>
        <p className="text-xs text-secondary-gray-text k-font-light mt-[5%] text-center h-1/4 overflow-hidden">
          {biography}
        </p>
        <div className="flex justify-between items-center mt-[5%]">
          <p className="k-font-bold size-14px text-primary-k-divider-blue">
            {videos}
          </p>
          <div className="h-8 w-4/12">
            <Rate rate={rating} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstructorCard;
