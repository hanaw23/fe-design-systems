import { colors } from "./colors";
import { spacing } from "./spacing";
import { radius } from "./radius";
import { typography } from "./typography";
import { semanticTokens } from "./semantic";

const toKebabCase = (value: string) => value.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);

const formatValue = (value: string | number) => (typeof value === "number" ? `${value}px` : value);

const generateSemanticColorVariables = () => {
  const entries = Object.entries(semanticTokens.color);

  return entries
    .map(([key, value]) => {
      const primitiveEntry = Object.entries(colors).find(([, primitiveValue]) => primitiveValue === value);

      if (!primitiveEntry) {
        return `  --color-${toKebabCase(key)}: ${formatValue(value)};`;
      }

      const [primitiveKey] = primitiveEntry;

      return `  --color-${toKebabCase(key)}: var(--color-${toKebabCase(primitiveKey)});`;
    })
    .join("\n");
};

const generateVariables = (prefix: string, tokens: Record<string, string | number>) =>
  Object.entries(tokens)
    .map(([key, value]) => `  --${prefix}-${toKebabCase(key)}: ${formatValue(value)};`)
    .join("\n");

export const generateCss = () => `:root {
  /* Primitive Colors */
${generateVariables("color", colors)}

  /* Semantic Colors */
${generateSemanticColorVariables()}

  /* Spacing */
${generateVariables("spacing", spacing)}

  /* Radius */
${generateVariables("radius", radius)}

  /* Typography */
${generateVariables("font-family", typography.fontFamily)}
${generateVariables("font-size", typography.fontSize)}
${generateVariables("font-weight", typography.fontWeight)}
${generateVariables("line-height", typography.lineHeight)}
}
`;
