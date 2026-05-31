"use client";

import {
  ReactCompareSlider,
  ReactCompareSliderImage,
  styleFitContainer,
} from "react-compare-slider";

export function KinpetBeforeAfterSlider() {
  return (
    <ReactCompareSlider
      className="w-full"
      defaultPosition={12}
      itemOne={
        <ReactCompareSliderImage
          src="/before.png"
          alt="Kinpet — главная до редизайна"
          style={styleFitContainer({ objectFit: "cover" })}
        />
      }
      itemTwo={
        <ReactCompareSliderImage
          src="/after.png?v=2"
          alt="Kinpet — главная после редизайна"
          style={styleFitContainer({ objectFit: "cover" })}
        />
      }
    />
  );
}
