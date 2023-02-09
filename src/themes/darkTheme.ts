import { Theme } from "@emotion/react";
import { createTheme } from "@mui/material";
import { globalTypography } from "../globalStyle";

export const darkTheme: Theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#0288d1",
    },
    error: {
      main: "#d32f2f",
    },
  },
  typography: {
    ...globalTypography,
  },
});
