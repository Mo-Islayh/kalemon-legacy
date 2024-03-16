import React from "react";
import Image from "next/image";
import LiveSessionButton from "@/components/shared-components/buttons/live-session-button";
import useTranslation from "next-translate/useTranslation";

const BookingOnlineSission = () => {
  const { t } = useTranslation("common");

  return (
    <div className="flex h-full w-full flex-wrap-reverse justify-center gap-4 rounded-[20px] bg-primary-k-navey p-6 sm:flex-nowrap">
      <div className="flex w-3/5 flex-col justify-between gap-4 py-8 ">
        <p className="size-40px k-font-bold w-full text-white">
          {t("book-live-sessions")}
        </p>
        <p className="size-20px k-font-light w-[80%] text-white">
          {t("instructors-teach-millions")}
        </p>
        <div className="h-11 sm:w-1/2 ">
          <LiveSessionButton text={t("live-session-button")} />
        </div>
      </div>
      <Image
        alt="booking live session"
        src={"/assets/images/booking-live-session.png"}
        width={498}
        height={329}
        className="h-full w-2/5 min-w-[250px] rounded-3xl object-contain"
        priority
      />
    </div>
  );
};
export default BookingOnlineSission;
