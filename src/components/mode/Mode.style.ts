import styled from "@emotion/styled/macro";
import { Theme } from "@mui/material";
import { Box } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { flexCenter } from "src/globalStyle";
import { motion } from "framer-motion";

export const Switch = motion(styled(Box)`
  background-color: ${(props) => (props.theme as Theme).palette.primary.main};
  color: white;
  width: 30px;
  height: 30px;
  left: 0;
  border-radius: 50%;
  position: absolute;
  cursor: pointer;

  ${flexCenter}
`);

export const DarkIcon = styled(DarkModeIcon)``;

export const LightIcon = styled(WbSunnyIcon)``;

export const SwitchWrapper = styled(Box)`
  position: absolute;
  ${flexCenter}
  top: 20px;
  right: 20px;
  width: 50px;
  height: 18px;
  border-radius: 30px;
  background-color: ${(props) =>
    (props.theme as Theme).palette.mode === "dark" ? "#333" : "#ddd"};
`;
