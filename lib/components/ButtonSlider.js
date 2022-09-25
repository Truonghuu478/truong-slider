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
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var useClickPreventionOnDoubleClick_1 = require("../hooks/useClickPreventionOnDoubleClick");
var ButtonSlider = function (props) {
    var onClick = props.onClick, onDoubleClick = props.onDoubleClick, className = props.className, style = props.style, disabled = props.disabled;
    var _a = (0, useClickPreventionOnDoubleClick_1.useClickPreventionOnDoubleClick)(onClick, onDoubleClick), handleClick = _a[0], handleDoubleClick = _a[1];
    return ((0, jsx_runtime_1.jsx)("button", __assign({ disabled: disabled, className: className, style: __assign({}, style), onDoubleClick: handleDoubleClick, onClick: handleClick }, { children: props.children })));
};
ButtonSlider.defaultProps = {
    onDoubleClick: useClickPreventionOnDoubleClick_1.noop,
    onClick: useClickPreventionOnDoubleClick_1.noop,
};
exports.default = ButtonSlider;
