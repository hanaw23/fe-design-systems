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
var import_tokens = require("@fe-design-systems/tokens");
var import_jsx_runtime = require("react/jsx-runtime");
function Button({ variant = "primary", appearance = "solid", style, ...props }) {
  const colorMap = {
    primary: import_tokens.semanticTokens.colorPrimary,
    secondary: import_tokens.semanticTokens.colorSecondary,
    success: import_tokens.semanticTokens.colorSuccess,
    danger: import_tokens.semanticTokens.colorError,
    warning: import_tokens.semanticTokens.colorWarning
  };
  const color = colorMap[variant];
  const buttonStyle = appearance === "outline" ? {
    backgroundColor: import_tokens.semanticTokens.colorBackground,
    color,
    borderColor: color,
    ...style
  } : {
    backgroundColor: color,
    color: import_tokens.semanticTokens.colorBackground,
    borderColor: color,
    ...style
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Button, { ...props, style: buttonStyle });
}

// src/Input/Input.tsx
var import_antd2 = require("antd");
var import_jsx_runtime2 = require("react/jsx-runtime");
function Input(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Input, { ...props });
}

// src/Select/Select.tsx
var import_antd3 = require("antd");
var import_jsx_runtime3 = require("react/jsx-runtime");
var Select = (props) => {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.Select, { ...props });
};

// src/DesignSystemProvider.tsx
var import_antd4 = require("antd");

// src/theme.ts
var import_tokens2 = require("@fe-design-systems/tokens");
var theme = {
  token: {
    colorPrimary: import_tokens2.semanticTokens.colorPrimary,
    colorText: import_tokens2.semanticTokens.colorText,
    colorBorder: import_tokens2.semanticTokens.colorBorder,
    colorTextPlaceholder: import_tokens2.semanticTokens.colorTextSecondary,
    colorError: import_tokens2.semanticTokens.colorError,
    colorWarning: import_tokens2.semanticTokens.colorWarning,
    colorSuccess: import_tokens2.semanticTokens.colorSuccess,
    colorBgBase: import_tokens2.semanticTokens.colorBackground,
    borderRadius: import_tokens2.semanticTokens.borderRadius
  }
};
var buttonTheme = {
  primary: {
    solid: {
      background: import_tokens2.primitiveTokens.color.gray600,
      color: import_tokens2.primitiveTokens.color.white,
      borderColor: import_tokens2.primitiveTokens.color.gray600,
      hover: {
        background: import_tokens2.primitiveTokens.color.gray900,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.gray900
      },
      active: {
        background: import_tokens2.primitiveTokens.color.gray900,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.gray900
      }
    },
    outline: {
      background: import_tokens2.primitiveTokens.color.white,
      color: import_tokens2.primitiveTokens.color.gray600,
      borderColor: import_tokens2.primitiveTokens.color.gray600,
      hover: {
        background: import_tokens2.primitiveTokens.color.gray600,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.gray600
      },
      active: {
        background: import_tokens2.primitiveTokens.color.gray900,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.gray900
      }
    }
  },
  secondary: {
    solid: {
      background: import_tokens2.primitiveTokens.color.red700,
      color: import_tokens2.primitiveTokens.color.white,
      borderColor: import_tokens2.primitiveTokens.color.red700,
      hover: {
        background: import_tokens2.primitiveTokens.color.red500,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.red500
      },
      active: {
        background: import_tokens2.primitiveTokens.color.red500,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.red500
      }
    },
    outline: {
      background: import_tokens2.primitiveTokens.color.white,
      color: import_tokens2.primitiveTokens.color.red700,
      borderColor: import_tokens2.primitiveTokens.color.red700,
      hover: {
        background: import_tokens2.primitiveTokens.color.red700,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.red700
      },
      active: {
        background: import_tokens2.primitiveTokens.color.red500,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.red500
      }
    }
  },
  success: {
    solid: {
      background: import_tokens2.primitiveTokens.color.green500,
      color: import_tokens2.primitiveTokens.color.white,
      borderColor: import_tokens2.primitiveTokens.color.green500,
      hover: {
        background: import_tokens2.primitiveTokens.color.green500,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.green500
      },
      active: {
        background: import_tokens2.primitiveTokens.color.green500,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.green500
      }
    },
    outline: {
      background: import_tokens2.primitiveTokens.color.white,
      color: import_tokens2.primitiveTokens.color.green500,
      borderColor: import_tokens2.primitiveTokens.color.green500,
      hover: {
        background: import_tokens2.primitiveTokens.color.green500,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.green500
      },
      active: {
        background: import_tokens2.primitiveTokens.color.green500,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.green500
      }
    }
  },
  danger: {
    solid: {
      background: import_tokens2.primitiveTokens.color.red500,
      color: import_tokens2.primitiveTokens.color.white,
      borderColor: import_tokens2.primitiveTokens.color.red500,
      hover: {
        background: import_tokens2.primitiveTokens.color.red700,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.red700
      },
      active: {
        background: import_tokens2.primitiveTokens.color.red700,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.red700
      }
    },
    outline: {
      background: import_tokens2.primitiveTokens.color.white,
      color: import_tokens2.primitiveTokens.color.red500,
      borderColor: import_tokens2.primitiveTokens.color.red500,
      hover: {
        background: import_tokens2.primitiveTokens.color.red500,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.red500
      },
      active: {
        background: import_tokens2.primitiveTokens.color.red700,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.red700
      }
    }
  },
  warning: {
    solid: {
      background: import_tokens2.primitiveTokens.color.yellow600,
      color: import_tokens2.primitiveTokens.color.white,
      borderColor: import_tokens2.primitiveTokens.color.yellow600,
      hover: {
        background: import_tokens2.primitiveTokens.color.yellow600,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.yellow600
      },
      active: {
        background: import_tokens2.primitiveTokens.color.yellow600,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.yellow600
      }
    },
    outline: {
      background: import_tokens2.primitiveTokens.color.white,
      color: import_tokens2.primitiveTokens.color.yellow600,
      borderColor: import_tokens2.primitiveTokens.color.yellow600,
      hover: {
        background: import_tokens2.primitiveTokens.color.yellow600,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.yellow600
      },
      active: {
        background: import_tokens2.primitiveTokens.color.yellow600,
        color: import_tokens2.primitiveTokens.color.white,
        borderColor: import_tokens2.primitiveTokens.color.yellow600
      }
    }
  }
};

// src/DesignSystemProvider.tsx
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