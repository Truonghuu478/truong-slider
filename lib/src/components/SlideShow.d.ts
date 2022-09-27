/// <reference types="react" />
export interface SlideInter {
    id: string | number;
    slide: Array<any>;
}
declare type Keys = string | number | symbol | any | Object | Array<any>;
declare type Props = {
    [K in Keys]: any;
};
declare const SlideShow: React.FC<Props>;
export default SlideShow;
