import styled from "@emotion/styled/macro";
import { Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { flexCenter } from "src/globalStyle";

export const ButtonContent = styled(Box)`
  padding: 15px 40px;
  width: 100%;
  color: white;
  ${flexCenter}
`;

export const ButtonMUI = motion(styled(Button)`
  text-transform: none;
  padding: 0;
`);
