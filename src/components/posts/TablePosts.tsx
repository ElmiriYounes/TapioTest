import React, { FC } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TablePagination } from "@mui/material";
import { IPosts } from "src/interfaces/posts.interfaces";
import { IColumn, IData } from "src/interfaces/TablePosts.interfaces";
import {
  StyledTableCell,
  StyledTableRow,
  TablePostsContainer,
} from "./TablePosts.style";
import Actions from "./Actions";
import { useEffect } from "react";
import { useState } from "react";
import NoResults from "../errors/NoResults";

export const columns: IColumn[] = [
  { label: "User", width: "5%" },
  { label: "Title", width: "30%" },
  { label: "Body", width: "60%" },
  { label: "Actions", width: "5%" },
];

const TablePosts: FC<IPosts> = (props) => {
  /**
   * Creating rows for each post
   * @returns IData[]
   */
  const createDatas = (): IData[] => {
    let datas: IData[] = [];

    props.posts?.map((post: IData, index: number) => {
      return datas.push({
        user: post.user,
        title: post.title,
        body: post.body,
        actions: <Actions {...props} indexPost={index} />,
      });
    });

    return datas;
  };

  const rows: IData[] = createDatas();

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(5);

  /**
   * change page (pagination table)
   * @param event React.MouseEvent<HTMLButtonElement> | null
   * @param newPage Number
   */
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  /**
   * change rows per page
   * @param event React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   */
  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    // when we delete the last post inside the last page = go back to previous page (avoid overflow range)
    props.action === "delete" &&
      page >= props.posts?.length! / rowsPerPage &&
      setPage((page) => page - 1);

    // when we add a new post = go back to the first page
    props.action === "add" && setPage(0);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.posts]);

  return (
    <TablePostsContainer>
      <TablePagination
        component="div"
        count={props.posts!.length}
        page={
          props.posts?.length! === 0
            ? 0
            : page >= props.posts?.length! / rowsPerPage
            ? page - 1
            : page
        }
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      />

      {props.posts?.length! > 0 && (
        <TableContainer component={Paper} sx={{ boxShadow: 5, maxHeight: 500 }}>
          <Table
            stickyHeader
            sx={{ minWidth: 700 }}
            aria-label="customized table"
          >
            <TableHead>
              <TableRow>
                {columns.map((column: IColumn, index: number) => (
                  <StyledTableCell key={index}>{column.label}</StyledTableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {rows
                .slice(page * rowsPerPage, rowsPerPage * (page + 1))
                .map((row: IData, index: number) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell
                      component="th"
                      scope="row"
                      style={{ width: "150px" }}
                    >
                      {row.user}
                    </StyledTableCell>
                    <StyledTableCell align="left" style={{ width: "300px" }}>
                      {row.title}
                    </StyledTableCell>
                    <StyledTableCell align="left" style={{ width: "600px" }}>
                      {row.body}
                    </StyledTableCell>
                    <StyledTableCell align="left" style={{ width: "150px" }}>
                      {row.actions}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {props.posts?.length === 0 && <NoResults />}
    </TablePostsContainer>
  );
};

export default TablePosts;
