# @fe-design-systems/react

React components for FE Design Systems, built on top of Ant Design.

## Installation

```bash
npm install @fe-design-systems/react
```

# Usage

```ts
import {
  Button,
  DesignSystemProvider,
  Input,
  Select,
} from '@fe-design-systems/react'

export default function App() {
  return (
    <DesignSystemProvider>
      <Input placeholder="Enter your name" />

      <Select
        placeholder="Select an option"
        options={[
          { label: 'Option 1', value: 'option-1' },
          { label: 'Option 2', value: 'option-2' },
        ]}
      />

      <Button type="primary">
        Submit
      </Button>
    </DesignSystemProvider>
  )
}
```

# Components

Currently available:

1. Button
2. Input
3. Select

# Design System Provider

`DesignSystemProvider` provides the default design system theme and allows consumers to customize the Ant Design theme.

```ts
<DesignSystemProvider>
  <App />
</DesignSystemProvider>
```

A custom theme can also be provided:

```ts
<DesignSystemProvider
  theme={{
    token: {
      colorPrimary: '#1677ff',
    },
  }}
>
  <App />
</DesignSystemProvider>
```

# Design Tokens

The React package uses `@fe-design-systems/tokens` as its shared design token source.

The tokens package can also be used directly:

```bash
npm install @fe-design-systems/tokens
```

# Underlying Library

This package is built on top of Ant Design.

Component APIs currently follow Ant Design where possible.
