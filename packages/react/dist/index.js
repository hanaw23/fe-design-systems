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
  Button: () => Button,
  DesignSystemProvider: () => DesignSystemProvider,
  Input: () => Input,
  Select: () => Select
});
module.exports = __toCommonJS(index_exports);

// src/Button/Button.tsx
var import_antd = require("antd");

// src/theme.ts
var import_tokens = require("@fe-design-systems/tokens");
var theme = {
  token: {
    colorPrimary: import_tokens.semanticTokens.colorPrimary,
    colorText: import_tokens.semanticTokens.colorText,
    colorBorder: import_tokens.semanticTokens.colorBorder,
    colorTextPlaceholder: import_tokens.semanticTokens.colorTextSecondary,
    colorError: import_tokens.semanticTokens.colorError,
    colorWarning: import_tokens.semanticTokens.colorWarning,
    colorSuccess: import_tokens.semanticTokens.colorSuccess,
    colorBgBase: import_tokens.semanticTokens.colorBackground,
    borderRadius: import_tokens.semanticTokens.borderRadius
  }
};
var buttonTheme = {
  primary: {
    solid: {
      background: import_tokens.primitiveTokens.color.gray600,
      color: import_tokens.primitiveTokens.color.white,
      borderColor: import_tokens.primitiveTokens.color.gray600,
      hover: {
        background: import_tokens.primitiveTokens.color.gray900,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.gray900
      },
      active: {
        background: import_tokens.primitiveTokens.color.gray900,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.gray900
      }
    },
    outline: {
      background: import_tokens.primitiveTokens.color.white,
      color: import_tokens.primitiveTokens.color.gray600,
      borderColor: import_tokens.primitiveTokens.color.gray600,
      hover: {
        background: import_tokens.primitiveTokens.color.gray600,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.gray600
      },
      active: {
        background: import_tokens.primitiveTokens.color.gray900,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.gray900
      }
    }
  },
  secondary: {
    solid: {
      background: import_tokens.primitiveTokens.color.red700,
      color: import_tokens.primitiveTokens.color.white,
      borderColor: import_tokens.primitiveTokens.color.red700,
      hover: {
        background: import_tokens.primitiveTokens.color.red500,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.red500
      },
      active: {
        background: import_tokens.primitiveTokens.color.red500,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.red500
      }
    },
    outline: {
      background: import_tokens.primitiveTokens.color.white,
      color: import_tokens.primitiveTokens.color.red700,
      borderColor: import_tokens.primitiveTokens.color.red700,
      hover: {
        background: import_tokens.primitiveTokens.color.red700,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.red700
      },
      active: {
        background: import_tokens.primitiveTokens.color.red500,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.red500
      }
    }
  },
  success: {
    solid: {
      background: import_tokens.primitiveTokens.color.green500,
      color: import_tokens.primitiveTokens.color.white,
      borderColor: import_tokens.primitiveTokens.color.green500,
      hover: {
        background: import_tokens.primitiveTokens.color.green500,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.green500
      },
      active: {
        background: import_tokens.primitiveTokens.color.green500,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.green500
      }
    },
    outline: {
      background: import_tokens.primitiveTokens.color.white,
      color: import_tokens.primitiveTokens.color.green500,
      borderColor: import_tokens.primitiveTokens.color.green500,
      hover: {
        background: import_tokens.primitiveTokens.color.green500,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.green500
      },
      active: {
        background: import_tokens.primitiveTokens.color.green500,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.green500
      }
    }
  },
  danger: {
    solid: {
      background: import_tokens.primitiveTokens.color.red500,
      color: import_tokens.primitiveTokens.color.white,
      borderColor: import_tokens.primitiveTokens.color.red500,
      hover: {
        background: import_tokens.primitiveTokens.color.red700,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.red700
      },
      active: {
        background: import_tokens.primitiveTokens.color.red700,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.red700
      }
    },
    outline: {
      background: import_tokens.primitiveTokens.color.white,
      color: import_tokens.primitiveTokens.color.red500,
      borderColor: import_tokens.primitiveTokens.color.red500,
      hover: {
        background: import_tokens.primitiveTokens.color.red500,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.red500
      },
      active: {
        background: import_tokens.primitiveTokens.color.red700,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.red700
      }
    }
  },
  warning: {
    solid: {
      background: import_tokens.primitiveTokens.color.yellow600,
      color: import_tokens.primitiveTokens.color.white,
      borderColor: import_tokens.primitiveTokens.color.yellow600,
      hover: {
        background: import_tokens.primitiveTokens.color.yellow600,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.yellow600
      },
      active: {
        background: import_tokens.primitiveTokens.color.yellow600,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.yellow600
      }
    },
    outline: {
      background: import_tokens.primitiveTokens.color.white,
      color: import_tokens.primitiveTokens.color.yellow600,
      borderColor: import_tokens.primitiveTokens.color.yellow600,
      hover: {
        background: import_tokens.primitiveTokens.color.yellow600,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.yellow600
      },
      active: {
        background: import_tokens.primitiveTokens.color.yellow600,
        color: import_tokens.primitiveTokens.color.white,
        borderColor: import_tokens.primitiveTokens.color.yellow600
      }
    }
  }
};
var selectTheme = {
  default: {
    background: import_tokens.semanticTokens.colorBackground,
    color: import_tokens.semanticTokens.colorText,
    borderColor: import_tokens.semanticTokens.colorDisabled
  },
  disabled: {
    background: import_tokens.semanticTokens.colorDisabled,
    color: import_tokens.semanticTokens.colorTextDisabled,
    borderColor: import_tokens.semanticTokens.colorDisabledr
  }
};
var inputTheme = {
  default: {
    color: import_tokens.semanticTokens.colorText,
    borderColor: import_tokens.semanticTokens.colorBorder
  },
  danger: {
    color: import_tokens.semanticTokens.colorError,
    borderColor: import_tokens.semanticTokens.colorError
  }
};

