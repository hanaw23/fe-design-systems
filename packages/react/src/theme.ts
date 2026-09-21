import { semanticTokens, primitiveTokens } from "@fe-design-systems/tokens";

export const theme = {
  token: {
    colorPrimary: semanticTokens.colorPrimary,
    colorText: semanticTokens.colorText,
    colorBorder: semanticTokens.colorBorder,
    colorTextPlaceholder: semanticTokens.colorTextSecondary,
    colorError: semanticTokens.colorError,
    colorWarning: semanticTokens.colorWarning,
    colorSuccess: semanticTokens.colorSuccess,
    colorBgBase: semanticTokens.colorBackground,
    borderRadius: semanticTokens.borderRadius,
  },
};

export const buttonTheme = {
  primary: {
    solid: {
      background: primitiveTokens.color.gray600,
      color: primitiveTokens.color.white,
      borderColor: primitiveTokens.color.gray600,

      hover: {
        background: primitiveTokens.color.gray900,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.gray900,
      },

      active: {
        background: primitiveTokens.color.gray900,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.gray900,
      },
    },

    outline: {
      background: primitiveTokens.color.white,
      color: primitiveTokens.color.gray600,
      borderColor: primitiveTokens.color.gray600,

      hover: {
        background: primitiveTokens.color.gray600,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.gray600,
      },

      active: {
        background: primitiveTokens.color.gray900,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.gray900,
      },
    },
  },

  secondary: {
    solid: {
      background: primitiveTokens.color.red700,
      color: primitiveTokens.color.white,
      borderColor: primitiveTokens.color.red700,

      hover: {
        background: primitiveTokens.color.red500,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.red500,
      },

      active: {
        background: primitiveTokens.color.red500,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.red500,
      },
    },

    outline: {
      background: primitiveTokens.color.white,
      color: primitiveTokens.color.red700,
      borderColor: primitiveTokens.color.red700,

      hover: {
        background: primitiveTokens.color.red700,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.red700,
      },

      active: {
        background: primitiveTokens.color.red500,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.red500,
      },
    },
  },

  success: {
    solid: {
      background: primitiveTokens.color.green500,
      color: primitiveTokens.color.white,
      borderColor: primitiveTokens.color.green500,

      hover: {
        background: primitiveTokens.color.green500,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.green500,
      },

      active: {
        background: primitiveTokens.color.green500,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.green500,
      },
    },

    outline: {
      background: primitiveTokens.color.white,
      color: primitiveTokens.color.green500,
      borderColor: primitiveTokens.color.green500,

      hover: {
        background: primitiveTokens.color.green500,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.green500,
      },

      active: {
        background: primitiveTokens.color.green500,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.green500,
      },
    },
  },

  danger: {
    solid: {
      background: primitiveTokens.color.red500,
      color: primitiveTokens.color.white,
      borderColor: primitiveTokens.color.red500,

      hover: {
        background: primitiveTokens.color.red700,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.red700,
      },

      active: {
        background: primitiveTokens.color.red700,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.red700,
      },
    },

    outline: {
      background: primitiveTokens.color.white,
      color: primitiveTokens.color.red500,
      borderColor: primitiveTokens.color.red500,

      hover: {
        background: primitiveTokens.color.red500,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.red500,
      },

      active: {
        background: primitiveTokens.color.red700,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.red700,
      },
    },
  },

  warning: {
    solid: {
      background: primitiveTokens.color.yellow600,
      color: primitiveTokens.color.white,
      borderColor: primitiveTokens.color.yellow600,

      hover: {
        background: primitiveTokens.color.yellow600,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.yellow600,
      },

      active: {
        background: primitiveTokens.color.yellow600,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.yellow600,
      },
    },

    outline: {
      background: primitiveTokens.color.white,
      color: primitiveTokens.color.yellow600,
      borderColor: primitiveTokens.color.yellow600,

      hover: {
        background: primitiveTokens.color.yellow600,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.yellow600,
      },

      active: {
        background: primitiveTokens.color.yellow600,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.yellow600,
      },
    },
  },
} as const;

export const selectTheme = {
  default: {
    background: semanticTokens.colorBackground,
    color: semanticTokens.colorText,
    borderColor: semanticTokens.colorDisabled,
  },

  disabled: {
    background: semanticTokens.colorDisabled,
    color: semanticTokens.colorTextDisabled,
    borderColor: semanticTokens.colorDisabledr,
  },
} as const;

export const inputTheme = {
  default: {
    color: semanticTokens.colorText,
    borderColor: semanticTokens.colorBorder,
  },

  danger: {
    color: semanticTokens.colorError,
    borderColor: semanticTokens.colorError,
  },
} as const;
