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
  colorPrimary: colors.gray600,
  colorSecondary: colors.red700,
  colorBorder: colors.gray400,
  colorDisabled: colors.gray200,
  colorError: colors.red500,
  colorWarning: colors.yellow600,
  colorSuccess: colors.green500,
  colorText: colors.gray900,
  colorTextSecondary: colors.gray400,
  colorBackground: colors.white,
  colorBackgroundSecondary: colors.gray100,
  borderRadius: radius.md
};
export {
  colors,
  primitiveTokens,
  radius,
  semanticTokens,
  spacing,
  typography
};
//# sourceMappingURL=index.mjs.map