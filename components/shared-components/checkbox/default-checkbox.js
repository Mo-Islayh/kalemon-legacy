import React from "react";

const DefaultCheckbox = ({ onChange, name, value }) => {
  const onChangeCheckbox = (e) => {
    const { checked, name, value } = e.target;
    onChange && onChange(checked, name, value);
  };
  return (
    <input
      type="checkbox"
      name={name}
      value={value}
      className="p-0 rounded-none  accent-primary-k-divider-blue  h-4 w-4"
      containerprops={{
        className: "p-0 rounded-none  ",
      }}
      onChange={onChangeCheckbox}
      aria-label="input"
    />
  );
};
export default DefaultCheckbox;
