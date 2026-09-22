import type { Meta, StoryObj } from "@storybook/react-vite";
import { radius, spacing } from "@fe-design-systems/tokens";

const meta = {
  title: "Foundations/Spacing & Radius",
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Spacing: Story = {
  render: () => (
    <div>
      <h2>Spacing</h2>

      {Object.entries(spacing).map(([name, value]) => (
        <div
          key={name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              width: value,
              height: "32px",
              background: "#393E41",
              flexShrink: 0,
            }}
          />

          <div>
            <div style={{ fontWeight: 600 }}>{name}</div>

            <div
              style={{
                fontFamily: "monospace",
                fontSize: "13px",
                color: "#666",
              }}
            >
              {value}
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const Radius: Story = {
  render: () => (
    <div>
      <h2>Border Radius</h2>

      {Object.entries(radius).map(([name, value]) => (
        <div
          key={name}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "64px",
              background: "#393E41",
              borderRadius: value,
              flexShrink: 0,
            }}
          />

          <div>
            <div style={{ fontWeight: 600 }}>{name}</div>

            <div
              style={{
                fontFamily: "monospace",
                fontSize: "13px",
                color: "#666",
              }}
            >
              {value}px
            </div>
          </div>
        </div>
      ))}
    </div>
  ),
};
