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
var classnames_1 = __importDefault(require("classnames"));
var react_1 = require("react");
var Slide = function (_a) {
    var data = _a.data, maxWidthSlide = _a.maxWidthSlide, style = _a.style, _b = _a.className, className = _b === void 0 ? "" : _b, isCenter = _a.isCenter;
    var ref_slide = (0, react_1.useRef)();
    return ((0, jsx_runtime_1.jsx)("div", __assign({ style: __assign(__assign({}, style), { width: maxWidthSlide, minHeight: 1 }), ref: ref_slide, className: "".concat(className, " block h-full") }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ style: { width: maxWidthSlide }, className: (0, classnames_1.default)("flex h-full w-full items-center", isCenter ? "justify-center" : "justify-start") }, { children: data.map(function (t, indexSlide) { return ((0, jsx_runtime_1.jsx)(react_1.Fragment, { children: t }, "slide-index" + indexSlide)); }) })) })));
};
exports.default = Slide;
