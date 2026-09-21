import { colors } from "./colors";
import { radius } from "./radius";
import { spacing } from "./spacing";

export const primitiveTokens = {
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
    green500: colors.green500,
  },

  spacing: {
    xs: spacing.xs,
    sm: spacing.sm,
    md: spacing.md,
    lg: spacing.lg,
    xl: spacing.xl,
  },

  radius: {
    sm: radius.sm,
    md: radius.md,
    lg: radius.lg,
  },
} as const;