// src/Button/Button.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function Button({ variant = "primary", appearance = "solid", style, disabled, prefix, suffix, children, contentGap = 8, ...props }) {
  const currentTheme = buttonTheme[variant][appearance];
  const buttonStyle = disabled ? style : {
    backgroundColor: currentTheme.background,
    color: currentTheme.color,
    borderColor: currentTheme.borderColor,
    ...style
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Button, { ...props, disabled, style: buttonStyle, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
    "span",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: contentGap
      },
      children: [
        prefix,
        children,
        suffix
      ]
    }
  ) });
}

// src/Input/Input.tsx
var import_antd2 = require("antd");
var import_jsx_runtime2 = require("react/jsx-runtime");
function Input(props) {
  const { width, height, password, otp, textarea, ...componentProps } = props;
  const isError = props?.status === "error" && props?.error;
  const inputStyles = isError ? {
    input: {
      color: inputTheme.danger.color
    }
  } : void 0;
  const style = {
    width,
    height,
    ...props.style
  };
  const componentInput = () => {
    switch (true) {
      case password:
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Input.Password, { ...componentProps, style });
      case otp:
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Input.OTP, { ...componentProps, style });
      case textarea:
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Input.TextArea, { ...componentProps, style });
      default:
        return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Input, { ...componentProps, style, styles: inputStyles });
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_jsx_runtime2.Fragment, { children: [
    componentInput(),
    isError && /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(
      import_antd2.Typography.Text,
      {
        type: "danger",
        style: {
          display: "block",
          marginTop: 4,
          fontSize: 10,
          lineHeight: "20px"
        },
        children: props.error
      }
    )
  ] });
}

// src/Select/Select.tsx
var import_antd3 = require("antd");
var import_jsx_runtime3 = require("react/jsx-runtime");
function Select({ width, height, style, disabled, ...props }) {
  const currentTheme = disabled ? selectTheme.disabled : selectTheme.default;
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    import_antd3.Select,
    {
      ...props,
      disabled,
      styles: {
        root: {
          backgroundColor: currentTheme.background,
          color: currentTheme.color,
          borderColor: currentTheme.borderColor
        }
      },
      style: {
        width,
        ...style
      }
    }
  );
}

// src/DesignSystemProvider.tsx
var import_antd4 = require("antd");
var import_jsx_runtime4 = require("react/jsx-runtime");
var DesignSystemProvider = ({ children, theme: customTheme }) => {
  const mergedTheme = {
    ...theme,
    ...customTheme,
    token: {
      ...theme.token,
      ...customTheme?.token
    }
  };
  return /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_antd4.ConfigProvider, { theme: mergedTheme, children });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  DesignSystemProvider,
  Input,
  Select
});
//# sourceMappingURL=index.js.map