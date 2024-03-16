import React from "react";
import Image from "next/image";
const AdvanceSearchSkeleton = () => {
  return (
    <Image
      alt="advance search skeleton image"
      src="/assets/images/advance-search-skeleton.svg"
      width={292}
      height={453}
      className="w-full h-full object-contain animate-pulse mb-[2%]"
      priority
    />
  );
};
export default AdvanceSearchSkeleton;
