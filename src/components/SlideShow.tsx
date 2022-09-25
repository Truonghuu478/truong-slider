import classNames from "classnames";
import { ButtonSlider, SlideView } from "../components";
import { useWindowDimensions } from "../hooks/useWindowDimensions";
import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
  Fragment,
} from "react";

const DESKTOP = 1024;
const TABLET = 600;
const MOBILE = 480;
const SLIDES_TO_SHOW = 3;
const SLIDES_TO_SCROLL = 1;
const slidesIndexDefault = 1;
const defaultActive = 0;
const defaultIdSlide = "";
const SPEED_AUTO = 2000;
const SPEED = 500;

export interface SlideInter {
  id: string | number;
  slide: Array<any>;
}
class SettingDefault {
  [x: string]: any;
  constructor(props: any | null) {
    this.dots = props?.dots ?? false;
    this.arrows = props?.arrows ?? true;
    this.slidesToShow = props?.slidesToShow ?? SLIDES_TO_SHOW;
    this.slidesToScroll = props?.slidesToScroll ?? SLIDES_TO_SCROLL;
    this.nextArrow = props?.nextArrow ?? null;
    this.prevArrow = props?.prevArrow ?? null;
    this.handleSlide = props?.handleSlide ?? null;
    this.customPaging = props?.customPaging ?? null;
    this.speed = props?.speed ?? SPEED; // ms
    this.autoplay = props?.autoplay ?? false;
    this.autoplaySpeed = props?.autoplaySpeed ?? SPEED_AUTO;
    this.classSlideDots = props?.classSlideDots ?? "";
    this.classSlide = props?.classSlide ?? "";
    this.classPrevArrow = props?.classPrevArrow ?? "";
    this.classNextArrow = props?.classNextArrow ?? "";
    this.disabledPrev = props?.disabledPrev ?? false;
    this.disabledNext = props?.disabledNext ?? false;
    this.hiddenPrev = props?.hiddenPrev ?? false;
    this.hiddenNext = props?.hiddenNext ?? false;
    ((this.responsive = props?.responsive ?? [
      {
        breakpoint: DESKTOP,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: TABLET,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: MOBILE,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ]),
    (this.stylePrevArrow = props?.stylePrevArrow ?? {})),
      (this.styleNextArrow = props?.styleNextArrow ?? {});
  }
}
type Keys = string | number | symbol | any | Object | Array<any>;

type Props = {
  [K in Keys]: any;
};

const SlideShow: React.FC = (props: Props) => {
  const data: React.ReactNode = props.children;
  const [newSettings, setNewSettings] = useState(new SettingDefault(props));
  const [idActiveSlide, setIdActiveSlide]: any = useState(defaultIdSlide);
  const [active, setActive] = useState(defaultActive);
  const [isStopAutoplay, setIsStopAutoplay] = useState(!!props.autoplay);
  const timeOutSlider: { current: NodeJS.Timeout | null } = useRef(null);
  const { width }: any = useWindowDimensions();

  // ref viewSlider
  const widthToMove = useRef(0);
  const refSlides: any = useRef(null);
  const dragging = useRef(false);
  const startPos = useRef(0);
  const currentTranslate = useRef(0);

  useEffect(() => {
    if (refSlides?.current) {
      refSlides?.current && transitionOff();
      const maxWidthSlides = refSlides?.current?.getBoundingClientRect().width;
      if (maxWidthSlides) {
        widthToMove.current = maxWidthSlides;
        setStyleTransformSlides(slidesIndexDefault, maxWidthSlides);
        currentTranslate.current = maxWidthSlides * (active + 1);
        initResponseSlide();
      }
    }
  }, []);

  // useIsomorphicLayoutEffect(() => {
  // 	const handleScrollWindow = () => {
  // 		const position: number = window.scrollY;
  // 		console.log('position', position);
  // 	};
  // 	window.addEventListener('scroll', handleScrollWindow);

  // 	return () => window.removeEventListener('scroll', handleScrollWindow);
  // });

  const getPositionX = (event: any) => {
    return event?.type?.includes("mouse")
      ? event?.pageX
      : event?.changedTouches[0]?.clientX;
  };

  useEffect(() => {
    setNewSettings(new SettingDefault({ ...props }));
  }, [
    props.disabledPrev,
    props.disabledNext,
    props.hiddenPrev,
    props.hiddenNext,
    props.responsive,
    props,
  ]);

  useEffect(() => {
    let timeInterValAutoPlay: null | NodeJS.Timeout = null;
    const handleAutoPlay = () => {
      timeInterValAutoPlay = setInterval(() => {
        transitionOn();
        // refSlides.current.style.transitionDuration = `${newSettings.speed}ms`;
        setStyleTransformSlides(active + 2);
        if (active >= slides.length - 1) {
          setIdActiveSlide(slides[0].id);
          setActive(0);

          if (timeOutSlider.current) {
            clearTimeout(timeOutSlider.current);
          }

          timeOutSlider.current = setTimeout(() => {
            transitionOn(0);
            setStyleTransformSlides(slidesIndexDefault);
          }, newSettings.speed);
        } else {
          setIdActiveSlide(slides[active + 1].id);
          setActive((state) => state + 1);
        }
        newSettings.handleSlide?.();
      }, newSettings.autoplaySpeed);
    };

    if (newSettings.autoplay && !isStopAutoplay && refSlides.current)
      handleAutoPlay();

    return () => {
      timeInterValAutoPlay && clearInterval(timeInterValAutoPlay);
    };
  }, [newSettings.autoplay, active, isStopAutoplay]);

  const slides = useMemo(() => {
    const newSlides: Array<SlideInter> = [];
    if (widthToMove && Array.isArray(data) && data.length > 1) {
      const slideShow = Number(newSettings.slidesToShow ?? SLIDES_TO_SHOW);
      const slideScroll = Number(
        newSettings.slidesToScroll ?? SLIDES_TO_SCROLL
      );
      let index = 0;

      if (data.length <= slideShow) {
        const item: SlideInter = { id: "", slide: [] };
        item.slide.push(data);
        newSlides.push(item);
      } else {
        while (true) {
          if (index >= data.length) {
            break;
          }

          const item: SlideInter = {
            id: "_" + Math.random().toString(36).substr(2, 9),
            slide: [],
          };

          let countIndex = index;

          for (
            let indexSlideShow = 1;
            indexSlideShow <= slideShow;
            indexSlideShow++
          ) {
            if (data[countIndex]) {
              item.slide.push(data[countIndex]);
              countIndex++;
            }
            //  else {
            // 	item.slide.push(data[oldIndex]);
            // 	if (oldIndex < index) {
            // 		oldIndex++;
            // 	} else {
            // 		oldIndex = 0;
            // 	}
            // }
          }

          newSlides.push(item);
          index += slideScroll;
        }
      }
    } else {
      const item: SlideInter = { id: "", slide: [] };
      item.slide.push(data);
      newSlides.push(item);
    }

    newSlides.length && setIdActiveSlide(newSlides[0]?.id);

    return newSlides;
  }, [widthToMove]);

  const transitionOn = useCallback(
    (transitionDuration: undefined | number = newSettings.speed): void => {
      if (refSlides && refSlides.current) {
        refSlides.current.style.transition = `transform ${transitionDuration}ms ease-out`;
      }
    },
    [newSettings.speed]
  );

  const handleChangeDot = (index: number) => {
    handleSlideShow(index < active, index);
  };

  const initResponseSlide = () => {
    if (newSettings.responsive && newSettings.responsive.length > 0) {
      let index = 0;
      while (index < newSettings.responsive.length) {
        if (width >= newSettings.responsive[index].breakpoint) {
          const clonedSettings = { ...newSettings };
          const settingResponsive = newSettings.responsive[index].settings;
          for (const [key] of Object.entries(settingResponsive)) {
            clonedSettings[key] = settingResponsive[key];
          }
          setNewSettings(clonedSettings);
          break;
        }
        index++;
      }
    }
  };

  const handleSlideShow = (status: boolean, indexDot: number | null = null) => {
    const index =
      indexDot !== null ? indexDot : status ? active + 1 : active - 1;
    transitionOn();
    if (index >= -1 && index <= slides.length) {
      const farApart = index > active ? index - active : active - index;

      if (farApart > 1) {
        setStyleTransformSlides(index > active ? active + 2 : active - 1);
        setIdActiveSlide(slides[index].id);
        setActive(index);

        if (timeOutSlider.current) {
          clearTimeout(timeOutSlider.current);
        }

        timeOutSlider.current = setTimeout(() => {
          transitionOn(0);
          setStyleTransformSlides(index + 1);
        }, newSettings.speed);
        transitionOn();
      } else {
        setStyleTransformSlides(index + 1);
        if (index > -1 && index <= slides.length - 1) {
          setActive(index);
          setIdActiveSlide(slides[index].id);
        } else {
          const newActive = index < 0 ? slides.length - 1 : 0;
          setActive(newActive);
          setIdActiveSlide(
            index < 0 ? slides[slides.length - 1].id : slides[0].id
          );

          if (timeOutSlider.current) {
            clearTimeout(timeOutSlider.current);
          }

          timeOutSlider.current = setTimeout(() => {
            transitionOn(0);
            setStyleTransformSlides(
              index < 0 ? slides.length : slidesIndexDefault
            );
          }, newSettings.speed);
        }
      }

      newSettings.handleSlide?.();
    }
  };

  const setStyleTransformSlides = (
    index: number,
    width = widthToMove.current
  ) => {
    if (refSlides.current) {
      const currentWidthToMove = width * index;
      refSlides.current.style.transform = `translateX(${-currentWidthToMove}px)`;
    }
  };

  const transitionOff = () => (refSlides.current.style.transition = "none");

  const dotsToScroll = useMemo(() => {
    if (slides.length) {
      if (Array.isArray(data)) {
        const newScroll: any = newSettings.slidesToScroll;

        let dots = [...slides];

        const total = Math.ceil(Number(data.length) / newScroll);

        if (total > 0) {
          dots.length = total;
        } else {
          dots.length = 1;
        }

        return dots;
      }
      return [data];
    }
    return null;
  }, [slides]);

  const touchStart = () => {
    if (slides.length > 1)
      return function (event: any) {
        if (newSettings.autoplay && !isStopAutoplay) setIsStopAutoplay(true);
        transitionOn(1);
        currentTranslate.current = getPositionX(event);
        dragging.current = true;
        startPos.current = getPositionX(event);
        refSlides.current.style.cursor = "grabbing";
      };
  };

  const touchMove = (event: any) => {
    if (slides.length > 1) {
      if (dragging.current) {
        refSlides.current.style.transform = `translateX(-${
          widthToMove.current * (active + 1) -
          (getPositionX(event) - startPos.current)
        }px)`;
        currentTranslate.current = getPositionX(event);
      }
    }
  };

  const setNewActive = (isNext: boolean) => {
    let newActive = active;
    if (newActive < 0) newActive = slides.length - 1;
    else if (newActive === slides.length) newActive = 0;
    return newActive + (isNext ? +1 : -1) + 1;
  };

  const touchEnd = (event: any) => {
    if (slides.length > 1) {
      const currentPosition = getPositionX(event);

      dragging.current = false;

      refSlides.current.style.cursor = "grab";

      if (currentPosition === startPos.current) {
        return;
      }
      const isNext = currentPosition < startPos.current;

      transitionOn();

      handleSlideShow(isNext);

      currentTranslate.current = widthToMove.current * setNewActive(isNext);
      if (!!props.autoplay && isStopAutoplay) setIsStopAutoplay(false);
    }
  };

  return (
    <div
      className={`box-border  block relative  h-full mb-7 ${props.className}`}
    >
      <div className="overflow-hidden">
        <div
          ref={refSlides}
          style={{ width: width ? width * 2 : "" }}
          role="tab"
          tabIndex={0}
          className="flex h-full w-full"
          onTouchStart={touchStart()}
          onMouseDown={touchStart()}
          onTouchMove={touchMove}
          onMouseMove={touchMove}
          onTouchEnd={touchEnd}
          onMouseUp={touchEnd}
          onKeyPress={() => {
            // onKeyPress
          }}
          onMouseLeave={(e) => {
            if (dragging.current) touchEnd(e);
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <SlideView
            slideToShow={newSettings.sildeToShow}
            slides={slides}
            widthToMove={widthToMove.current}
            classSlide={newSettings.classSlide}
          />
        </div>
      </div>

      {newSettings.arrows && slides.length > 1 ? (
        <>
          <div
            className={`${
              newSettings.disabledPrev && active === 0
                ? "opacity-50 "
                : "opacity-100"
            } ${
              newSettings.hiddenPrev ? " hidden " : " block "
            } absolute flex justify-between items-start px-3${
              props.classDivNext
                ? props.classDivNext
                : " top-1/2 transform -translate-y-1/2 -left-[25px]"
            }`}
          >
            <ButtonSlider
              disabled={newSettings.disabledPrev && active === 0}
              className={
                !newSettings.prevArrow
                  ? "flex  w-10 h-10 items-center justify-center bg-gray-300 border border-gray-300 rounded-full"
                  : "" + newSettings.classPrevArrow
              }
              style={newSettings.stylePrevArrow}
              onClick={() => handleSlideShow(false)}
              onDoubleClick={() => handleSlideShow(false)}
            >
              {newSettings.prevArrow ? (
                newSettings.prevArrow()
              ) : (
                <span>{"<"}</span>
              )}
            </ButtonSlider>
          </div>
          <div
            className={`${
              newSettings.disabledNext && active === slides.length - 1
                ? "opacity-50 "
                : "opacity-100"
            } ${
              newSettings.hiddenNext ? " hidden " : " block "
            } absolute flex justify-between items-start px-3 ${
              props.classDivNext
                ? props.classDivNext
                : "right-[-25px] top-1/2 transform -translate-y-1/2"
            }`}
          >
            <ButtonSlider
              disabled={
                newSettings.disabledNext && active === slides.length - 1
              }
              className={
                !newSettings.nextArrow
                  ? "flex  w-10 h-10 items-center justify-center bg-gray-300 border border-gray-300 rounded-full" +
                    newSettings.classNextArrow
                  : "" + newSettings.classNextArrow
              }
              style={newSettings.styleNextArrow}
              onClick={() => handleSlideShow(true)}
              onDoubleClick={() => handleSlideShow(true)}
            >
              {newSettings.nextArrow ? (
                newSettings.nextArrow()
              ) : (
                <span>{">"}</span>
              )}
            </ButtonSlider>
          </div>
        </>
      ) : null}

      <ul
        className={classNames(
          [
            "clear-both -bottom-5 w-full transform flex px-2 justify-center space-x-1",
          ],
          props?.classNameDots ? props?.classNameDots : "absolute"
        )}
      >
        {newSettings.dots &&
          dotsToScroll?.map((_, index) =>
            newSettings.customPaging ? (
              <Fragment key={index}>
                {newSettings.customPaging(
                  () => handleChangeDot(index),
                  idActiveSlide === slides[index]?.id
                )}
              </Fragment>
            ) : (
              <ButtonSlider
                key={index}
                className={
                  `rounded h-5 w-5 flex justify-center items-center ${
                    idActiveSlide === slides[index]?.id
                      ? "border-2 border-gray-600"
                      : "border border-grey-400"
                  }` + newSettings.classSlideDots
                }
                onClick={() => handleChangeDot(index)}
              >
                <span>{index + 1}</span>
              </ButtonSlider>
            )
          )}
      </ul>
    </div>
  );
};

export default SlideShow;
