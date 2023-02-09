import styled from "@emotion/styled/macro";
import { Box } from "@mui/material";
import { flexCenter } from "src/globalStyle";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

export const UpdateIcon = styled(EditIcon)``;

export const DeleteIcon = styled(DeleteOutlineIcon)``;

export const ActionsWrapper = styled(Box)`
  ${flexCenter}
`;
