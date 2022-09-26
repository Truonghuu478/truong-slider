/// <reference types="react" />
import { SlideInter } from "./SlideShow";
interface ISlideView {
    slides: Array<SlideInter>;
    widthToMove: number;
    classSlide: string;
    slideToShow: number;
}
declare const SlideView: ({ slides, widthToMove, classSlide, slideToShow, }: ISlideView) => JSX.Element;
export default SlideView;
