import styled from "@emotion/styled/macro";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import { TableRow, Box } from "@mui/material";
import { Theme } from "@mui/material";

export const StyledTableCell = styled(TableCell)`
  &.${tableCellClasses.head} {
    background-color: ${(props) => (props.theme as Theme).palette.primary.main};
    color: white;
  }

  &.${tableCellClasses.body} {
    font-size: 14;
    word-wrap: break-word;
    white-space: normal;
  }
`;

export const StyledTableRow = styled(TableRow)`
  &:hover {
    background-color: ${(props) =>
      (props.theme as Theme).palette.mode === "dark"
        ? "rgb(255,255,255,0.2)"
        : "#eee"};
  }

  // hide last border
  &:last-child td,
  &:last-child th {
    border: 0;
  }
`;

export const TablePostsContainer = styled(Box)``;
