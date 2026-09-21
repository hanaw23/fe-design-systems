declare const colors: {
    readonly white: "#ffffff";
    readonly blue300: "#2B7CAB";
    readonly blue500: "#1677ff";
    readonly gray100: "#F8FAFC";
    readonly gray200: "#E5E7EB";
    readonly gray400: "#9CA3AF";
    readonly gray600: "#393E41";
    readonly gray900: "#1C1E1F";
    readonly yellow600: "#F2811D";
    readonly red500: "#FF151A";
    readonly red700: "#8E1A0D";
    readonly green500: "#3ECC62";
};

declare const spacing: {
    readonly xs: "4px";
    readonly sm: "8px";
    readonly md: "16px";
    readonly lg: "24px";
    readonly xl: "32px";
};

declare const radius: {
    readonly sm: 4;
    readonly md: 8;
    readonly lg: 12;
};

declare const typography: {
    readonly fontFamily: {
        readonly sans: "Roboto, system-ui, sans-serif";
        readonly mono: "monospace";
    };
    readonly fontSize: {
        readonly xs: "12px";
        readonly sm: "14px";
        readonly md: "16px";
        readonly lg: "18px";
        readonly xl: "24px";
        readonly "2xl": "32px";
    };
    readonly fontWeight: {
        readonly regular: 400;
        readonly medium: 500;
        readonly semibold: 600;
        readonly bold: 700;
    };
    readonly lineHeight: {
        readonly tight: 1.25;
        readonly normal: 1.5;
        readonly relaxed: 1.75;
    };
};

declare const primitiveTokens: {
    readonly color: {
        readonly white: "#ffffff";
        readonly blue300: "#2B7CAB";
        readonly blue500: "#1677ff";
        readonly gray100: "#F8FAFC";
        readonly gray200: "#E5E7EB";
        readonly gray400: "#9CA3AF";
        readonly gray600: "#393E41";
        readonly gray900: "#1C1E1F";
        readonly yellow600: "#F2811D";
        readonly red500: "#FF151A";
        readonly red700: "#8E1A0D";
        readonly green500: "#3ECC62";
    };
    readonly spacing: {
        readonly xs: "4px";
        readonly sm: "8px";
        readonly md: "16px";
        readonly lg: "24px";
        readonly xl: "32px";
    };
    readonly radius: {
        readonly sm: 4;
        readonly md: 8;
        readonly lg: 12;
    };
};

declare const semanticTokens: {
    readonly color: {
        readonly primary: "#393E41";
        readonly secondary: "#8E1A0D";
        readonly border: "#9CA3AF";
        readonly disabled: "#E5E7EB";
        readonly error: "#FF151A";
        readonly warning: "#F2811D";
        readonly success: "#3ECC62";
        readonly text: "#1C1E1F";
        readonly textSecondary: "#9CA3AF";
        readonly background: "#ffffff";
        readonly backgroundSecondary: "#F8FAFC";
    };
};

export { colors, primitiveTokens, radius, semanticTokens, spacing, typography };
