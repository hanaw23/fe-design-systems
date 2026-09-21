// src/Button/Button.tsx
import { Button as AntButton } from "antd";

// src/theme.ts
import { semanticTokens, primitiveTokens } from "@fe-design-systems/tokens";
var theme = {
  token: {
    colorPrimary: semanticTokens.colorPrimary,
    colorText: semanticTokens.colorText,
    colorBorder: semanticTokens.colorBorder,
    colorTextPlaceholder: semanticTokens.colorTextSecondary,
    colorError: semanticTokens.colorError,
    colorWarning: semanticTokens.colorWarning,
    colorSuccess: semanticTokens.colorSuccess,
    colorBgBase: semanticTokens.colorBackground,
    borderRadius: semanticTokens.borderRadius
  }
};
var buttonTheme = {
  primary: {
    solid: {
      background: primitiveTokens.color.gray600,
      color: primitiveTokens.color.white,
      borderColor: primitiveTokens.color.gray600,
      hover: {
        background: primitiveTokens.color.gray900,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.gray900
      },
      active: {
        background: primitiveTokens.color.gray900,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.gray900
      }
    },
    outline: {
      background: primitiveTokens.color.white,
      color: primitiveTokens.color.gray600,
      borderColor: primitiveTokens.color.gray600,
      hover: {
        background: primitiveTokens.color.gray600,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.gray600
      },
      active: {
        background: primitiveTokens.color.gray900,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.gray900
      }
    }
  },
  secondary: {
    solid: {
      background: primitiveTokens.color.red700,
      color: primitiveTokens.color.white,
      borderColor: primitiveTokens.color.red700,
      hover: {
        background: primitiveTokens.color.red500,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.red500
      },
      active: {
        background: primitiveTokens.color.red500,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.red500
      }
    },
    outline: {
      background: primitiveTokens.color.white,
      color: primitiveTokens.color.red700,
      borderColor: primitiveTokens.color.red700,
      hover: {
        background: primitiveTokens.color.red700,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.red700
      },
      active: {
        background: primitiveTokens.color.red500,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.red500
      }
    }
  },
  success: {
    solid: {
      background: primitiveTokens.color.green500,
      color: primitiveTokens.color.white,
      borderColor: primitiveTokens.color.green500,
      hover: {
        background: primitiveTokens.color.green500,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.green500
      },
      active: {
        background: primitiveTokens.color.green500,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.green500
      }
    },
    outline: {
      background: primitiveTokens.color.white,
      color: primitiveTokens.color.green500,
      borderColor: primitiveTokens.color.green500,
      hover: {
        background: primitiveTokens.color.green500,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.green500
      },
      active: {
        background: primitiveTokens.color.green500,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.green500
      }
    }
  },
  danger: {
    solid: {
      background: primitiveTokens.color.red500,
      color: primitiveTokens.color.white,
      borderColor: primitiveTokens.color.red500,
      hover: {
        background: primitiveTokens.color.red700,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.red700
      },
      active: {
        background: primitiveTokens.color.red700,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.red700
      }
    },
    outline: {
      background: primitiveTokens.color.white,
      color: primitiveTokens.color.red500,
      borderColor: primitiveTokens.color.red500,
      hover: {
        background: primitiveTokens.color.red500,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.red500
      },
      active: {
        background: primitiveTokens.color.red700,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.red700
      }
    }
  },
  warning: {
    solid: {
      background: primitiveTokens.color.yellow600,
      color: primitiveTokens.color.white,
      borderColor: primitiveTokens.color.yellow600,
      hover: {
        background: primitiveTokens.color.yellow600,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.yellow600
      },
      active: {
        background: primitiveTokens.color.yellow600,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.yellow600
      }
    },
    outline: {
      background: primitiveTokens.color.white,
      color: primitiveTokens.color.yellow600,
      borderColor: primitiveTokens.color.yellow600,
      hover: {
        background: primitiveTokens.color.yellow600,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.yellow600
      },
      active: {
        background: primitiveTokens.color.yellow600,
        color: primitiveTokens.color.white,
        borderColor: primitiveTokens.color.yellow600
      }
    }
  }
};

// src/Button/Button.tsx
import { jsx } from "react/jsx-runtime";
function Button({ variant = "primary", appearance = "solid", style, disabled, ...props }) {
  const currentTheme = buttonTheme[variant][appearance];
  const buttonStyle = disabled ? style : {
    backgroundColor: currentTheme.background,
    color: currentTheme.color,
    borderColor: currentTheme.borderColor,
    ...style
  };
  return /* @__PURE__ */ jsx(AntButton, { ...props, disabled, style: buttonStyle });
}

// src/Input/Input.tsx
import { Input as AntInput } from "antd";
import { jsx as jsx2 } from "react/jsx-runtime";
function Input(props) {
  return /* @__PURE__ */ jsx2(AntInput, { ...props });
}

// src/Select/Select.tsx
import { Select as AntSelect } from "antd";
import { jsx as jsx3 } from "react/jsx-runtime";
var Select = (props) => {
  return /* @__PURE__ */ jsx3(AntSelect, { ...props });
};

// src/DesignSystemProvider.tsx
import { ConfigProvider } from "antd";
import { jsx as jsx4 } from "react/jsx-runtime";
var DesignSystemProvider = ({ children, theme: customTheme }) => {
  const mergedTheme = {
    ...theme,
    ...customTheme,
    token: {
      ...theme.token,
      ...customTheme?.token
    }
  };
  return /* @__PURE__ */ jsx4(ConfigProvider, { theme: mergedTheme, children });
};
export {
  Button,
  DesignSystemProvider,
  Input,
  Select
};
//# sourceMappingURL=index.mjs.map