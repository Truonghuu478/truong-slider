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
exports.useCancellablePromises = void 0;
var react_1 = require("react");
var useCancellablePromises = function () {
    var pendingPromises = (0, react_1.useRef)([]);
    var appendPendingPromise = function (promise) {
        return (pendingPromises.current = __spreadArray(__spreadArray([], pendingPromises.current, true), [promise], false));
    };
    var removePendingPromise = function (promise) {
        return (pendingPromises.current = pendingPromises.current.filter(function (p) { return p !== promise; }));
    };
    var clearPendingPromises = function () { return pendingPromises.current.map(function (p) { return p.cancel(); }); };
    var api = {
        appendPendingPromise: appendPendingPromise,
        removePendingPromise: removePendingPromise,
        clearPendingPromises: clearPendingPromises,
    };
    return api;
};
exports.useCancellablePromises = useCancellablePromises;
