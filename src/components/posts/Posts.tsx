import React, { FC } from "react";
import { IPosts } from "src/interfaces/posts.interfaces";
import { IconAdd, PostsContainer, TextButton, Title } from "./Posts.style";
import Button from "../button/Button";
import TablePosts from "./TablePosts";
import Modal from "../modals/Modal";
import { ButtonContent } from "../button/Button.style";
import { useTheme } from "@mui/material";

const Posts: FC<IPosts> = ({ posts, setPosts }) => {
  const [open, setOpen] = React.useState(false);

  const [action, setAction] = React.useState<string>("");

  const [indexPost, setIndexPost] = React.useState<number | null>(null);

  /**
   * Open modal
   */
  const handleClickOpen = () => {
    setOpen(true);
  };

  /**
   * Close modal
   */
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <PostsContainer>
      {open && (
        <Modal
          open={open}
          onClose={handleClose}
          action={action}
          setPosts={setPosts}
          posts={posts!}
          indexPost={indexPost!}
        />
      )}

      {/* Create new post Button */}
      <Button sx={{ alignSelf: "flex-start" }}>
        <ButtonContent
          onClick={() => {
            handleClickOpen();
            setAction("add");
          }}
        >
          <TextButton>Create Post</TextButton>
          <IconAdd />
        </ButtonContent>
      </Button>

      <Title
        variant="h1"
        boxShadow={5}
        sx={{
          backgroundColor: useTheme().palette.primary.main,
        }}
      >
        Posts
      </Title>

      <TablePosts
        posts={posts}
        handleClickOpen={handleClickOpen}
        action={action}
        setAction={setAction}
        setIndexPost={setIndexPost}
        setPosts={setPosts}
      />
    </PostsContainer>
  );
};

export default Posts;
