// src/Button/Button.tsx
import { Button as AntButton } from "antd";
import { jsx } from "react/jsx-runtime";
function Button(props) {
  return /* @__PURE__ */ jsx(AntButton, { ...props });
}

// src/Input/Input.tsx
import { Input as AntInput } from "antd";
import { jsx as jsx2 } from "react/jsx-runtime";
function Input(props) {
  return /* @__PURE__ */ jsx2(AntInput, { ...props });
}

// src/DesignSystemProvider.tsx
import { ConfigProvider } from "antd";

// src/theme.ts
import { semanticTokens } from "@fe-design-systems/tokens";
var theme = {
  token: {
    colorPrimary: semanticTokens.colorPrimary,
    colorText: semanticTokens.colorText,
    colorBorder: semanticTokens.colorBorder,
    colorBgBase: semanticTokens.colorBackground,
    borderRadius: semanticTokens.borderRadius
  },
  components: {
    Button: {
      borderRadius: semanticTokens.borderRadius
    }
  }
};

// src/DesignSystemProvider.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
var DesignSystemProvider = ({ children, theme: customTheme }) => {
  const mergedTheme = {
    ...theme,
    ...customTheme,
    token: {
      ...theme.token,
      ...customTheme?.token
    },
    components: {
      ...theme.components,
      ...customTheme?.components
    }
  };
  return /* @__PURE__ */ jsx3(ConfigProvider, { theme: mergedTheme, children });
};
export {
  Button,
  DesignSystemProvider,
  Input
};
//# sourceMappingURL=index.mjs.map