/// <reference types="react" />
interface CustomArrowProps {
    onDoubleClick?: any;
    onClick?: any;
    key?: number | string;
    className?: string;
    style?: React.CSSProperties;
    disabled?: boolean;
    children?: React.ReactNode;
}
declare const ButtonSlider: React.FC<CustomArrowProps>;
export default ButtonSlider;
