import * as react from 'react';
import { ReactNode } from 'react';
import { ButtonProps as ButtonProps$1, ThemeConfig } from 'antd';

type ButtonProps = ButtonProps$1;
declare function Button(props: ButtonProps): react.JSX.Element;

type DesignSystemProviderProps = {
    children: ReactNode;
    theme?: ThemeConfig;
};
declare const DesignSystemProvider: ({ children, theme: customTheme }: DesignSystemProviderProps) => react.JSX.Element;

export { Button, DesignSystemProvider };
