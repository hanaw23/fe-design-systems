import type { ReactNode } from "react";
import { ConfigProvider } from "antd";
import type { ThemeConfig } from "antd";

import { theme } from "./theme";

type DesignSystemProviderProps = {
  children: ReactNode;
  theme?: ThemeConfig;
};

export const DesignSystemProvider = ({ children, theme: customTheme }: DesignSystemProviderProps) => {
  return <ConfigProvider theme={customTheme ?? theme}>{children}</ConfigProvider>;
};
