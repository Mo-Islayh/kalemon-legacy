"use client";
import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

function DualThumbRangeSlider({
  minValue = 0,
  maxValue = 100,
  handleRangeSliderChange,
  handleRangeSliderAfterChange,
  className,
}) {
  const [range, setRange] = useState([minValue, maxValue]);
  const rangeSliderColor = "#0092D4";
  const handleRangeChange = (value) => {
    handleRangeSliderChange && handleRangeSliderChange(value);
    setRange(value);
  };

  return (
    <Slider
      min={minValue}
      max={maxValue}
      range
      value={range}
      onChange={handleRangeChange}
      onAfterChange={
        handleRangeSliderAfterChange && handleRangeSliderAfterChange
      }
      trackStyle={[{ backgroundColor: rangeSliderColor }]}
      handleStyle={[
        { backgroundColor: rangeSliderColor, border: "none", opacity: "1" },
        { backgroundColor: rangeSliderColor, border: "none", opacity: "1" },
      ]}
      className={className}
    />
  );
}

export default DualThumbRangeSlider;
