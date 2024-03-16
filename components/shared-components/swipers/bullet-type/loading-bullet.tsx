import React from "react";

const LoadingBullet = ({ totalBullets }: any) => {
  return (
    <div className="flex flex-row items-center justify-center gap-6">
      <>
        <button
          aria-label="prev button"
          className={
            "pointer-events-none h-8 w-8 rounded-full bg-secondary-gray-input text-white lg:h-9 lg:w-9 xl:h-12 xl:w-12"
          }
        />
        <div className="flex gap-2.5">
          {/* @ts-ignore */}
          {[...Array(totalBullets ? totalBullets : 5).keys()].map((index) => (
            <span
              className="!h-6 !w-6 rounded-full bg-secondary-gray-input"
              key={index}
            />
          ))}
        </div>
        <button
          aria-label="next button"
          className={
            "pointer-events-none h-8 w-8 rounded-full bg-secondary-gray-input text-white lg:h-9 lg:w-9 xl:h-12 xl:w-12"
          }
        />
      </>
    </div>
  );
};

export default LoadingBullet;
