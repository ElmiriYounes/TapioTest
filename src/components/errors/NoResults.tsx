import { Typography } from "@mui/material";
import React from "react";
import { FC } from "react";
import NoResultsSvg from "../svgs/NoResultsSvg";
import { NoResultsWrap } from "./NoResults.style";

const NoResults: FC = () => {
  return (
    <NoResultsWrap>
      <NoResultsSvg />
      <Typography sx={{ marginTop: "20px", fontSize: "50px" }}>
        No results yet
      </Typography>
    </NoResultsWrap>
  );
};

export default NoResults;
