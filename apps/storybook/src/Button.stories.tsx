import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@fe-design-systems/react";

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    type: "primary",
    size: "middle",
    loading: false,
    disabled: false,
    danger: false,
    children: "Button",
  },
};
