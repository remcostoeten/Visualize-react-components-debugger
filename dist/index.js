"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const react_1 = __importDefault(require("react"));
const VisualizeComponent_1 = require("./VisualizeComponent");
const VisualizeComponent = process.env.NODE_ENV === 'production' ? react_1.default.Fragment : VisualizeComponent_1.VisualizeComponent;
exports.default = VisualizeComponent;
