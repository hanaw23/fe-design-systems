import type { Meta, StoryObj } from "@storybook/react-vite";
import { colors, semanticTokens } from "@fe-design-systems/tokens";

const meta = {
  title: "Foundations/Colors",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

const ColorSwatch = ({ name, value }: { name: string; value: string }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "12px",
      marginBottom: "12px",
    }}
  >
    <div
      style={{
        width: "64px",
        height: "64px",
        borderRadius: "8px",
        background: value,
        border: "1px solid #e5e7eb",
      }}
    />

    <div>
      <div style={{ fontWeight: 600 }}>{name}</div>
      <div style={{ fontFamily: "monospace", color: "#666" }}>{value}</div>
    </div>
  </div>
);

export const Primitive: Story = {
  render: () => (
    <div>
      <h2>Primitive Colors</h2>

      {Object.entries(colors).map(([name, value]) => (
        <ColorSwatch key={name} name={name} value={value} />
      ))}
    </div>
  ),
};

export const Semantic: Story = {
  render: () => (
    <div>
      <h2>Semantic Colors</h2>

      {Object.entries(semanticTokens.color).map(([name, value]) => (
        <ColorSwatch key={name} name={name} value={value} />
      ))}
    </div>
  ),
};
