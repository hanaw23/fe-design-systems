import type { Meta, StoryObj } from "@storybook/react-vite";
import { Checkbox } from "@fe-design-systems/react";

const meta = {
  title: "Components/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    children: "Checkbox",
  },
};

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <Checkbox variant="primary">Primary</Checkbox>
      <Checkbox variant="secondary">Secondary</Checkbox>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "12px",
      }}
    >
      <Checkbox disabled>Disabled</Checkbox>
      <Checkbox disabled checked>
        Disabled Checked
      </Checkbox>
    </div>
  ),
};

export const Checked: Story = {
  args: {
    children: "Checked",
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    children: "Indeterminate",
    indeterminate: true,
  },
};

export const VariantExamples: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Checkbox variant="primary" defaultChecked>
        Primary
      </Checkbox>
      <Checkbox variant="secondary" defaultChecked>
        Secondary
      </Checkbox>
    </div>
  ),
};
