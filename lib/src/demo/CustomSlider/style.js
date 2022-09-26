"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyleContainer = exports.StyleBlockItem = void 0;
var styled_components_1 = __importDefault(require("styled-components"));
exports.StyleBlockItem = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    color: #3498db;\n    font-size: 36px;\n"], ["\n    color: #3498db;\n    font-size: 36px;\n"])));
exports.StyleContainer = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    width: 70%;\n    margin:0 auto;\n\n"], ["\n    width: 70%;\n    margin:0 auto;\n\n"])));
var templateObject_1, templateObject_2;
