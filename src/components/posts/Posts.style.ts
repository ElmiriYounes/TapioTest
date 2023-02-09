import styled from "@emotion/styled/macro";
import { Box, Typography } from "@mui/material";
import { flexCenter, maxWidth } from "src/globalStyle";
import AddIcon from "@mui/icons-material/Add";

export const IconAdd = styled(AddIcon)`
  margin-left: 5px;
`;

export const TextButton = styled(Typography)``;

export const Title = styled(Typography)`
  margin: 20px 0;
  padding: 10px;
  border-radius: 4px;
  color: white;
  width: 100%;
  ${flexCenter}
`;

export const PostsContainer = styled(Box)`
  max-width: ${`${maxWidth}px`};
  margin: 0 auto;
  padding: 50px 16px;
`;
