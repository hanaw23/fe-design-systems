import { Button as AntButton } from "antd";
import type { ButtonProps as AntButtonProps } from "antd";
import { semanticTokens } from "@fe-design-systems/tokens";

type ButtonVariant = "primary" | "secondary" | "success" | "danger" | "warning";
type ButtonAppearence = "solid" | "outline";

export type ButtonProps = Omit<AntButtonProps, "type" | "color" | "variant"> & {
  variant?: ButtonVariant;
  appearance?: ButtonAppearence;
};

export function Button({ variant = "primary", appearance = "solid", style, ...props }: ButtonProps) {
  const colorMap = {
    primary: semanticTokens.colorPrimary,
    secondary: semanticTokens.colorSecondary,
    success: semanticTokens.colorSuccess,
    danger: semanticTokens.colorError,
    warning: semanticTokens.colorWarning,
  };

  const color = colorMap[variant];

  const buttonStyle =
    appearance === "outline"
      ? {
          backgroundColor: semanticTokens.colorBackground,
          color,
          borderColor: color,
          ...style,
        }
      : {
          backgroundColor: color,
          color: semanticTokens.colorBackground,
          borderColor: color,
          ...style,
        };

  return <AntButton {...props} style={buttonStyle} />;
}
