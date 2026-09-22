import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "@fe-design-systems/react";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    children: "Button",
  },
};

export const Variants: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
      }}
    >
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="success">Success</Button>
      <Button variant="danger">Danger</Button>
      <Button variant="warning">Warning</Button>
    </div>
  ),
};

export const Appearances: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
      }}
    >
      <Button variant="primary" appearance="solid">
        Solid
      </Button>

      <Button variant="primary" appearance="outline">
        Outline
      </Button>
    </div>
  ),
};

export const WithPrefixAndSuffix: Story = {
  render: () => (
    <div
      style={{
        display: "flex",
        gap: "12px",
        flexWrap: "wrap",
      }}
    >
      <Button prefix="←">Back</Button>
      <Button suffix="→">Next</Button>
      <Button prefix="+" suffix="→">
        Add Item
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    children: "Disabled",
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: "12px", alignItems: "center", flexWrap: "wrap" }}>
      <Button size="small">Small</Button> <Button size="middle">Middle</Button> <Button size="large">Large</Button>
    </div>
  ),
};
