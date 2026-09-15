import { semanticTokens } from "@fe-design-systems/tokens";

export const theme = {
  token: {
    colorPrimary: semanticTokens.colorPrimary,
    colorText: semanticTokens.colorText,
    colorBorder: semanticTokens.colorBorder,
    colorTextPlaceholder: semanticTokens.colorTextSecondary,
    colorError: semanticTokens.colorError,
    colorBgBase: semanticTokens.colorBackground,
    borderRadius: semanticTokens.borderRadius,
  },
  components: {
    Button: {
      borderRadius: semanticTokens.borderRadius,
    },
  },
};
