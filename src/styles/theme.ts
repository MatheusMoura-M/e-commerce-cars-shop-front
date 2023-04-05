import { extendTheme } from "@chakra-ui/react";

const custonTheme = extendTheme({
  colors: {
    blue: {
      300: "#869AFD",
      600: "#0A369D",
      700: "#002887",
    },
    gray: {
      50: "#F7FAFC",
      300: "#CBD5E0",
      500: "#9e9ea7",
      700: "#848491",
      900: "#171923",
    },
    red: {
      600: "#df1545",
      700: "#c40633",
    },
    green: {
      600: "#168821",
      700: "#13801E",
    },
  },
  fonts: {
    heading: "Montserrat",
    body: "Montserrat",
  },
  fontSises: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  fontWeights: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },

  radii: {
    none: "0",
    sm: "0.125rem",
    base: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
  },
  styles: {
    global: {
      body: {
        bg: "white",
      },
    },
  },
  components: {
    Button: {
      variants: {
        default: {
          bg: "#0B0D0D",
          color: "#FFFFFF",
        },
        grey0: {
          bg: "#0B0D0D",
          color: "#FFFFFF",
        },
        grey1: {
          bg: "#212529",
          color: "#FFFFFF",
        },
        grey2: {
          bg: "#DEE2E6",
          color: "#212529",
        },
        grey3: {
          bg: "#CED4DA",
          color: "#212529",
        },
        grey4: {
          bg: "#CED4DA",
          color: "#FFFFFF",
        },
        grey5: {
          bg: "#FDFDFD",
          color: "#212529",
        },
        grey6: {
          bg: "transparent",
          color: "#FDFDFD",
        },
        grey7: {
          bg: "transparent",
          border: "2px solid",
          borderColor: "#0B0D0D",
          color: "#0B0D0D",
        },
        grey8: {
          bg: "#212529",
          color: "#FDFDFD",
        },
        grey9: {
          bg: "transparent",
          border: "2px solid",
          borderColor: "#ADB5BD",
          color: "#0B0D0D",
        },
        grey10: {
          bg: "#212529",
          color: "#FDFDFD",
        },
        grey11: {
          bg: "transparent",
          color: "#0B0D0D",
        },
        grey12: {
          bg: "#212529",
          color: "#0B0D0D",
        },
        alert1: {
          bg: "#FFE5E5",
          color: "#CD2B31",
        },
        alert2: {
          bg: "#FDD8D8",
          color: "#CD2B31",
        },
        sucess1: {
          bg: "#DDF3E4",
          color: "#18794E",
        },
        sucess2: {
          bg: "#DDF3E4",
          color: "#18794E",
        },
        brand1: {
          bg: "#4529E6",
          color: "#FFFFFF",
        },
        brand2: {
          bg: "#5126EA",
          color: "#FFFFFF",
        },
        brand3: {
          bg: "#EDEAFD",
          color: "#4529E6",
        },
        brand4: {
          bg: "transparent",
          border: "2px solid",
          borderColor: "#4529E6",
          color: "#4529E6",
        },
        brand5: {
          bg: "#EDEAFD",
          border: "2px solid",
          borderColor: "#4529E6",
          color: "#4529E6",
        },
        brand6: {
          bg: "#B0A6F0",
          color: "#EDEAFD",
        },
      },
    },
  },
});

export default custonTheme;
