"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var Slide_1 = require("./Slide");
var SlideView = function (_a) {
    var slides = _a.slides, widthToMove = _a.widthToMove, _b = _a.classSlide, classSlide = _b === void 0 ? "" : _b, slideToShow = _a.slideToShow;
    var newSlide = slides.length
        ? __spreadArray(__spreadArray([slides[slides.length - 1]], slides, true), [slides[0]], false) : slides;
    return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: newSlide.length
            ? newSlide.map(function (slider, index) { return ((0, jsx_runtime_1.jsx)(Slide_1.default, { isCenter: slideToShow === slider.slide.length, className: classSlide, maxWidthSlide: widthToMove, data: (slider === null || slider === void 0 ? void 0 : slider.slide) || [] }, "slide" + index)); })
            : null }));
};
exports.default = SlideView;
