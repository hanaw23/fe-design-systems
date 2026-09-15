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
    };
    readonly spacing: {
        readonly xs: "4px";
        readonly sm: "8px";
        readonly md: "16px";
        readonly lg: "24px";
        readonly xl: "32px";
    };
    readonly radius: {
        readonly sm: "4px";
        readonly md: "8px";
        readonly lg: "12px";
    };
};
declare const semanticTokens: {
    readonly colorPrimary: "#393E41";
    readonly colorSecondary: "#8E1A0D";
    readonly colorBorder: "#2B7CAB";
    readonly colorDisabled: "#E5E7EB";
    readonly colorText: "#1C1E1F";
    readonly colorTextDisabled: "#9CA3AF";
    readonly colorPlaceholder: "#2B7CAB";
    readonly colorBackground: "#ffffff";
    readonly colorBackgroundSecondary: "#F8FAFC";
    readonly borderRadius: "8px";
};

export { primitiveTokens, semanticTokens };
