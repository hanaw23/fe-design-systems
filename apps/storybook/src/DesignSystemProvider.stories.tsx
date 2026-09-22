import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "antd";

import { Button, DesignSystemProvider } from "@fe-design-systems/react";

const meta = {
  title: "Configuration/DesignSystemProvider",
  component: DesignSystemProvider,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "DesignSystemProvider provides the design system theme and allows applications to customize Ant Design theme tokens.",
      },
    },
  },
} satisfies Meta<typeof DesignSystemProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  render: () => (
    <DesignSystemProvider>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "flex-start",
        }}
      >
        <Typography.Text>Components inside DesignSystemProvider use the design system theme.</Typography.Text>

        <Button variant="primary">Primary Button</Button>
      </div>
    </DesignSystemProvider>
  ),
};

export const CustomTheme: Story = {
  render: () => (
    <DesignSystemProvider
      theme={{
        token: {
          colorPrimary: "#7C3AED",
          borderRadius: 12,
        },
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          alignItems: "flex-start",
        }}
      >
        <Typography.Text>This example uses custom Ant Design theme tokens.</Typography.Text>

        <Button variant="primary">Custom Theme</Button>
      </div>
    </DesignSystemProvider>
  ),
};
