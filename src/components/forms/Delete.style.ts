import styled from "@emotion/styled/macro";
import SdCardAlertIcon from "@mui/icons-material/SdCardAlert";
import { Box } from "@mui/material";
import { flexCenter } from "src/globalStyle";

export const Answers = styled(Box)`
  margin-top: 50px;
  ${flexCenter}

  & > *:nth-of-type(2) {
    margin-left: 20px;
  }
`;

export const WarningIcon = styled(SdCardAlertIcon)`
  font-size: 80px;
  margin-bottom: 20px;
`;

export const DeleteContainer = styled(Box)`
  ${flexCenter}
  flex-direction: column;
`;
