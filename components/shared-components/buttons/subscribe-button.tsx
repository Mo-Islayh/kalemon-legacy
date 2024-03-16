import React from "react";

export default function SubscribeButton({ text }: { text: string }) {
  return (
    <button
      aria-label="enrolling button"
      className="size-16px flex h-full w-full cursor-pointer items-center rounded-2xl border border-primary-k-divider-blue bg-transparent px-4 py-2 text-primary-k-divider-blue shadow-none hover:shadow-none"
    >
      <p className=" k-font-bold size-16px cursor-pointer">{text}</p>
      <i className="ri-arrow-left-s-line cursor-pointer"></i>
    </button>
  );
}
