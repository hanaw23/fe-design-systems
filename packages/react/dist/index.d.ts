import * as react from 'react';
import { ReactNode } from 'react';
import { ButtonProps as ButtonProps$1 } from 'antd';

type ButtonProps = ButtonProps$1;
declare function Button(props: ButtonProps): react.JSX.Element;

type DesignSystemProviderPage = {
    children: ReactNode;
};
declare const DesignSystemProvider: ({ children }: DesignSystemProviderPage) => react.JSX.Element;

export { Button, DesignSystemProvider };
