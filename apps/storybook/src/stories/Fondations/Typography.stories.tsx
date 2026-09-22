import type { CSSProperties } from "react";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { typography } from "@fe-design-systems/tokens";

const meta = {
  title: "Foundations/Typography",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const TypographySample = ({ name, value, style }: { name: string; value: string | number; style?: CSSProperties }) => (
  <div
    style={{
      marginBottom: "32px",
      paddingBottom: "24px",
      borderBottom: "1px solid #e5e7eb",
    }}
  >
    <div
      style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: 600,
      }}
    >
      {name}
    </div>

    <div
      style={{
        marginBottom: "4px",
        fontFamily: "monospace",
        fontSize: "13px",
        color: "#666",
      }}
    >
      {value}
    </div>

    <div style={style}>The quick brown fox jumps over the lazy dog.</div>
  </div>
);

export const FontFamily: Story = {
  render: () => (
    <div>
      <h2>Font Family</h2>

      {Object.entries(typography.fontFamily).map(([name, value]) => (
        <TypographySample
          key={name}
          name={name}
          value={value}
          style={{
            fontFamily: value,
            fontSize: "24px",
          }}
        />
      ))}
    </div>
  ),
};

export const FontSize: Story = {
  render: () => (
    <div>
      <h2>Font Size</h2>

      {Object.entries(typography.fontSize).map(([name, value]) => (
        <TypographySample
          key={name}
          name={name}
          value={value}
          style={{
            fontFamily: typography.fontFamily.sans,
            fontSize: value,
          }}
        />
      ))}
    </div>
  ),
};

export const FontWeight: Story = {
  render: () => (
    <div>
      <h2>Font Weight</h2>

      {Object.entries(typography.fontWeight).map(([name, value]) => (
        <TypographySample
          key={name}
          name={name}
          value={value}
          style={{
            fontFamily: typography.fontFamily.sans,
            fontSize: "20px",
            fontWeight: value,
          }}
        />
      ))}
    </div>
  ),
};

export const LineHeight: Story = {
  render: () => (
    <div>
      <h2>Line Height</h2>

      {Object.entries(typography.lineHeight).map(([name, value]) => (
        <TypographySample
          key={name}
          name={name}
          value={value}
          style={{
            maxWidth: "600px",
            fontFamily: typography.fontFamily.sans,
            fontSize: "18px",
            lineHeight: value,
          }}
        />
      ))}
    </div>
  ),
};
