import * as react from 'react';
import { ReactNode } from 'react';
import { ButtonProps as ButtonProps$1, InputProps as InputProps$1, SelectProps as SelectProps$1, ThemeConfig } from 'antd';

type ButtonProps = ButtonProps$1;
declare function Button(props: ButtonProps): react.JSX.Element;

type InputProps = InputProps$1;
declare function Input(props: InputProps): react.JSX.Element;

type SelectProps = SelectProps$1;
declare const Select: (props: SelectProps) => react.JSX.Element;

type DesignSystemProviderProps = {
    children: ReactNode;
    theme?: ThemeConfig;
};
declare const DesignSystemProvider: ({ children, theme: customTheme }: DesignSystemProviderProps) => react.JSX.Element;

export { Button, type ButtonProps, DesignSystemProvider, Input, type InputProps, Select, type SelectProps };
