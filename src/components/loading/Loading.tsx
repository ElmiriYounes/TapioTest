import { Typography } from "@mui/material";
import { CircularProgress } from "@mui/material";
import React from "react";
import { FC } from "react";
import { LoadingWrap } from "./Loading.style";

const Loading: FC = () => {
  return (
    <LoadingWrap>
      <CircularProgress size={100} />
      <Typography sx={{ marginTop: "50px", fontSize: "30px" }}>
        Loading...
      </Typography>
    </LoadingWrap>
  );
};

export default Loading;
