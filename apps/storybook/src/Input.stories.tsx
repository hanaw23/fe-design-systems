import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@fe-design-systems/react";

const meta = {
  title: "Components/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your name",
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Disabled input",
    disabled: true,
  },
};

export const Error: Story = {
  args: {
    placeholder: "Enter your name",
    status: "error",
  },
};
