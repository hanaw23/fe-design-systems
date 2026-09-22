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
  colors: () => colors,
  primitiveTokens: () => primitiveTokens,
  radius: () => radius,
  semanticTokens: () => semanticTokens,
  spacing: () => spacing,
  typography: () => typography
});
module.exports = __toCommonJS(index_exports);

// src/colors.ts
var colors = {
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
  red700: "#8E1A0D",
  green500: "#3ECC62"
};

// src/spacing.ts
var spacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px"
};

// src/radius.ts
var radius = {
  sm: 4,
  md: 8,
  lg: 12
};

// src/typography.ts
var typography = {
  fontFamily: {
    sans: "Roboto, system-ui, sans-serif",
    mono: "monospace"
  },
  fontSize: {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "18px",
    xl: "24px",
    "2xl": "32px"
  },
  fontWeight: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  lineHeight: {
    tight: 1.25,
    normal: 1.5,
    relaxed: 1.75
  }
};

// src/primitive.ts
var primitiveTokens = {
  color: {
    white: colors.white,
    blue300: colors.blue300,
    blue500: colors.blue500,
    gray100: colors.gray100,
    gray200: colors.gray200,
    gray400: colors.gray400,
    gray600: colors.gray600,
    gray900: colors.gray900,
    yellow600: colors.yellow600,
    red500: colors.red500,
    red700: colors.red700,
    green500: colors.green500
  },
  spacing: {
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.md,
    lg: spacing.lg,
    xl: spacing.xl
  },
  radius: {
    sm: radius.sm,
    md: radius.md,
    lg: radius.lg
  }
};

// src/semantic.ts
var semanticTokens = {
  color: {
    primary: colors.gray600,
    secondary: colors.red700,
    border: colors.gray400,
    disabled: colors.gray200,
    error: colors.red500,
    warning: colors.yellow600,
    success: colors.green500,
    text: colors.gray900,
    textSecondary: colors.gray400,
    background: colors.white,
    backgroundSecondary: colors.gray100
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  colors,
  primitiveTokens,
  radius,
  semanticTokens,
  spacing,
  typography
});
//# sourceMappingURL=index.js.map