"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = __importStar(require("react"));
const VisualizeComponent = ({ border = "solid", showAlert = false, children, width = "10px", color = "red", invert = false, validPorts = ["3000", "3001", "9001", "9000", "8000", "8888"], }) => {
    const [showToast, setShowToast] = (0, react_1.useState)(false);
    const devMode = validPorts.includes(window.location.port);
    if (!devMode) {
        return (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children });
    }
    const toastAlert = () => {
        return ((0, jsx_runtime_1.jsxs)("div", { style: {
                position: "fixed",
                bottom: "20px",
                left: "50%",
                transform: "translateX(-50%)",
                padding: "20px 55px 20px 20px",
                backgroundColor: invert ? "white" : "#090909",
                color: invert ? "rgb(240 3.7% 15.9%)" : "#FFFFFF",
                borderRadius: "8px",
                border: "1px solid rgb(240 3.7% 15.9%)",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                zIndex: 9999,
            }, children: ["Component is mounted!", (0, jsx_runtime_1.jsx)("button", { style: {
                        position: "absolute",
                        top: "21px",
                        right: "20px",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                        zIndex: 9999,
                        color: invert ? "#090909" : "rgb(240 3.7% 15.9%)",
                    }, onClick: () => setShowToast(false), children: (0, jsx_runtime_1.jsx)("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", version: "1.1", viewBox: "0 0 26 26", xmlSpace: "preserve", children: (0, jsx_runtime_1.jsx)("path", { fill: invert ? "rgb(240 3.7% 15.9%)" : "#fff", d: "M21.125 0H4.875A4.874 4.874 0 000 4.875v16.25A4.874 4.874 0 004.875 26h16.25A4.874 4.874 0 0026 21.125V4.875A4.874 4.874 0 0021.125 0zM18.78 17.394l-1.388 1.387a.654.654 0 01-.924 0L13 15.313 9.533 18.78a.653.653 0 01-.925-.002L7.22 17.394a.66.66 0 010-.926l3.468-3.467-3.467-3.467a.657.657 0 010-.925l1.388-1.388a.651.651 0 01.925 0L13 10.689l3.468-3.468a.65.65 0 01.924 0l1.388 1.386a.66.66 0 01.001.927l-3.468 3.467 3.468 3.467a.66.66 0 01-.001.926z" }) }) })] }));
    };
    (0, react_1.useEffect)(() => {
        if (showAlert) {
            setShowToast(true);
        }
    }, [showAlert]);
    return ((0, jsx_runtime_1.jsxs)("div", { style: { outline: `${width} ${border} ${color}` }, children: [children, showAlert && showToast && toastAlert()] }));
};
exports.default = VisualizeComponent;
