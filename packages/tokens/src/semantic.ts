import { colors } from "./colors";
import { radius } from "./radius";

export const semanticTokens = {
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
    backgroundSecondary: colors.gray100,
  },
} as const;
