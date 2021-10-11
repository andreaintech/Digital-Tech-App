import { Dimensions, PixelRatio } from "react-native";
const { width, height } = Dimensions.get("window");
export const scaleFont = (size: any) => size * PixelRatio.getFontScale();

export const COLORS = {
    //* Base colors
    PRIMARY: "#5a37b5",     //* ocean blue
    SECONDARY: "#00d092",   //* caribbean green
    TERTIARY: "#ffd200",   //* cyber yellow
    QUATERNARY: "#99dbd1",   //* middle blue green
    QUINARY: "#9000ff",   //* electric violet

    //* White, gray and black colors
    BLACK: "#000",
    ALMOST_BLACK: "#1E1F20",

    WHITE: "#FFF",
    LIGHT_WHITE: "#f7f7f9",
    LIGHT_WHITE2: "#e2e2e5",

    GRAY: "#808080",
    LIGHT_GRAY: "#EBEBF4",
    LIGHT_GRAY2: "#F6F6F7",
    LIGHT_GRAY3: "#EFEFF1",
    LIGHT_GRAY4: "#F8F8F9",
    MEDIUM_GRAY: "#D9DBE9",
    DARK_GRAY: "#c4c4c4",
    DARK_GRAY2: "#898C95",
    DARK_GRAY3: "#67677e",
    DARK_GRAY4: "#383859",

    //* Pop up messages colors
    DANGER: "#ff0f0f",
    WARNING: "#ffae42",
    INFO: "#408fff",
    SUCCESS: "#4BB543",
}

export const SIZES = {
    //* Global sizes
    BASE: 8,
    FONT: 14,
    RADIUS: 30,
    PADDING: 10,
    PADDING_2: 12,

    //* Font sizes
    EXTRA_LARGE_TITLE: scaleFont(50),
    LARGE_TITLE: scaleFont(38),
    H1: scaleFont(25),
    H2: scaleFont(22),
    H3: scaleFont(20),
    H4: scaleFont(18),
    H5: scaleFont(16),
    H6: scaleFont(14),
    PARAGRAPH: scaleFont(12),
    BODY: scaleFont(10),

    //* App dimensions
    WIDTH: width,
    HEIGHT: height
}

export const FONTS = {
    //* FONT FAMILY
    FONT_FAMILY_REGULAR: "Rubik-Regular",
    FONT_FAMILY_ITALIC: "Rubik-Italic",

    FONT_FAMILY_MEDIUM: "Rubik-Medium",
    FONT_FAMILY_MEDIUM_ITALIC: "Rubik-MediumItalic",

    FONT_FAMILY_BOLD: "Rubik-Bold",
    FONT_FAMILY_BOLD_ITALIC: "Rubik-BoldItalic",
    FONT_FAMILY_SEMI_BOLD: "Rubik-SemiBold",
    FONT_FAMILY_SEMI_BOLD_ITALIC: "Rubik-SemiBoldItalic",

    FONT_FAMILY_EXTRA_BOLD: "Rubik-ExtraBold",
    FONT_FAMILY_EXTRA_BOLD_ITALIC: "Rubik-ExtraBoldItalic",

    FONT_FAMILY_BLACK: "Rubik-Black",
    FONT_FAMILY_BLACK_ITALIC: "Rubik-BlackItalic",

    FONT_FAMILY_LIGHT: "Rubik-Light",
    FONT_FAMILY_LIGHT_ITALIC: "Rubik-LightItalic",
}

const appTheme = { COLORS, SIZES, FONTS }

export default appTheme