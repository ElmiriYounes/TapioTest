import styled from "@emotion/styled/macro";
import { Box } from "@mui/material";
import { flexCenter } from "src/globalStyle";

export const Error404Wrap = styled(Box)`
  width: 100%;
  height: 100vh;
  ${flexCenter}

  & svg {
    margin: auto;
    max-width: 600px;
  }
`;
