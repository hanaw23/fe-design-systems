import type { Meta, StoryObj } from "@storybook/react-vite";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";

import { Input } from "@fe-design-systems/react";

const meta = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter your name",
  },
};

export const Small: Story = {
  args: {
    size: "small",
    placeholder: "Small input",
  },
};

export const Large: Story = {
  args: {
    size: "large",
    placeholder: "Large input",
  },
};

export const Prefix: Story = {
  args: {
    prefix: <UserOutlined />,
    placeholder: "Enter your name",
  },
};

export const Suffix: Story = {
  args: {
    suffix: <SearchOutlined />,
    placeholder: "Search",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    value: "Disabled input",
  },
};

export const Error: Story = {
  args: {
    status: "error",
    value: "Invalid input",
    placeholder: "Enter your name",
    error: "Name cannot be blank",
  },
};

export const Password: Story = {
  args: {
    password: true,
    placeholder: "Enter your password",
  },
};

export const PasswordError: Story = {
  args: {
    password: true,
    status: "error",
    placeholder: "Enter your password",
    error: "Password cannot be blank",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter a number",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "Enter your email",
  },
};

export const OTP: Story = {
  args: {
    otp: true,
    length: 6,
  },
};

export const OTPError: Story = {
  args: {
    otp: true,
    length: 6,
    status: "error",
    error: "OTP cannot be blank",
  },
};

export const Textarea: Story = {
  args: {
    textarea: true,
    length: 100,
  },
};

export const TextareaError: Story = {
  args: {
    textarea: true,
    length: 100,
    status: "error",
    error: "This field cannot be blank",
  },
};

export const CustomWidth: Story = {
  args: {
    width: 320,
    placeholder: "Custom width",
  },
};

export const CustomHeight: Story = {
  args: {
    height: 40,
    placeholder: "Custom height",
  },
};

export const CustomWidthHeight: Story = {
  args: {
    height: 40,
    width: 320,
    placeholder: "Custom width and height",
  },
};
