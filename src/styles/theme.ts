import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  xs: "21.3em", // 340px
  xs1: "23.43em", // 375px
  xs2: "25em", // 400px
  xs3: "27.37em", // 438px
  sm: "30em", // 480px
  sm1: "31.87em", // 510px
  xsm2: "34.375em", // 550px
  sm2: "40em", // 640px
  sm3: "43.55em", // 697px
  sm4: "45em", // 720px
  md: "48em", // 768px
  md2: "55em", // 880px
  lg: "62em", // 992px
  lg2: "64.37em", // 1030px
  lg3: "72em", // 1152px
  xl: "80em", // 1280px
  xl1: "84.37em", // 1350px
  xl2: "88em", // 1408px
  "2xl": "96em", // 1536px
};

const custonTheme = extendTheme({
  breakpoints,
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
    inter: `'Inter', sans-serif`,
    lexend: `'Lexend', sans-serif`,
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
    md: "0.575rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
  },
  styles: {
    global: {
      body: {
        bg: "#F7F7F7",
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
        hamburguer: {
          bg: "transparent",
          color: "#2C2C2C",
        },
        grey0: {
          w: "120px",
          h: "48px",
          bg: "#0B0D0D",
          color: "#FFFFFF",
          _hover: {
            bg: "#212529",
            color: "#FFFFFF",
            transition: "0.5s",
          },
          transition: "0.5s",
        },
        grey1: {
          w: "120px",
          h: "48px",
          bg: "#DEE2E6",
          color: "#212529",
          _hover: {
            bg: "#CED4DA",
            color: "#212529",
            transition: "0.5s",
          },
          transition: "0.5s",
        },
        grey2: {
          w: "120px",
          h: "48px",
          bg: "#CED4DA",
          color: "#FFFFFF",
          _hover: {
            color: "#212529",
            transition: "0.5s",
          },
          transition: "0.5s",
        },
        grey3: {
          w: "120px",
          h: "48px",
          bg: "transparent",
          border: "2px solid",
          borderColor: "#0B0D0D",
          color: "#0B0D0D",
          _hover: {
            bg: "#212529",
            color: "#FDFDFD",
            transition: "0.5s",
          },
          transition: "0.5s",
        },
        grey4: {
          w: "120px",
          h: "48px",
          bg: "transparent",
          border: "2px solid",
          borderColor: "#ADB5BD",
          color: "#0B0D0D",
          _hover: {
            bg: "#212529",
            color: "#FDFDFD",
            transition: "0.8s",
          },
          transition: "0.8s",
        },
        grey5: {
          w: "120px",
          h: "48px",
          bg: "transparent",
          color: "#0B0D0D",
          _hover: {
            bg: "#F1F3F5",
            transition: "0.5s",
          },
          transition: "0.5s",
        },
        greyComments: {
          w: "max-content",
          h: "24px",
          bg: "#E9ECEF",
          color: "#868E96",
          fontSize: "12px",
          borderRadius: "24px",
          fontFamily: "inter",
          _hover: {
            bg: "#868E96",
            color: "#E9ECEF",
            transition: "0.5s",
          },
          transition: "0.5s",
        },
        invisible: {
          w: "120px",
          h: "48px",
          bg: "transparent",
          color: "#FDFDFD",
          border: "2px solid",
          borderColor: "#FDFDFD",
          _hover: {
            bg: "#FDFDFD",
            color: "#212529",
            transition: "0.5s",
          },
          transition: "0.5s",
        },
        alert1: {
          w: "120px",
          h: "48px",
          bg: "#FFE5E5",
          color: "#CD2B31",
          _hover: {
            bg: "#FDD8D8",
            color: "#CD2B31",
            transition: "0.5s",
          },
          transition: "0.5s",
        },
        sucess1: {
          w: "120px",
          h: "48px",
          bg: "#DDF3E4",
          color: "#18794E",
          _hover: {
            bg: "#DDF3E4",
            color: "#18794E",
            transition: "0.5s",
          },
          transition: "0.5s",
        },
        brand1: {
          w: "120px",
          h: "48px",
          bg: "#4529E6",
          color: "#FFFFFF",
          _hover: {
            bg: "#5126EA",
            color: "#FFFFFF",
            transition: "0.5s",
          },
          transition: "0.5s",
        },
        brand2: {
          w: "120px",
          h: "48px",
          bg: "#EDEAFD",
          color: "#4529E6",
        },
        brand3: {
          w: "120px",
          h: "48px",
          bg: "transparent",
          border: "2px solid",
          borderColor: "#4529E6",
          color: "#4529E6",
          _hover: {
            bg: "#EDEAFD",
            border: "2px solid",
            borderColor: "#4529E6",
            color: "#4529E6",
            transition: "0.5s",
          },
          transition: "0.5s",
        },
        brand6: {
          w: "120px",
          h: "48px",
          bg: "#B0A6F0",
          color: "#EDEAFD",
        },
      },
    },
  },
});

export default custonTheme;
