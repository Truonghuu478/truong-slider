/// <reference types="react" />
interface PropsSlide {
    active?: number;
    data: Array<any>;
    key: number | string;
    className?: string | "";
    style?: Object;
    maxWidthSlide: number;
    isCenter: boolean;
    onMouseDown?: React.MouseEventHandler;
    onMouseMove?: React.MouseEventHandler;
    onSlideCallback?: Function;
    stopOnSlideCallback?: Function;
}
declare const Slide: React.FC<PropsSlide>;
export default Slide;
