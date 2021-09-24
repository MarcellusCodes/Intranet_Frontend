import { createTheme } from "@mui/material/styles";
import { red, green } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: "#EEEEEE",
    },
    primary: {
      main: "#222831",
    },
    secondary: {
      main: "#393E46",
    },
    tertiary: {
      main: red[500],
    },
    text: {
      main: "#222831",
      secondary: "#fffffe",
    },
    error: {
      main: red.A400,
    },
    success: {
      main: green.A400,
    },
    white: {
      main: "#FFFFFF",
    },
  },
});

export default theme;
