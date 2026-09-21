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
    readonly colorPrimary: "#393E41";
    readonly colorSecondary: "#8E1A0D";
    readonly colorBorder: "#9CA3AF";
    readonly colorDisabled: "#E5E7EB";
    readonly colorError: "#FF151A";
    readonly colorWarning: "#F2811D";
    readonly colorSuccess: "#3ECC62";
    readonly colorText: "#1C1E1F";
    readonly colorTextSecondary: "#9CA3AF";
    readonly colorBackground: "#ffffff";
    readonly colorBackgroundSecondary: "#F8FAFC";
    readonly borderRadius: 8;
};

export { primitiveTokens, semanticTokens };
