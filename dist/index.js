var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  VisualizeComponent: () => VisualizeComponent2
});
module.exports = __toCommonJS(src_exports);
var import_react2 = __toESM(require("react"));

// src/VisualizeComponent.tsx
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var devMode = process.env.NODE_ENV !== "production";
var VisualizeComponent = ({ borderTypes = "dashed", showAlert = false, children, width = "10px", color = "red", invert = false }) => {
  const [showToast, setShowToast] = (0, import_react.useState)(false);
  if (!devMode) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
  }
  const toastAlert = () => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
      "div",
      {
        style: {
          position: "fixed",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          padding: "20px 55px 20px 20px",
          backgroundColor: invert ? "white" : "#090909",
          color: invert ? "#090909" : "rgb(240 3.7% 15.9%)",
          borderRadius: "8px",
          border: "1px solid rgb(240 3.7% 15.9%)",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
          zIndex: 9999
        },
        children: [
          "Component is mounted!",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            "button",
            {
              style: {
                position: "absolute",
                top: "21px",
                right: "20px",
                background: "none",
                border: "none",
                cursor: "pointer",
                zIndex: 9999,
                color: invert ? "#090909" : "rgb(240 3.7% 15.9%)"
              },
              onClick: () => setShowToast(false),
              children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                "svg",
                {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "24",
                  height: "24",
                  version: "1.1",
                  viewBox: "0 0 26 26",
                  xmlSpace: "preserve",
                  children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
                    "path",
                    {
                      fill: invert ? "rgb(240 3.7% 15.9%)" : "#fff",
                      d: "M21.125 0H4.875A4.874 4.874 0 000 4.875v16.25A4.874 4.874 0 004.875 26h16.25A4.874 4.874 0 0026 21.125V4.875A4.874 4.874 0 0021.125 0zM18.78 17.394l-1.388 1.387a.654.654 0 01-.924 0L13 15.313 9.533 18.78a.653.653 0 01-.925-.002L7.22 17.394a.66.66 0 010-.926l3.468-3.467-3.467-3.467a.657.657 0 010-.925l1.388-1.388a.651.651 0 01.925 0L13 10.689l3.468-3.468a.65.65 0 01.924 0l1.388 1.386a.66.66 0 01.001.927l-3.468 3.467 3.468 3.467a.66.66 0 01-.001.926z"
                    }
                  )
                }
              )
            }
          )
        ]
      }
    );
  };
  (0, import_react.useEffect)(() => {
    if (showAlert) {
      setShowToast(true);
    }
  }, [showAlert]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: { outline: `${width} ${borderTypes} ${color}` }, children: [
    children,
    showAlert && showToast && toastAlert()
  ] });
};

// src/index.ts
var VisualizeComponent2 = process.env.NODE_ENV === "production" ? import_react2.default.Fragment : VisualizeComponent;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  VisualizeComponent
});
//# sourceMappingURL=index.js.map