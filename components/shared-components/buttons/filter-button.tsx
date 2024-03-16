import React from "react";
import useTranslation from "next-translate/useTranslation";

interface Props {
  onClick?: () => void;
}

const FilterButton = ({ onClick }: Props) => {
  const { t } = useTranslation("common");
  return (
    <button
      onClick={onClick}
      aria-label="filter button"
      className="size-16px flex h-full w-full items-center justify-start rounded border border-primary-k-divider-blue bg-transparent p-0 text-primary-k-divider-blue shadow-none"
    >
      <i className="ri-filter-3-line k-font-light px-6 text-2xl" />
      <p className="k-font-light">{t("filter-button")}</p>
    </button>
  );
};
export default FilterButton;
