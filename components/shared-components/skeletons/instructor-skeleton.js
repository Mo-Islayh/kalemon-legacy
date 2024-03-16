import React from "react";
import Image from "next/image";
const InstructorSkeleton = () => {
  return (
    <Image
      alt="instructor skeleton image"
      src="/assets/images/instructors-skeleton.svg"
      width={213}
      height={408}
      className="w-full h-full object-contain animate-pulse"
      priority
    />
  );
};
export default InstructorSkeleton;
