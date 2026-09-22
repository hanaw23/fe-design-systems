import type { Meta, StoryObj } from "@storybook/react-vite";
import { Select } from "@fe-design-systems/react";

const options = [
  {
    value: "option-1",
    label: "Option 1",
  },
  {
    value: "option-2",
    label: "Option 2",
  },
  {
    value: "option-3",
    label: "Option 3",
  },
];

const meta = {
  title: "Components/Select",
  component: Select,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Select is a dropdown input component with support for custom sizing, disabled state, placeholders, and selectable options.",
      },
    },
  },
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    placeholder: "Select an option",
    options,
  },
};

export const WithValue: Story = {
  args: {
    value: "option-2",
    options,
  },
};

export const Disabled: Story = {
  args: {
    placeholder: "Select an option",
    options,
    disabled: true,
  },
};

export const CustomSize: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <Select width={200} placeholder="Width: 200px" options={options} />

      <Select width="100%" height={48} placeholder="Width: 100%, Height: 48px" options={options} />
    </div>
  ),
};

export const States: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "240px" }}>
      <Select placeholder="Default" options={options} /> <Select placeholder="Disabled" options={options} disabled />
    </div>
  ),
};
