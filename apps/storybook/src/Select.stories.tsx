import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import { Select } from "@fe-design-systems/react";

const meta = {
  title: "Components/Select",
  component: Select,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;

type Story = StoryObj<typeof meta>;

const options = [
  {
    value: "richard",
    label: "Richard Doe",
  },
  {
    value: "john",
    label: "John Doe",
  },
  {
    value: "jane",
    label: "Jane Doe",
  },
];

export const Default: Story = {
  args: {
    options,
    placeholder: "Select a user",
  },
};

export const Disabled: Story = {
  args: {
    options,
    placeholder: "Select a user",
    disabled: true,
  },
};

export const Search: Story = {
  args: {
    options,
    placeholder: "Search a user",
    showSearch: true,
  },
};

export const Prefix: Story = {
  args: {
    options,
    placeholder: "Select a user",
    prefix: <UserOutlined />,
  },
};

export const Suffix: Story = {
  args: {
    options,
    placeholder: "Select a user",
    suffixIcon: <SearchOutlined />,
  },
};

export const Small: Story = {
  args: {
    options,
    placeholder: "Small select",
    size: "small",
  },
};

export const Large: Story = {
  args: {
    options,
    placeholder: "Large select",
    size: "large",
  },
};

export const CustomWidth: Story = {
  args: {
    options,
    placeholder: "Custom width",
    width: 320,
  },
};

export const CustomHeight: Story = {
  args: {
    options,
    placeholder: "Custom height",
    height: 320,
  },
};

export const CustomWidthHeight: Story = {
  args: {
    options,
    placeholder: "Custom width and height",
    height: 320,
    width: 320,
  },
};
