import React from "react";
import Slider from "truong-slider";
import { StyleBlockItem, StyleContainer } from "./style";

const SliderDemo = Slider as any;
const CustomSlider: React.FC = () => {
  const settings = {
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };

  return (
    <StyleContainer>
      <SliderDemo {...settings}>
        {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9], (x) => (
          <StyleBlockItem key={x}>{x}</StyleBlockItem>
        ))}
      </SliderDemo>
    </StyleContainer>
  );
};

export default CustomSlider;
