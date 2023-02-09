import styled from "@emotion/styled/macro";
import { Box } from "@mui/material";
import { flexCenter } from "src/globalStyle";

export const NoResultsWrap = styled(Box)`
  margin: 50px auto;
  ${flexCenter}
  flex-direction: column;

  & svg {
    max-width: 400px;
  }
`;
