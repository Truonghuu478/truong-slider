import Slide from "./Slide";

import { SlideInter } from "./SlideShow";
interface ISlideView {
  slides: Array<SlideInter>;
  widthToMove: number;
  classSlide: string;
  slideToShow: number;
}

const SlideView = ({
  slides,
  widthToMove,
  classSlide = "",
  slideToShow,
}: ISlideView) => {
  const newSlide = slides.length
    ? [slides[slides.length - 1], ...slides, slides[0]]
    : slides;
  return (
    <>
      {newSlide.length
        ? newSlide.map((slider, index: number) => (
            <Slide
              isCenter={slideToShow === slider.slide.length}
              className={classSlide}
              maxWidthSlide={widthToMove}
              data={slider?.slide || []}
              key={"slide" + index}
            />
          ))
        : null}
    </>
  );
};

export default SlideView;
