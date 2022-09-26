"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.useClickPreventionOnDoubleClick = exports.delay = exports.noop = void 0;
var cancellablePromise_1 = __importDefault(require("./cancellablePromise"));
var useCancellablePromises_1 = require("./useCancellablePromises");
var DELAY_TIMEOUT = 200;
function noop() { }
exports.noop = noop;
var delay = function (n) { return new Promise(function (resolve) { return setTimeout(resolve, n); }); };
exports.delay = delay;
var useClickPreventionOnDoubleClick = function (onClick, onDoubleClick) {
    var api = (0, useCancellablePromises_1.useCancellablePromises)();
    var handleClick = function () {
        api.clearPendingPromises();
        var waitForClick = (0, cancellablePromise_1.default)((0, exports.delay)(DELAY_TIMEOUT));
        api.appendPendingPromise(waitForClick);
        return waitForClick.promise
            .then(function () {
            api.removePendingPromise(waitForClick);
            onClick();
        })
            .catch(function (errorInfo) {
            api.removePendingPromise(waitForClick);
            if (!errorInfo.isCanceled) {
                throw errorInfo.error;
            }
        });
    };
    var handleDoubleClick = function () {
        api.clearPendingPromises();
        onDoubleClick();
    };
    return [handleClick, handleDoubleClick];
};
exports.useClickPreventionOnDoubleClick = useClickPreventionOnDoubleClick;
