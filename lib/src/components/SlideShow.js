"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var classnames_1 = __importDefault(require("classnames"));
var components_1 = require("../components");
var useWindowDimensions_1 = require("../hooks/useWindowDimensions");
var react_1 = require("react");
var DESKTOP = 1024;
var TABLET = 600;
var MOBILE = 480;
var SLIDES_TO_SHOW = 3;
var SLIDES_TO_SCROLL = 1;
var slidesIndexDefault = 1;
var defaultActive = 0;
var defaultIdSlide = "";
var SPEED_AUTO = 2000;
var SPEED = 500;
var SettingDefault = /** @class */ (function () {
    function SettingDefault(props) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
        this.dots = (_a = props === null || props === void 0 ? void 0 : props.dots) !== null && _a !== void 0 ? _a : false;
        this.arrows = (_b = props === null || props === void 0 ? void 0 : props.arrows) !== null && _b !== void 0 ? _b : true;
        this.slidesToShow = (_c = props === null || props === void 0 ? void 0 : props.slidesToShow) !== null && _c !== void 0 ? _c : SLIDES_TO_SHOW;
        this.slidesToScroll = (_d = props === null || props === void 0 ? void 0 : props.slidesToScroll) !== null && _d !== void 0 ? _d : SLIDES_TO_SCROLL;
        this.nextArrow = (_e = props === null || props === void 0 ? void 0 : props.nextArrow) !== null && _e !== void 0 ? _e : null;
        this.prevArrow = (_f = props === null || props === void 0 ? void 0 : props.prevArrow) !== null && _f !== void 0 ? _f : null;
        this.handleSlide = (_g = props === null || props === void 0 ? void 0 : props.handleSlide) !== null && _g !== void 0 ? _g : null;
        this.customPaging = (_h = props === null || props === void 0 ? void 0 : props.customPaging) !== null && _h !== void 0 ? _h : null;
        this.speed = (_j = props === null || props === void 0 ? void 0 : props.speed) !== null && _j !== void 0 ? _j : SPEED; // ms
        this.autoplay = (_k = props === null || props === void 0 ? void 0 : props.autoplay) !== null && _k !== void 0 ? _k : false;
        this.autoplaySpeed = (_l = props === null || props === void 0 ? void 0 : props.autoplaySpeed) !== null && _l !== void 0 ? _l : SPEED_AUTO;
        this.classSlideDots = (_m = props === null || props === void 0 ? void 0 : props.classSlideDots) !== null && _m !== void 0 ? _m : "";
        this.classSlide = (_o = props === null || props === void 0 ? void 0 : props.classSlide) !== null && _o !== void 0 ? _o : "";
        this.classPrevArrow = (_p = props === null || props === void 0 ? void 0 : props.classPrevArrow) !== null && _p !== void 0 ? _p : "";
        this.classNextArrow = (_q = props === null || props === void 0 ? void 0 : props.classNextArrow) !== null && _q !== void 0 ? _q : "";
        this.disabledPrev = (_r = props === null || props === void 0 ? void 0 : props.disabledPrev) !== null && _r !== void 0 ? _r : false;
        this.disabledNext = (_s = props === null || props === void 0 ? void 0 : props.disabledNext) !== null && _s !== void 0 ? _s : false;
        this.hiddenPrev = (_t = props === null || props === void 0 ? void 0 : props.hiddenPrev) !== null && _t !== void 0 ? _t : false;
        this.hiddenNext = (_u = props === null || props === void 0 ? void 0 : props.hiddenNext) !== null && _u !== void 0 ? _u : false;
        ((this.responsive = (_v = props === null || props === void 0 ? void 0 : props.responsive) !== null && _v !== void 0 ? _v : [
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
            (this.stylePrevArrow = (_w = props === null || props === void 0 ? void 0 : props.stylePrevArrow) !== null && _w !== void 0 ? _w : {})),
            (this.styleNextArrow = (_x = props === null || props === void 0 ? void 0 : props.styleNextArrow) !== null && _x !== void 0 ? _x : {});
    }
    return SettingDefault;
}());
var SlideShow = function (props) {
    var data = props.children;
    var _a = (0, react_1.useState)(new SettingDefault(props)), newSettings = _a[0], setNewSettings = _a[1];
    var _b = (0, react_1.useState)(defaultIdSlide), idActiveSlide = _b[0], setIdActiveSlide = _b[1];
    var _c = (0, react_1.useState)(defaultActive), active = _c[0], setActive = _c[1];
    var _d = (0, react_1.useState)(!!props.autoplay), isStopAutoplay = _d[0], setIsStopAutoplay = _d[1];
    var timeOutSlider = (0, react_1.useRef)(null);
    var width = (0, useWindowDimensions_1.useWindowDimensions)().width;
    // ref viewSlider
    var widthToMove = (0, react_1.useRef)(0);
    var refSlides = (0, react_1.useRef)(null);
    var dragging = (0, react_1.useRef)(false);
    var startPos = (0, react_1.useRef)(0);
    var currentTranslate = (0, react_1.useRef)(0);
    (0, react_1.useEffect)(function () {
        var _a;
        if (refSlides === null || refSlides === void 0 ? void 0 : refSlides.current) {
            (refSlides === null || refSlides === void 0 ? void 0 : refSlides.current) && transitionOff();
            var maxWidthSlides = (_a = refSlides === null || refSlides === void 0 ? void 0 : refSlides.current) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().width;
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
    var getPositionX = function (event) {
        var _a, _b;
        return ((_a = event === null || event === void 0 ? void 0 : event.type) === null || _a === void 0 ? void 0 : _a.includes("mouse"))
            ? event === null || event === void 0 ? void 0 : event.pageX
            : (_b = event === null || event === void 0 ? void 0 : event.changedTouches[0]) === null || _b === void 0 ? void 0 : _b.clientX;
    };
    (0, react_1.useEffect)(function () {
        setNewSettings(new SettingDefault(__assign({}, props)));
    }, [
        props.disabledPrev,
        props.disabledNext,
        props.hiddenPrev,
        props.hiddenNext,
        props.responsive,
        props,
    ]);
    (0, react_1.useEffect)(function () {
        var timeInterValAutoPlay = null;
        var handleAutoPlay = function () {
            timeInterValAutoPlay = setInterval(function () {
                var _a;
                transitionOn();
                // refSlides.current.style.transitionDuration = `${newSettings.speed}ms`;
                setStyleTransformSlides(active + 2);
                if (active >= slides.length - 1) {
                    setIdActiveSlide(slides[0].id);
                    setActive(0);
                    if (timeOutSlider.current) {
                        clearTimeout(timeOutSlider.current);
                    }
                    timeOutSlider.current = setTimeout(function () {
                        transitionOn(0);
                        setStyleTransformSlides(slidesIndexDefault);
                    }, newSettings.speed);
                }
                else {
                    setIdActiveSlide(slides[active + 1].id);
                    setActive(function (state) { return state + 1; });
                }
                (_a = newSettings.handleSlide) === null || _a === void 0 ? void 0 : _a.call(newSettings);
            }, newSettings.autoplaySpeed);
        };
        if (newSettings.autoplay && !isStopAutoplay && refSlides.current)
            handleAutoPlay();
        return function () {
            timeInterValAutoPlay && clearInterval(timeInterValAutoPlay);
        };
    }, [newSettings.autoplay, active, isStopAutoplay]);
    var slides = (0, react_1.useMemo)(function () {
        var _a, _b, _c;
        var newSlides = [];
        if (widthToMove && Array.isArray(data) && data.length > 1) {
            var slideShow = Number((_a = newSettings.slidesToShow) !== null && _a !== void 0 ? _a : SLIDES_TO_SHOW);
            var slideScroll = Number((_b = newSettings.slidesToScroll) !== null && _b !== void 0 ? _b : SLIDES_TO_SCROLL);
            var index = 0;
            if (data.length <= slideShow) {
                var item = { id: "", slide: [] };
                item.slide.push(data);
                newSlides.push(item);
            }
            else {
                while (true) {
                    if (index >= data.length) {
                        break;
                    }
                    var item = {
                        id: "_" + Math.random().toString(36).substr(2, 9),
                        slide: [],
                    };
                    var countIndex = index;
                    for (var indexSlideShow = 1; indexSlideShow <= slideShow; indexSlideShow++) {
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
        }
        else {
            var item = { id: "", slide: [] };
            item.slide.push(data);
            newSlides.push(item);
        }
        newSlides.length && setIdActiveSlide((_c = newSlides[0]) === null || _c === void 0 ? void 0 : _c.id);
        return newSlides;
    }, [widthToMove]);
    var transitionOn = (0, react_1.useCallback)(function (transitionDuration) {
        if (transitionDuration === void 0) { transitionDuration = newSettings.speed; }
        if (refSlides && refSlides.current) {
            refSlides.current.style.transition = "transform ".concat(transitionDuration, "ms ease-out");
        }
    }, [newSettings.speed]);
    var handleChangeDot = function (index) {
        handleSlideShow(index < active, index);
    };
    var initResponseSlide = function () {
        if (newSettings.responsive && newSettings.responsive.length > 0) {
            var index = 0;
            while (index < newSettings.responsive.length) {
                if (width >= newSettings.responsive[index].breakpoint) {
                    var clonedSettings = __assign({}, newSettings);
                    var settingResponsive = newSettings.responsive[index].settings;
                    for (var _i = 0, _a = Object.entries(settingResponsive); _i < _a.length; _i++) {
                        var key = _a[_i][0];
                        clonedSettings[key] = settingResponsive[key];
                    }
                    setNewSettings(clonedSettings);
                    break;
                }
                index++;
            }
        }
    };
    var handleSlideShow = function (status, indexDot) {
        var _a;
        if (indexDot === void 0) { indexDot = null; }
        var index = indexDot !== null ? indexDot : status ? active + 1 : active - 1;
        transitionOn();
        if (index >= -1 && index <= slides.length) {
            var farApart = index > active ? index - active : active - index;
            if (farApart > 1) {
                setStyleTransformSlides(index > active ? active + 2 : active - 1);
                setIdActiveSlide(slides[index].id);
                setActive(index);
                if (timeOutSlider.current) {
                    clearTimeout(timeOutSlider.current);
                }
                timeOutSlider.current = setTimeout(function () {
                    transitionOn(0);
                    setStyleTransformSlides(index + 1);
                }, newSettings.speed);
                transitionOn();
            }
            else {
                setStyleTransformSlides(index + 1);
                if (index > -1 && index <= slides.length - 1) {
                    setActive(index);
                    setIdActiveSlide(slides[index].id);
                }
                else {
                    var newActive = index < 0 ? slides.length - 1 : 0;
                    setActive(newActive);
                    setIdActiveSlide(index < 0 ? slides[slides.length - 1].id : slides[0].id);
                    if (timeOutSlider.current) {
                        clearTimeout(timeOutSlider.current);
                    }
                    timeOutSlider.current = setTimeout(function () {
                        transitionOn(0);
                        setStyleTransformSlides(index < 0 ? slides.length : slidesIndexDefault);
                    }, newSettings.speed);
                }
            }
            (_a = newSettings.handleSlide) === null || _a === void 0 ? void 0 : _a.call(newSettings);
        }
    };
    var setStyleTransformSlides = function (index, width) {
        if (width === void 0) { width = widthToMove.current; }
        if (refSlides.current) {
            var currentWidthToMove = width * index;
            refSlides.current.style.transform = "translateX(".concat(-currentWidthToMove, "px)");
        }
    };
    var transitionOff = function () { return (refSlides.current.style.transition = "none"); };
    var dotsToScroll = (0, react_1.useMemo)(function () {
        if (slides.length) {
            if (Array.isArray(data)) {
                var newScroll = newSettings.slidesToScroll;
                var dots = __spreadArray([], slides, true);
                var total = Math.ceil(Number(data.length) / newScroll);
                if (total > 0) {
                    dots.length = total;
                }
                else {
                    dots.length = 1;
                }
                return dots;
            }
            return [data];
        }
        return null;
    }, [slides]);
    var touchStart = function () {
        if (slides.length > 1)
            return function (event) {
                if (newSettings.autoplay && !isStopAutoplay)
                    setIsStopAutoplay(true);
                transitionOn(1);
                currentTranslate.current = getPositionX(event);
                dragging.current = true;
                startPos.current = getPositionX(event);
                refSlides.current.style.cursor = "grabbing";
            };
    };
    var touchMove = function (event) {
        if (slides.length > 1) {
            if (dragging.current) {
                refSlides.current.style.transform = "translateX(-".concat(widthToMove.current * (active + 1) -
                    (getPositionX(event) - startPos.current), "px)");
                currentTranslate.current = getPositionX(event);
            }
        }
    };
    var setNewActive = function (isNext) {
        var newActive = active;
        if (newActive < 0)
            newActive = slides.length - 1;
        else if (newActive === slides.length)
            newActive = 0;
        return newActive + (isNext ? +1 : -1) + 1;
    };
    var touchEnd = function (event) {
        if (slides.length > 1) {
            var currentPosition = getPositionX(event);
            dragging.current = false;
            refSlides.current.style.cursor = "grab";
            if (currentPosition === startPos.current) {
                return;
            }
            var isNext = currentPosition < startPos.current;
            transitionOn();
            handleSlideShow(isNext);
            currentTranslate.current = widthToMove.current * setNewActive(isNext);
            if (!!props.autoplay && isStopAutoplay)
                setIsStopAutoplay(false);
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", __assign({ className: "box-border  block relative  h-full mb-7 ".concat(props.className) }, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "overflow-hidden" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ ref: refSlides, style: { width: width ? width * 2 : "" }, role: "tab", tabIndex: 0, className: "flex h-full w-full", onTouchStart: touchStart(), onMouseDown: touchStart(), onTouchMove: touchMove, onMouseMove: touchMove, onTouchEnd: touchEnd, onMouseUp: touchEnd, onKeyPress: function () {
                        // onKeyPress
                    }, onMouseLeave: function (e) {
                        if (dragging.current)
                            touchEnd(e);
                    }, onContextMenu: function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                    } }, { children: (0, jsx_runtime_1.jsx)(components_1.SlideView, { slideToShow: newSettings.sildeToShow, slides: slides, widthToMove: widthToMove.current, classSlide: newSettings.classSlide }) })) })), newSettings.arrows && slides.length > 1 ? ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ className: "".concat(newSettings.disabledPrev && active === 0
                            ? "opacity-50 "
                            : "opacity-100", " ").concat(newSettings.hiddenPrev ? " hidden " : " block ", " absolute flex justify-between items-start px-3").concat(props.classDivNext
                            ? props.classDivNext
                            : " top-1/2 transform -translate-y-1/2 -left-[25px]") }, { children: (0, jsx_runtime_1.jsx)(components_1.ButtonSlider, __assign({ disabled: newSettings.disabledPrev && active === 0, className: !newSettings.prevArrow
                                ? "flex  w-10 h-10 items-center justify-center bg-gray-300 border border-gray-300 rounded-full"
                                : "" + newSettings.classPrevArrow, style: newSettings.stylePrevArrow, onClick: function () { return handleSlideShow(false); }, onDoubleClick: function () { return handleSlideShow(false); } }, { children: newSettings.prevArrow ? (newSettings.prevArrow()) : ((0, jsx_runtime_1.jsx)("span", { children: "<" })) })) })), (0, jsx_runtime_1.jsx)("div", __assign({ className: "".concat(newSettings.disabledNext && active === slides.length - 1
                            ? "opacity-50 "
                            : "opacity-100", " ").concat(newSettings.hiddenNext ? " hidden " : " block ", " absolute flex justify-between items-start px-3 ").concat(props.classDivNext
                            ? props.classDivNext
                            : "right-[-25px] top-1/2 transform -translate-y-1/2") }, { children: (0, jsx_runtime_1.jsx)(components_1.ButtonSlider, __assign({ disabled: newSettings.disabledNext && active === slides.length - 1, className: !newSettings.nextArrow
                                ? "flex  w-10 h-10 items-center justify-center bg-gray-300 border border-gray-300 rounded-full" +
                                    newSettings.classNextArrow
                                : "" + newSettings.classNextArrow, style: newSettings.styleNextArrow, onClick: function () { return handleSlideShow(true); }, onDoubleClick: function () { return handleSlideShow(true); } }, { children: newSettings.nextArrow ? (newSettings.nextArrow()) : ((0, jsx_runtime_1.jsx)("span", { children: ">" })) })) }))] })) : null, (0, jsx_runtime_1.jsx)("ul", __assign({ className: (0, classnames_1.default)([
                    "clear-both -bottom-5 w-full transform flex px-2 justify-center space-x-1",
                ], (props === null || props === void 0 ? void 0 : props.classNameDots) ? props === null || props === void 0 ? void 0 : props.classNameDots : "absolute") }, { children: newSettings.dots &&
                    (dotsToScroll === null || dotsToScroll === void 0 ? void 0 : dotsToScroll.map(function (_, index) {
                        var _a, _b;
                        return newSettings.customPaging ? ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: newSettings.customPaging(function () { return handleChangeDot(index); }, idActiveSlide === ((_a = slides[index]) === null || _a === void 0 ? void 0 : _a.id)) }, index)) : ((0, jsx_runtime_1.jsx)(components_1.ButtonSlider, __assign({ className: "rounded h-5 w-5 flex justify-center items-center ".concat(idActiveSlide === ((_b = slides[index]) === null || _b === void 0 ? void 0 : _b.id)
                                ? "border-2 border-gray-600"
                                : "border border-grey-400") + newSettings.classSlideDots, onClick: function () { return handleChangeDot(index); } }, { children: (0, jsx_runtime_1.jsx)("span", { children: index + 1 }) }), index));
                    })) }))] })));
};
exports.default = SlideShow;
