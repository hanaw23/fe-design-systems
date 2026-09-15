import type { Meta, StoryObj } from "@storybook/react";
import { Button, DesignSystemProvider } from "@fe-design-systems/react";

const meta = {
  title: "Components/DesignSystemProvider",
  component: DesignSystemProvider,
} satisfies Meta<typeof DesignSystemProvider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DesignSystemProvider>
      <Button type="primary">Default Theme</Button>
    </DesignSystemProvider>
  ),
};

export const CustomTheme: Story = {
  render: () => (
    <DesignSystemProvider
      theme={{
        token: {
          colorPrimary: "#1677ff",
        },
      }}
    >
      <Button type="primary">Custom Theme</Button>
    </DesignSystemProvider>
  ),
};
