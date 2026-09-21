# @fe-design-systems/tokens

Design tokens for FE Design Systems.

This package contains the shared design tokens used across FE Design Systems packages.

## Installation

```bash
npm install @fe-design-systems/tokens
```

# Usage

```ts
import { primitiveTokens, semanticTokens } from "@fe-design-systems/tokens";

console.log(primitiveTokens.color.blue500);
console.log(semanticTokens.color.primary);
```

# Token Structure

The package provides two token layers:

# Primitive Tokens

Primitive tokens contain the base values of the design system, such as colors, spacing, and border radius.

```ts
primitiveTokens.color;
primitiveTokens.spacing;
primitiveTokens.radius;
```

# Semantic Tokens

Semantic tokens describe how those values are used within the design system.

```ts
semanticTokens.color.primary;
semanticTokens.color.text;
semanticTokens.color.border;
semanticTokens.color.error;
```

# Framework Support

The tokens package is framework-agnostic and is intended to be shared across different UI implementations.

Current consumers:

- React
- Vue support planned
