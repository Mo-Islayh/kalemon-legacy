import React from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

const NumberedBullet = ({ number, isActive }: any) => (
  <span
    className={classNames(
      "transition-color flex !h-6 !w-6 items-center justify-center rounded-full  text-secondary-k-gray-bullet duration-300 ease-in-out",
      { "!text-primary-k-navey": isActive },
    )}
  >
    {number.toString().padStart(2, "0")}{" "}
    {/* Format the number as 01, 02, etc. */}
  </span>
);

const CustomPaginationBullet = ({
  onPrevClick,
  onNextClick,
  totalBullets,
  currentSlide,
  transitionStart,
}: any) => {
  const isFirstSlide = currentSlide === 1;
  const isLastSlide = currentSlide === totalBullets;

  const { locale } = useRouter();

  return (
    <div className="flex flex-row items-center justify-center gap-6">
      {totalBullets > 0 && (
        <>
          <button
            aria-label="prev button"
            onClick={onPrevClick}
            className={classNames(
              "h-8 w-8 rounded-full text-white lg:h-9 lg:w-9 xl:h-12 xl:w-12",
              {
                "pointer-events-none": isFirstSlide || transitionStart,
                "bg-primary-k-navey": !isFirstSlide,
                "bg-secondary-k-gray-arrow": isFirstSlide,
              },
            )}
          >
            <i
              className={classNames(
                " text-2xl ",
                { "ri-arrow-right-s-line": locale === "ar" },
                { "ri-arrow-left-s-line": locale !== "ar" },
              )}
            />
          </button>

          <div className="flex gap-2.5">
            {/* @ts-ignore */}
            {[...Array(totalBullets).keys()].map((index) => (
              <NumberedBullet
                key={index}
                number={index + 1}
                isActive={index + 1 === currentSlide}
              />
            ))}
          </div>

          <button
            aria-label="next button"
            onClick={onNextClick}
            className={classNames(
              "h-8 w-8 rounded-full text-white lg:h-9 lg:w-9 xl:h-12 xl:w-12",
              {
                "pointer-events-none": isLastSlide || transitionStart,
                "bg-primary-k-navey": !isLastSlide,
                "bg-secondary-k-gray-arrow": isLastSlide,
              },
            )}
          >
            <i
              className={classNames(
                " text-2xl",
                { "ri-arrow-left-s-line": locale === "ar" },
                { "ri-arrow-right-s-line": locale !== "ar" },
              )}
            />
          </button>
        </>
      )}
    </div>
  );
};

export default CustomPaginationBullet;
