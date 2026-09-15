// src/Button/Button.tsx
import { Button as AntButton } from "antd";
import { jsx } from "react/jsx-runtime";
function Button(props) {
  return /* @__PURE__ */ jsx(AntButton, { ...props });
}

// src/index.ts
import { primitiveTokens, semanticTokens } from "@fe-design-systems/tokens";
export {
  Button,
  primitiveTokens,
  semanticTokens
};
//# sourceMappingURL=index.mjs.map