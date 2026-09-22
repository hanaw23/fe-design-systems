import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { Switch } from "@fe-design-systems/react";

const meta = {
  title: "Components/Switch",
  component: Switch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Switch is a toggle component with primary and secondary variants, supporting controlled and uncontrolled usage.",
      },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: "Switch supports primary and secondary variants and can be used in both controlled and uncontrolled modes.",
      },
    },
  },
};

export const Checked: Story = {
  args: {
    defaultChecked: true,
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
    defaultChecked: true,
  },
};

export const Variant: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <Switch variant="primary" defaultChecked />
      <Switch variant="secondary" defaultChecked />
    </div>
  ),
};

export const Uncontrolled: Story = {
  render: () => (
    <Switch
      defaultChecked
      onChange={(checked) => {
        console.log("Switch:", checked);
      }}
    />
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false);
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Switch checked={checked} onChange={setChecked} /> <span> {checked ? "ON" : "OFF"} </span>
      </div>
    );
  },
};
