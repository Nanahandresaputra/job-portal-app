import { createTheme, responsiveFontSizes } from "@mui/material";

const themeConfig = createTheme({
  palette: {
    primary: {
      main: "#eff5f1",
      dark: "#68a092",
    },
    secondary: {
      main: "#ffffff",
    },
    info: {
      main: "#f6f7fb",
    },
  },
});

const theme = responsiveFontSizes(themeConfig);

export default theme;

// main: "#eff1f4",
// dark: "#68a092",
