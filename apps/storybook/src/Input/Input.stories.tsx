import type { Meta, StoryObj } from "@storybook/react-vite";
import { Input } from "@fe-design-systems/react";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Input>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Overview: Story = {
  args: {
    placeholder: "Enter something...",
  },
};

export const WithValue: Story = {
  args: {
    defaultValue: "Hello world",
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
    placeholder: "Enter your email",
    status: "error",
    error: "Please enter a valid email address.",
  },
};

export const Password: Story = { args: { password: true, placeholder: "Enter your password" } };

export const OTP: Story = { args: { otp: true } };

export const TextArea: Story = { args: { textarea: true, placeholder: "Enter your message...", rows: 4 } };

export const CustomSize: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px", width: "400px" }}>
      <Input width={200} placeholder="Width: 200px" /> <Input width="100%" placeholder="Width: 100%" /> <Input height={48} placeholder="Height: 48px" />
    </div>
  ),
};

export const FormExample: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "320px" }}>
      <div>
        <label style={{ display: "block", marginBottom: "6px" }}> Email </label> <Input width="100%" defaultValue="hana@example.com" />
      </div>
      <div>
        <label style={{ display: "block", marginBottom: "6px" }}> Password </label> <Input password width="100%" defaultValue="password123" />
      </div>
      <div>
        <label style={{ display: "block", marginBottom: "6px" }}> Verification Code </label> <Input otp defaultValue="123456" />
      </div>
      <div>
        <label style={{ display: "block", marginBottom: "6px" }}> Message </label> <Input textarea width="100%" defaultValue="This is an example message." rows={4} />
      </div>
    </div>
  ),
};

export const FormWithError: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: "16px", width: "320px" }}>
      <div>
        <label style={{ display: "block", marginBottom: "6px" }}> Email </label> <Input width="100%" status="error" defaultValue="hana@" error="Please enter a valid email address." />
      </div>
      <div>
        <label style={{ display: "block", marginBottom: "6px" }}> Password </label> <Input password width="100%" status="error" defaultValue="123" error="Password must be at least 8 characters." />
      </div>
      <div>
        <label style={{ display: "block", marginBottom: "6px" }}> Verification Code </label> <Input otp status="error" defaultValue="123" error="Please enter the 6-digit verification code." />
      </div>
    </div>
  ),
};
