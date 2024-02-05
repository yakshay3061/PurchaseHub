import { createTheme, responsiveFontSizes } from "@mui/material";

// Updated color palette
const primary = "#1565c0";  // A different shade of blue
const secondary = "#ffeb3b";  // Bright yellow
const primaryText = "#ffffff";  // White for better contrast on primary color
const black = "#212121";
const darkBlack = "rgb(38, 50, 56)";
const background = "#eceff1";
const warningLight = "rgba(255, 152, 0, .3)";
const warningMain = "rgba(255, 152, 0, .5)";
const warningDark = "rgba(255, 152, 0, .7)";
const grey = '#90a4ae';

const borderWidth = 3;
const borderColor = "rgba(0, 0, 0, 0.2)";

const xl = 1800;
const lg = 1200;
const md = 900;
const sm = 600;
const xs = 0;

const spacing = 8;

const theme = createTheme({
  palette: {
    primary: { main: primary, contrastText: primaryText },
    secondary: { main: secondary },
    common: {
      grey,
      black,
      darkBlack
    },
    warning: {
      light: warningLight,
      main: warningMain,
      dark: warningDark
    },
    tonalOffset: 0.2,
    background: {
      default: background
    },
    spacing
  },
  breakpoints: {
    values: {
      xl,
      lg,
      md,
      sm,
      xs
    }
  },
  border: {
    borderColor: borderColor,
    borderWidth: borderWidth
  },
  components: {
    // Component overrides...
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    button: {
      fontWeight: 600,
    },
    h5: {
      fontWeight: 700,
      color: darkBlack,
    },
    // Additional typography settings...
  }
});

export default responsiveFontSizes(theme);
