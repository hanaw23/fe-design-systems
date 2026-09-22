// src/Button/Button.tsx
import { Button as AntButton } from "antd";

// src/theme.ts
import { semanticTokens, primitiveTokens, radius } from "@fe-design-systems/tokens";
var theme = {
  token: {
    colorPrimary: semanticTokens.color.primary,
    colorText: semanticTokens.color.text,
    colorBorder: semanticTokens.color.border,
    colorTextPlaceholder: semanticTokens.color.textSecondary,
    colorError: semanticTokens.color.error,
    colorWarning: semanticTokens.color.warning,
    colorSuccess: semanticTokens.color.success,
    colorBgBase: semanticTokens.color.background,
    borderRadius: radius.md
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
var selectTheme = {
  default: {
    background: semanticTokens.color.background,
    color: semanticTokens.color.text,
    borderColor: semanticTokens.color.disabled
  },
  disabled: {
    background: semanticTokens.color.disabled,
    color: semanticTokens.color.textDisabled,
    borderColor: semanticTokens.color.disabled
  }
};
var inputTheme = {
  default: {
    color: semanticTokens.color.text,
    borderColor: semanticTokens.color.border
  },
  danger: {
    color: semanticTokens.color.error,
    borderColor: semanticTokens.color.error
  }
};

// src/Button/Button.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Button({ variant = "primary", appearance = "solid", style, disabled, prefix, suffix, children, contentGap = 8, ...props }) {
  const currentTheme = buttonTheme[variant][appearance];
  const buttonStyle = disabled ? style : {
    backgroundColor: currentTheme.background,
    color: currentTheme.color,
    borderColor: currentTheme.borderColor,
    ...style
  };
  return /* @__PURE__ */ jsx(AntButton, { ...props, disabled, style: buttonStyle, children: /* @__PURE__ */ jsxs(
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
import { Input as AntInput, Typography } from "antd";
import { Fragment, jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
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
        return /* @__PURE__ */ jsx2(AntInput.Password, { ...componentProps, style });
      case otp:
        return /* @__PURE__ */ jsx2(AntInput.OTP, { ...componentProps, style });
      case textarea:
        return /* @__PURE__ */ jsx2(AntInput.TextArea, { ...componentProps, style });
      default:
        return /* @__PURE__ */ jsx2(AntInput, { ...componentProps, style, styles: inputStyles });
    }
  };
  return /* @__PURE__ */ jsxs2(Fragment, { children: [
    componentInput(),
    isError && /* @__PURE__ */ jsx2(
      Typography.Text,
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
import { Select as AntSelect } from "antd";
import { jsx as jsx3 } from "react/jsx-runtime";
function Select({ width, height, style, disabled, ...props }) {
  const currentTheme = disabled ? selectTheme.disabled : selectTheme.default;
  return /* @__PURE__ */ jsx3(
    AntSelect,
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

// src/Checkbox/Checkbox.tsx
import { Checkbox as AntCheckbox } from "antd";
import { semanticTokens as semanticTokens2 } from "@fe-design-systems/tokens";
import { jsx as jsx4 } from "react/jsx-runtime";
function Checkbox({ variant = "primary", styles, disabled, ...props }) {
  const color = variant === "secondary" ? semanticTokens2.color.secondary : semanticTokens2.color.primary;
  return /* @__PURE__ */ jsx4(
    AntCheckbox,
    {
      ...props,
      disabled,
      styles: {
        icon: {
          backgroundColor: color,
          borderColor: "transparent"
        }
      }
    }
  );
}

// src/Switch/Switch.tsx
import { useState } from "react";
import { Switch as AntSwitch } from "antd";
import { semanticTokens as semanticTokens3 } from "@fe-design-systems/tokens";
import { jsx as jsx5 } from "react/jsx-runtime";
function Switch({ variant = "primary", styles, checked, defaultChecked, onChange, ...props }) {
  const color = variant === "secondary" ? semanticTokens3.color.secondary : semanticTokens3.color.primary;
  const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
  const isControlled = checked !== void 0;
  const currentChecked = isControlled ? checked : internalChecked;
  const handleChange = (nextChecked, event) => {
    if (!isControlled) {
      setInternalChecked(nextChecked);
    }
    onChange?.(nextChecked, event);
  };
  const switchStyles = (info) => {
    const baseStyles = typeof styles === "function" ? styles(info) : styles;
    return {
      ...baseStyles,
      root: {
        ...baseStyles?.root,
        ...currentChecked && !info.props.disabled ? {
          backgroundColor: color,
          borderColor: "transparent"
        } : {}
      }
    };
  };
  return /* @__PURE__ */ jsx5(AntSwitch, { ...props, checked: currentChecked, onChange: handleChange, styles: switchStyles });
}

// src/DesignSystemProvider.tsx
import { ConfigProvider } from "antd";
import { jsx as jsx6 } from "react/jsx-runtime";
var DesignSystemProvider = ({ children, theme: customTheme }) => {
  const mergedTheme = {
    ...theme,
    ...customTheme,
    token: {
      ...theme.token,
      ...customTheme?.token
    }
  };
  return /* @__PURE__ */ jsx6(ConfigProvider, { theme: mergedTheme, children });
};
export {
  Button,
  Checkbox,
  DesignSystemProvider,
  Input,
  Select,
  Switch
};
//# sourceMappingURL=index.mjs.map