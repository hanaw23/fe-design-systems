import { Checkbox as AntCheckbox } from "antd";
import type { CheckboxProps as AntCheckboxProps } from "antd";

import { semanticTokens } from "@fe-design-systems/tokens";

type CheckboxVariant = "primary" | "secondary";

export type CheckboxProps = AntCheckboxProps & {
  variant?: CheckboxVariant;
};

export function Checkbox({ variant = "primary", styles, disabled, ...props }: CheckboxProps) {
  const color = variant === "secondary" ? semanticTokens.color.secondary : semanticTokens.color.primary;

  return (
    <AntCheckbox
      {...props}
      disabled={disabled}
      styles={{
        icon: {
          backgroundColor: color,
          borderColor: "transparent",
        },
      }}
    />
  );
}
