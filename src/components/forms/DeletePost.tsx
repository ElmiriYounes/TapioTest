import { Typography } from "@mui/material";
import React from "react";
import { FC } from "react";
import { IFields, IModal } from "src/interfaces/modal.interfaces";
import { FormContainer, SuccessIcon, SuccessMsg } from "./AddPost.style";
import { Answers, DeleteContainer, WarningIcon } from "./Delete.style";
import { useTheme } from "@mui/material";
import { Theme } from "@mui/material";
import Button from "../button/Button";
import { ButtonContent } from "../button/Button.style";
import { useState } from "react";
import { IData } from "src/interfaces/TablePosts.interfaces";
import { variantFormMsg } from "src/framer-motion/variants";
import Display from "./Display";
import { useEffect } from "react";

const DeletePost: FC<IModal> = (props) => {
  const theme: Theme = useTheme();

  const [deleted, setDeleted] = useState<boolean>(false);

  // data to display after deleting
  const [toDelete, setToDelete] = useState<IFields | null>(null);

  useEffect(() => {
    setToDelete({
      "User's name": props.posts[props.indexPost!].user,
      Title: props.posts[props.indexPost!].title,
      Body: props.posts[props.indexPost!].body,
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /**
   * delete data
   */
  const handleDelete = () => {
    let oldPosts: IData[] = [...props.posts];

    oldPosts.splice(props.indexPost!, 1);

    props.setPosts?.([...oldPosts]);
    localStorage.setItem("posts", JSON.stringify([...oldPosts]));

    setDeleted(true);
  };

  return (
    <FormContainer>
      <DeleteContainer color={theme.palette.error.main}>
        {!deleted && <WarningIcon />}
        {!deleted && (
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Are you sure to delete the post ?
          </Typography>
        )}
        {!deleted && (
          <Answers>
            <Button>
              <ButtonContent onClick={handleDelete}>
                <Typography>Yes</Typography>
              </ButtonContent>
            </Button>
            <Button>
              <ButtonContent onClick={props.onClose}>
                <Typography>No</Typography>
              </ButtonContent>
            </Button>
          </Answers>
        )}
      </DeleteContainer>

      {deleted && (
        <SuccessMsg
          color={theme.palette.success.main}
          initial={"exit"}
          variants={variantFormMsg}
          animate={"enter"}
        >
          <SuccessIcon />

          <Typography>Post deleted successfully !</Typography>

          <Display fields={toDelete!} />
        </SuccessMsg>
      )}

      {deleted && (
        <Button>
          <ButtonContent onClick={props.onClose}>
            <Typography>Continue</Typography>
          </ButtonContent>
        </Button>
      )}
    </FormContainer>
  );
};

export default DeletePost;
