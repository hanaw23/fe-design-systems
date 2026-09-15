// src/index.ts
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
    sm: "4px",
    md: "8px",
    lg: "12px"
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
export {
  primitiveTokens,
  semanticTokens
};
//# sourceMappingURL=index.mjs.map