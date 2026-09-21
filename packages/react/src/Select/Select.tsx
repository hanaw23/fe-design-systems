import { Select as AntSelect } from "antd";
import type { SelectProps as AntSelectProps } from "antd";
import { selectTheme } from "../theme";

export type SelectProps = AntSelectProps & {
  width?: number | string;
  height?: number | string;
};

export function Select({ width, height, style, disabled, ...props }: SelectProps) {
  const currentTheme = disabled ? selectTheme.disabled : selectTheme.default;

  return (
    <AntSelect
      {...props}
      disabled={disabled}
      styles={{
        root: {
          backgroundColor: currentTheme.background,
          color: currentTheme.color,
          borderColor: currentTheme.borderColor,
        },
      }}
      style={{
        width,
        ...style,
      }}
    />
  );
}
