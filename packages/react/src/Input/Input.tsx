import { Input as AntInput, Typography } from "antd";
import type { InputProps as AntInputProps } from "antd";
import type { ComponentProps, ReactNode } from "react";
import { inputTheme } from "../theme";

type AntPasswordProps = ComponentProps<typeof AntInput.Password>;
type AntOTPProps = ComponentProps<typeof AntInput.OTP>;
type AntTextAreaProps = ComponentProps<typeof AntInput.TextArea>;

type CommonInputProps = {
  width?: number | string;
  height?: number | string;
  error?: ReactNode;
};

export type InputProps =
  | (AntInputProps &
      CommonInputProps & {
        password?: false;
        otp?: false;
        textarea?: false;
      })
  | (AntPasswordProps &
      CommonInputProps & {
        password: true;
        otp?: false;
        textarea?: false;
      })
  | (AntOTPProps &
      CommonInputProps & {
        otp: true;
        password?: false;
        textarea?: false;
      })
  | (AntTextAreaProps &
      CommonInputProps & {
        textarea: true;
        password?: false;
        otp?: false;
      });

export function Input(props: InputProps) {
  const { width, height, password, otp, textarea, ...componentProps } = props;

  const isError = props?.status === "error" && props?.error;

  const inputStyles = isError
    ? {
        input: {
          color: inputTheme.danger.color,
        },
      }
    : undefined;

  const style = {
    width,
    height,
    ...props.style,
  };

  const componentInput = () => {
    switch (true) {
      case password:
        return <AntInput.Password {...(componentProps as AntPasswordProps)} style={style} />;

      case otp:
        return <AntInput.OTP {...(componentProps as AntOTPProps)} style={style} />;

      case textarea:
        return <AntInput.TextArea {...(componentProps as AntTextAreaProps)} style={style} />;

      default:
        return <AntInput {...(componentProps as AntInputProps)} style={style} styles={inputStyles} />;
    }
  };

  return (
    <>
      {componentInput()}

      {isError && (
        <Typography.Text
          type="danger"
          style={{
            display: "block",
            marginTop: 4,
            fontSize: 10,
            lineHeight: "20px",
          }}
        >
          {props.error}
        </Typography.Text>
      )}
    </>
  );
}
