// src/Button/Button.tsx
import { Button as AntButton } from "antd";
import { jsx } from "react/jsx-runtime";
function Button(props) {
  return /* @__PURE__ */ jsx(AntButton, { ...props });
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
import { jsx as jsx2 } from "react/jsx-runtime";
var DesignSystemProvider = ({ children, theme: customTheme }) => {
  return /* @__PURE__ */ jsx2(ConfigProvider, { theme: customTheme ?? theme, children });
};
export {
  Button,
  DesignSystemProvider
};
//# sourceMappingURL=index.mjs.map