import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "@fe-design-systems/react";

const meta = {
  title: "Components/Select",
  component: Select,
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Select an option",
    options: [
      {
        label: "Option 1",
        value: "option-1",
      },
      {
        label: "Option 2",
        value: "option-2",
      },
      {
        label: "Option 3",
        value: "option-3",
      },
    ],
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Select an option",
    disabled: true,
    options: [
      {
        label: "Option 1",
        value: "option-1",
      },
    ],
  },
};

export const Error: Story = {
  args: {
    placeholder: "Select an option",
    status: "error",
    options: [
      {
        label: "Option 1",
        value: "option-1",
      },
      {
        label: "Option 2",
        value: "option-2",
      },
    ],
  },
};
