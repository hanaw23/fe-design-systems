import type { ReactNode } from "react";
import { ConfigProvider } from "antd";

import { theme } from "./theme";

type DesignSystemProviderPage = {
  children: ReactNode;
};

export const DesignSystemProvider = ({ children }: DesignSystemProviderPage) => {
  return <ConfigProvider theme={theme}>{children}</ConfigProvider>;
};
