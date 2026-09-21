import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@fe-design-systems/react";
import { PlusOutlined, ArrowRightOutlined } from "@ant-design/icons";

const meta = {
  title: "Components/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const PrimaryOutline: Story = {
  args: {
    variant: "primary",
    appearance: "outline",
    children: "Primary Outline",
  },
};

export const SecondaryOutline: Story = {
  args: {
    variant: "secondary",
    appearance: "outline",
    children: "Secondary Outline",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
    children: "Success",
  },
};

export const SuccessOutline: Story = {
  args: {
    variant: "success",
    appearance: "outline",
    children: "Success Outline",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
    children: "Danger",
  },
};

export const DangerOutline: Story = {
  args: {
    variant: "danger",
    appearance: "outline",
    children: "Danger Outline",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
    children: "Warning",
  },
};

export const WarningOutline: Story = {
  args: {
    variant: "warning",
    appearance: "outline",
    children: "Warning Outline",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: "Disabled",
  },
};

// Prefix & Suffix
export const Prefix: Story = {
  args: {
    variant: "primary",
    prefix: <PlusOutlined />,
    children: "Add Project",
  },
};

export const Suffix: Story = {
  args: {
    variant: "primary",
    suffix: <ArrowRightOutlined />,
    children: "Continue",
  },
};

export const PrefixAndSuffix: Story = {
  args: {
    variant: "primary",
    prefix: <PlusOutlined />,
    suffix: <ArrowRightOutlined />,
    children: "Continue",
  },
};
