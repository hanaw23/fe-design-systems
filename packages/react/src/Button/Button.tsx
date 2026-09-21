import { Button as AntButton } from "antd";
import type { ButtonProps as AntButtonProps } from "antd";
import { buttonTheme } from "../theme";

type ButtonVariant = "primary" | "secondary" | "success" | "danger" | "warning";
type ButtonAppearence = "solid" | "outline";

export type ButtonProps = Omit<AntButtonProps, "type" | "color" | "variant"> & {
  variant?: ButtonVariant;
  appearance?: ButtonAppearence;
};

export function Button({ variant = "primary", appearance = "solid", style, disabled, ...props }: ButtonProps) {
  const currentTheme = buttonTheme[variant][appearance];

  const buttonStyle = disabled
    ? style
    : {
        backgroundColor: currentTheme.background,
        color: currentTheme.color,
        borderColor: currentTheme.borderColor,
        ...style,
      };

  return <AntButton {...props} disabled={disabled} style={buttonStyle} />;
}
