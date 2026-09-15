"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  primitiveTokens: () => primitiveTokens,
  semanticTokens: () => semanticTokens
});
module.exports = __toCommonJS(index_exports);
var primitiveTokens = {
  color: {
    white: "#ffffff",
    blue300: "#2B7CAB",
    blue500: "#1677ff",
    gray100: "#F8FAFC",
    gray200: "#E5E7EB",
    gray400: "#9CA3AF",
    gray600: "#393E41",
    gray900: "#1C1E1F",
    yellow600: "#F2811D",
    red500: "#FF151A",
    red700: "#8E1A0D"
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px"
  },
  radius: {
    sm: 4,
    md: 8,
    lg: 12
  }
};
var semanticTokens = {
  colorPrimary: primitiveTokens.color.gray600,
  colorSecondary: primitiveTokens.color.red700,
  colorBorder: primitiveTokens.color.blue300,
  colorDisabled: primitiveTokens.color.gray200,
  colorText: primitiveTokens.color.gray900,
  colorTextDisabled: primitiveTokens.color.gray400,
  colorPlaceholder: primitiveTokens.color.blue300,
  colorBackground: primitiveTokens.color.white,
  colorBackgroundSecondary: primitiveTokens.color.gray100,
  borderRadius: primitiveTokens.radius.md
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  primitiveTokens,
  semanticTokens
});
//# sourceMappingURL=index.js.map