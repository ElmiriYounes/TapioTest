import { useTheme } from "@mui/material";
import React, { FC } from "react";
import { IPosts } from "src/interfaces/posts.interfaces";
import Button from "../button/Button";
import { ButtonContent } from "../button/Button.style";

import { ActionsWrapper, DeleteIcon, UpdateIcon } from "./Actions.style";

const Actions: FC<IPosts> = (props) => {
  return (
    <ActionsWrapper>
      <Button>
        <ButtonContent
          onClick={() => {
            props.handleClickOpen?.();
            props.setAction?.("update");
            props.setIndexPost?.(props.indexPost!);
          }}
        >
          <UpdateIcon />
        </ButtonContent>
      </Button>
      <Button
        sx={{
          marginLeft: "10px",
          background: useTheme().palette.error.main,
          "&:hover": { background: useTheme().palette.error.dark },
        }}
      >
        <ButtonContent
          onClick={() => {
            props.handleClickOpen?.();
            props.setAction?.("delete");
            props.setIndexPost?.(props.indexPost!);
          }}
        >
          <DeleteIcon />
        </ButtonContent>
      </Button>
    </ActionsWrapper>
  );
};

export default Actions;
