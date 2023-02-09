import styled from "@emotion/styled/macro";
import { Stack, TextField, Box } from "@mui/material";
import { flexCenter } from "src/globalStyle";
import { motion } from "framer-motion";
import SimCardAlertIcon from "@mui/icons-material/SimCardAlert";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const Btns = styled(Box)`
  ${flexCenter}
`;

export const SuccessIcon = styled(CheckCircleIcon)`
  font-size: 80px;
  margin-bottom: 20px;
`;

export const SuccessMsg = motion(styled(Box)`
  text-align: center;
  ${flexCenter}
  flex-direction: column;
  margin: 50px 0;
`);

export const ErrorIcon = styled(SimCardAlertIcon)``;

export const ErrorMsg = motion(styled(Box)`
  margin-bottom: 20px;
  ${flexCenter}
`);

export const Input = styled(TextField)`
  margin-top: 20px;
  width: 100%;

  &:first-of-type {
    margin-top: unset;
  }
`;

export const Form = styled(Stack)`
  margin: 50px 0;
  width: 100%;
`;

export const FormContainer = styled(Stack)``;
