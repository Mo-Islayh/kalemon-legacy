import React from "react";
import classNames from "classnames";
import { useRouter } from "next/router";

const Bullet = ({ isActive }: { isActive: boolean }) => (
  <span
    className={classNames(
      "transition-color !h-1 !w-2 !rounded-sm bg-secondary-k-gray-bullet duration-300 ease-in-out",
      { "!bg-primary-k-navey": isActive },
    )}
  />
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
    <div className="flex flex-row items-center justify-center gap-6 ">
      {totalBullets > 0 && (
        <>
          <button
            aria-label="prev button"
            onClick={onPrevClick}
            className={classNames("", {
              "pointer-events-none": isFirstSlide || transitionStart,
            })}
          >
            <i
              className={classNames(
                " text-2xl",
                { "text-primary-k-navey": !isFirstSlide },
                { "text-secondary-k-gray-arrow": isFirstSlide },
                { "ri-arrow-right-s-line": locale === "ar" },
                { "ri-arrow-left-s-line": locale !== "ar" },
              )}
            />
          </button>

          <div className="flex gap-2.5">
            {/* @ts-ignore */}
            {[...Array(totalBullets).keys()].map((index) => (
              <Bullet key={index} isActive={index + 1 === currentSlide} />
            ))}
          </div>

          <button
            aria-label="next button"
            onClick={onNextClick}
            className={classNames("", {
              "pointer-events-none": isLastSlide || transitionStart,
            })}
          >
            <i
              className={classNames(
                "ri-arrow-left-s-line text-2xl",
                { "text-primary-k-navey": !isLastSlide },
                { "text-secondary-k-gray-arrow": isLastSlide },
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
