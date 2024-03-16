import React from "react";
import Image from "next/image";
const CoursesSkeleton = () => {
  return (
    <Image
      alt="instructor skeleton image"
      src="/assets/images/courses-skeleton.svg"
      width={292}
      height={453}
      className="w-full h-full object-contain animate-pulse"
      priority
    />
  );
};
export default CoursesSkeleton;
