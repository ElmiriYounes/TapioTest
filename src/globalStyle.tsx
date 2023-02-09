import { CSSObject } from "@emotion/styled/macro";
import { GlobalStyles } from "@mui/material";

export const GlobalStyle: JSX.Element = (
  <GlobalStyles
    styles={{
      "*": {
        letterSpacing: "1px !important",
        padding: "0",
        margin: "0",
        boxSizing: "border-box",
      },
      html: { overflowX: "hidden" },
      a: {
        color: "inherit",
        textDecoration: "inherit",
      },
    }}
  />
);

export const flexCenter: CSSObject = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const maxWidth: number = 1600;

export const globalTypography: any = {
  h1: { fontSize: 50, fontWeight: 600 },
  fontSize: 16,
};
