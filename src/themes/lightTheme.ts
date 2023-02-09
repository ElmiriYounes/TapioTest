import { Theme } from "@emotion/react";
import { createTheme } from "@mui/material";
import { globalTypography } from "../globalStyle";

export const lightTheme: Theme = createTheme({
  palette: {
    // primary: { main: "#18596d" },
    // secondary: { main: "#18596d" },
    mode: "light",
    background: {
      default: "#fff",
    },
  },
  typography: {
    ...globalTypography,
  },
});
