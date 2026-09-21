import { Button as AntButton } from "antd";
import type { ButtonProps as AntButtonProps } from "antd";
import type { ReactNode } from "react";
import { buttonTheme } from "../theme";

type ButtonVariant = "primary" | "secondary" | "success" | "danger" | "warning";
type ButtonAppearence = "solid" | "outline";

export type ButtonProps = Omit<AntButtonProps, "type" | "color" | "variant"> & {
  variant?: ButtonVariant;
  appearance?: ButtonAppearence;
  prefix?: ReactNode;
  suffix?: ReactNode;
  contentGap?: number;
};

export function Button({ variant = "primary", appearance = "solid", style, disabled, prefix, suffix, children, contentGap = 8, ...props }: ButtonProps) {
  const currentTheme = buttonTheme[variant][appearance];

  const buttonStyle = disabled
    ? style
    : {
        backgroundColor: currentTheme.background,
        color: currentTheme.color,
        borderColor: currentTheme.borderColor,
        ...style,
      };

  return (
    <AntButton {...props} disabled={disabled} style={buttonStyle}>
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: contentGap,
        }}
      >
        {prefix}
        {children}
        {suffix}
      </span>
    </AntButton>
  );
}
