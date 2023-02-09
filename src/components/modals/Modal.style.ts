import styled from "@emotion/styled/macro";
import { Modal, Box } from "@mui/material";
import { flexCenter } from "src/globalStyle";
import { motion } from "framer-motion";
import { Theme } from "@mui/material";

export const ModalFade = motion(styled(Box)`
  background-color: ${(props) =>
    (props.theme as Theme).palette.mode === "dark" ? "#333" : "white"};
  padding: 50px 16px;
  max-width: 800px;
  width: 100%;
  margin: auto;
`);

export const ModalContainer = styled(Modal)`
  ${flexCenter}
  overflow-y: auto;
  overflow-x: hidden;
`;
