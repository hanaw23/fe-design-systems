import { Checkbox as AntCheckbox } from "antd";
import type { CheckboxProps as AntCheckboxProps } from "antd";

import { semanticTokens } from "@fe-design-systems/tokens";

type CheckboxVariant = "primary" | "secondary";

export type CheckboxProps = AntCheckboxProps & {
  variant?: CheckboxVariant;
};

export function Checkbox({ variant = "primary", styles, ...props }: CheckboxProps) {
  const color = variant === "secondary" ? semanticTokens.colorSecondary : semanticTokens.colorPrimary;

  return (
    <AntCheckbox
      {...props}
      styles={{
        icon: {
          backgroundColor: color,
        },
      }}
    />
  );
}
