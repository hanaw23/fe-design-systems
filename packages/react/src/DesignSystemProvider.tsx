import type { ReactNode } from "react";
import { ConfigProvider } from "antd";
import type { ThemeConfig } from "antd";

import { theme as defaultTheme } from "./theme";

type DesignSystemProviderProps = {
  children: ReactNode;
  theme?: ThemeConfig;
};

export const DesignSystemProvider = ({ children, theme: customTheme }: DesignSystemProviderProps) => {
  const mergedTheme: ThemeConfig = {
    ...defaultTheme,
    ...customTheme,

    token: {
      ...defaultTheme.token,
      ...customTheme?.token,
    },

    components: {
      ...defaultTheme.components,
      ...customTheme?.components,
    },
  };

  return <ConfigProvider theme={mergedTheme}>{children}</ConfigProvider>;
};
