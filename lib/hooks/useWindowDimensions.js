"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWindowDimensions = void 0;
var react_1 = require("react");
var useWindowDimensions = function () {
    var _a = (0, react_1.useState)({
        width: undefined,
        height: undefined,
    }), windowDimensions = _a[0], setWindowDimensions = _a[1];
    (0, react_1.useEffect)(function () {
        var handleResize = function () {
            return setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return function () { return window.removeEventListener("resize", handleResize); };
    }, []);
    return windowDimensions;
};
exports.useWindowDimensions = useWindowDimensions;
