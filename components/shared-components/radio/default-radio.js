import React from "react";

const DefaultRadio = ({ name, value, onChange }) => {
  const onChangeRadio = (name, value) => {
    onChange && onChange(name, value);
  };
  return (
    <input
      type="radio"
      value={value}
      name={name}
      className="p-0   accent-primary-k-divider-blue  h-4 w-4"
      containerprops={{
        className: "p-0   ",
      }}
      onChange={(e) => onChangeRadio(e.target.name, e.target.value)}
      aria-label="input"
    />
  );
};
export default DefaultRadio;
