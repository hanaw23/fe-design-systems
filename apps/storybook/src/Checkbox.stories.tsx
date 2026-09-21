import type { Meta, StoryObj } from "@storybook/react-vite";

import { Checkbox } from "@fe-design-systems/react";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Remember me",
  },
};

export const PrimaryChecked: Story = {
  args: {
    children: "Remember me",
    checked: true,
  },
};

export const Secondary: Story = {
  args: {
    children: "Remember me",
    variant: "secondary",
  },
};

export const SecondaryChecked: Story = {
  args: {
    children: "Remember me",
    variant: "secondary",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "Remember me",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    children: "Remember me",
    disabled: true,
    checked: true,
  },
};
