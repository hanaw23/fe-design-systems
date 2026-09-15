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
  Input: () => Input
});
module.exports = __toCommonJS(index_exports);

// src/Button/Button.tsx
var import_antd = require("antd");
var import_jsx_runtime = require("react/jsx-runtime");
function Button(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd.Button, { ...props });
}

// src/Input/Input.tsx
var import_antd2 = require("antd");
var import_jsx_runtime2 = require("react/jsx-runtime");
function Input(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_antd2.Input, { ...props });
}

// src/DesignSystemProvider.tsx
var import_antd3 = require("antd");

// src/theme.ts
var import_tokens = require("@fe-design-systems/tokens");
var theme = {
  token: {
    colorPrimary: import_tokens.semanticTokens.colorPrimary,
    colorText: import_tokens.semanticTokens.colorText,
    colorBorder: import_tokens.semanticTokens.colorBorder,
    colorTextPlaceholder: import_tokens.semanticTokens.colorTextSecondary,
    colorError: import_tokens.semanticTokens.colorError,
    colorBgBase: import_tokens.semanticTokens.colorBackground,
    borderRadius: import_tokens.semanticTokens.borderRadius
  },
  components: {
    Button: {
      borderRadius: import_tokens.semanticTokens.borderRadius
    }
  }
};

// src/DesignSystemProvider.tsx
var import_jsx_runtime3 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_antd3.ConfigProvider, { theme: mergedTheme, children });
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Button,
  DesignSystemProvider,
  Input
});
//# sourceMappingURL=index.js.map