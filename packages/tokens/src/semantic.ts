import { colors } from "./colors";
import { radius } from "./radius";

export const semanticTokens = {
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

  borderRadius: radius.md,
} as const;
