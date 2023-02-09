import styled from "@emotion/styled/macro";
import { Box } from "@mui/material";
import { flexCenter } from "src/globalStyle";

export const LoadingWrap = styled(Box)`
  width: 100%;
  height: 100vh;
  ${flexCenter}
  flex-direction: column;
`;
