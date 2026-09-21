import { useState } from "react";
import { Switch as AntSwitch } from "antd";
import type { SwitchProps as AntSwitchProps } from "antd";

import { semanticTokens } from "@fe-design-systems/tokens";

type SwitchVariant = "primary" | "secondary";

export type SwitchProps = AntSwitchProps & {
  variant?: SwitchVariant;
};

export function Switch({ variant = "primary", styles, checked, defaultChecked, onChange, ...props }: SwitchProps) {
  const color = variant === "secondary" ? semanticTokens.colorSecondary : semanticTokens.colorPrimary;

  const [internalChecked, setInternalChecked] = useState(defaultChecked ?? false);
  const isControlled = checked !== undefined;
  const currentChecked = isControlled ? checked : internalChecked;

  const handleChange: AntSwitchProps["onChange"] = (nextChecked, event) => {
    if (!isControlled) {
      setInternalChecked(nextChecked);
    }
    onChange?.(nextChecked, event);
  };

  const switchStyles = (info: { props: AntSwitchProps }) => {
    const baseStyles = typeof styles === "function" ? styles(info) : styles;

    return {
      ...baseStyles,
      root: {
        ...baseStyles?.root,
        ...(currentChecked && !info.props.disabled
          ? {
              backgroundColor: color,
              borderColor: "transparent",
            }
          : {}),
      },
    };
  };

  return <AntSwitch {...props} checked={currentChecked} onChange={handleChange} styles={switchStyles} />;
}
