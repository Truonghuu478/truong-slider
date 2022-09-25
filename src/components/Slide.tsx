import classNames from "classnames";
import { useRef, Fragment } from "react";
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

const Slide: React.FC<PropsSlide> = ({
  data,
  maxWidthSlide,
  style,
  className = "",
  isCenter,
}) => {
  const ref_slide: any = useRef();

  return (
    <div
      style={{ ...style, width: maxWidthSlide, minHeight: 1 }}
      ref={ref_slide}
      className={`${className} block h-full`}
    >
      <div
        style={{ width: maxWidthSlide }}
        className={classNames(
          "flex h-full w-full items-center",
          isCenter ? "justify-center" : "justify-start"
        )}
      >
        {data.map((t, indexSlide) => (
          <Fragment key={"slide-index" + indexSlide}>{t}</Fragment>
        ))}
      </div>
    </div>
  );
};
export default Slide;
