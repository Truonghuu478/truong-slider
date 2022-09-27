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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var truong_slider_1 = __importDefault(require("truong-slider"));
var style_1 = require("./style");
var SliderDemo = truong_slider_1.default;
var CustomSlider = function () {
    var settings = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
    };
    return ((0, jsx_runtime_1.jsx)(style_1.StyleContainer, { children: (0, jsx_runtime_1.jsx)(SliderDemo, __assign({}, settings, { children: Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9], function (x) { return ((0, jsx_runtime_1.jsx)(style_1.StyleBlockItem, { children: x }, x)); }) })) }));
};
exports.default = CustomSlider;
