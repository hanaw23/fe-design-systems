import type { Meta, StoryObj } from "@storybook/react-vite";

import { Switch } from "@fe-design-systems/react";

const meta = {
  title: "Components/Switch",
  component: Switch,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const PrimaryChecked: Story = {
  args: {
    checked: true,
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const SecondaryChecked: Story = {
  args: {
    variant: "secondary",
    checked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};

export const DisabledSecondary: Story = {
  args: {
    variant: "secondary",
    disabled: true,
  },
};

export const DisabledCheckedSecondary: Story = {
  args: {
    variant: "secondary",
    disabled: true,
    checked: true,
  },
};

export const Small: Story = {
  args: {
    size: "small",
    checked: true,
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
