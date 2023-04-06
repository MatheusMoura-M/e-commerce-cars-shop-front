import { extendTheme } from "@chakra-ui/react";

const custonTheme = extendTheme({
  colors: {
    brand: {
      1: "#4529E6",
      2: "#5126EA",
      3: "#B0A6F0",
      4: "#EDEAFD",
    },
    grey: {
      0: "#0B0D0D",
      1: "#212529",
      2: "#495057",
      3: "#868E96",
      4: "#ADB5BD",
      5: "#CED4DA",
      6: "#DEE2E6",
      7: "#E9ECEF",
      8: "#F1F3F5",
      9: "#F8F9FA",
      10: "#FDFDFD",
    },
    alert: {
      1: "#CD2B31",
      2: "#FDD8D8",
      3: "#FFE5E5",
    },
    sucess: {
      1: "#18794E",
      2: "#CCEBD7",
      3: "#DDF3E4",
    },
    random: {
      1: "#E34D8C",
      2: "#C04277",
      3: "#7D2A4D",
      4: "#7000FF",
      5: "#6200E3",
      6: "#36007D",
      7: "#349974",
      8: "#2A7D5F",
      9: "#153D2E",
      10: "#6100FF",
      11: "#5700E3",
      12: "#30007D",
    },
  },
  fonts: {
    inter: "Inter, sans-serif",
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
  fontWeight: {
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
          _hover: {
            bg: "#212529",
            color: "#FFFFFF",
          },
        },
        grey2: {
          bg: "#DEE2E6",
          color: "#212529",
          _hover: {
            bg: "#CED4DA",
            color: "#212529",
          },
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
          border: "2px solid",
          borderColor: "#0B0D0D",
          color: "#0B0D0D",
          _hover: {
            bg: "#212529",
            color: "#FDFDFD",
          },
        },
        grey7: {
          bg: "transparent",
          border: "2px solid",
          borderColor: "#ADB5BD",
          color: "#0B0D0D",
          _hover: {
            bg: "#212529",
            color: "#FDFDFD",
          },
        },
        grey8: {
          bg: "transparent",
          color: "#0B0D0D",
          _hover: {
            bg: "#212529",
            color: "#0B0D0D",
          },
        },
        invisible: {
          bg: "transparent",
          color: "#FDFDFD",
          border: "2px solid",
          borderColor: "#FDFDFD",
          _hover: {
            bg: "#FDFDFD",
            color: "#212529",
          },
        },
        alert1: {
          bg: "#FFE5E5",
          color: "#CD2B31",
          _hover: {
            bg: "#FDD8D8",
            color: "#CD2B31",
          },
        },
        sucess1: {
          bg: "#DDF3E4",
          color: "#18794E",
          _hover: {
            bg: "#DDF3E4",
            color: "#18794E",
          },
        },
        brand1: {
          bg: "#4529E6",
          color: "#FFFFFF",
          _hover: {
            bg: "#5126EA",
            color: "#FFFFFF",
          },
        },
        brand2: {
          bg: "#EDEAFD",
          color: "#4529E6",
        },
        brand3: {
          bg: "transparent",
          border: "2px solid",
          borderColor: "#4529E6",
          color: "#4529E6",
          _hover: {
            bg: "#EDEAFD",
            border: "2px solid",
            borderColor: "#4529E6",
            color: "#4529E6",
          },
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
