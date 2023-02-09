import { Box } from "@mui/material";
import { TableBody } from "@mui/material";
import { TableHead } from "@mui/material";
import { TableRow } from "@mui/material";
import { Table } from "@mui/material";
import React from "react";
import { FC } from "react";
import { IDisplay } from "src/interfaces/posts.interfaces";
import { IColumn } from "src/interfaces/TablePosts.interfaces";
import { columns } from "../posts/TablePosts";
import { StyledTableCell, StyledTableRow } from "../posts/TablePosts.style";

const Display: FC<IDisplay> = ({ fields }) => {
  return (
    <Box sx={{ overflow: "auto", width: "100%" }}>
      <Table
        stickyHeader
        sx={{
          marginTop: "20px",
          boxShadow: 2,
        }}
        aria-label="customized table"
      >
        <TableHead>
          <TableRow>
            {columns.map(
              (column: IColumn, index: number) =>
                column.label !== "Actions" && (
                  <StyledTableCell key={index}>{column.label}</StyledTableCell>
                )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow sx={{ background: "rgb(255,255,255,0.2)" }}>
            <StyledTableCell component="th" scope="row">
              {fields["User's name"]}
            </StyledTableCell>
            <StyledTableCell align="left">{fields.Title}</StyledTableCell>
            <StyledTableCell align="left">{fields.Body}</StyledTableCell>
          </StyledTableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default Display;
