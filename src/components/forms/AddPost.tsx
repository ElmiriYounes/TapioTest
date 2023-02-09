import React from "react";
import { FC } from "react";
import {
  Btns,
  ErrorIcon,
  ErrorMsg,
  Form,
  FormContainer,
  Input,
  SuccessIcon,
  SuccessMsg,
} from "./AddPost.style";
import { Typography } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material";
import { Theme } from "@mui/material";
import { IFields, IModal } from "src/interfaces/modal.interfaces";
import { ChangeEvent } from "react";
import { IData } from "src/interfaces/TablePosts.interfaces";
import { variantFormMsg } from "src/framer-motion/variants";
import Button from "../button/Button";
import { ButtonContent } from "../button/Button.style";
import Display from "./Display";

const AddPost: FC<IModal> = (props) => {
  const theme: Theme = useTheme();

  const inputs: string[] = ["User's name", "Title", "Body"];

  const [fields, setFields] = useState<IFields>({
    "User's name": "",
    Title: "",
    Body: "",
  });

  const [error, setError] = useState<boolean>(false);

  const [submitted, setSubmitted] = useState<boolean>(false);

  /**
   *
   * @param event ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
   */
  const handleChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    let fieldsTemp: any = { ...fields };

    (fieldsTemp as any)[event.target.name] = event.target.value;

    if (
      fieldsTemp["User's name"] !== "" &&
      fieldsTemp.Title !== "" &&
      fieldsTemp.Body !== ""
    ) {
      error && setError(false);
    }

    setFields({ ...fieldsTemp });
  };

  /**
   * Saving post
   */
  const SavePost = () => {
    let newPost: IData = {
      user: fields["User's name"],
      title: fields.Title,
      body: fields.Body,
    };
    let previousPosts: IData[] = [...props.posts];

    previousPosts.unshift(newPost);

    props.setPosts?.([...previousPosts]);

    setSubmitted(true);

    localStorage.setItem("posts", JSON.stringify([...previousPosts]));
  };

  /**
   * Validate the fields
   */
  const handleSubmit = () => {
    let errorFound: boolean = false;

    Object.values(fields).map((value: string) => {
      return value === "" && (errorFound = true);
    });

    setError(errorFound);

    !errorFound && SavePost();
  };

  return (
    <FormContainer>
      {!submitted && (
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          Adding new post
        </Typography>
      )}

      {!submitted && (
        <Form>
          {inputs.map((input: string, index: number) => (
            <Input
              key={index}
              error={error && (fields as any)[input] === ""}
              label={input}
              name={input}
              multiline={input === "Body" ? true : false}
              rows={input === "Body" ? 4 : 1}
              onChange={handleChange}
            />
          ))}
        </Form>
      )}

      {submitted && (
        <SuccessMsg
          color={theme.palette.success.main}
          initial={"exit"}
          variants={variantFormMsg}
          animate={"enter"}
        >
          <SuccessIcon />

          <Typography>Post added successfully !</Typography>

          <Display fields={fields} />
        </SuccessMsg>
      )}

      {error && (
        <ErrorMsg
          color={theme.palette.error.main}
          initial={"exit"}
          variants={variantFormMsg}
          animate={"enter"}
        >
          <ErrorIcon />
          <Typography>Field(s) required</Typography>
        </ErrorMsg>
      )}

      {!submitted ? (
        <Btns>
          <Button>
            <ButtonContent
              onClick={props.onClose}
              sx={{
                backgroundColor: theme.palette.error.main,
                "&:hover": { backgroundColor: theme.palette.error.dark },
              }}
            >
              <Typography>Abort</Typography>
            </ButtonContent>
          </Button>
          <Button sx={{ marginLeft: "20px" }}>
            <ButtonContent onClick={handleSubmit}>
              <Typography>Submit</Typography>
            </ButtonContent>
          </Button>
        </Btns>
      ) : (
        <Button>
          <ButtonContent onClick={props.onClose}>
            <Typography>Continue</Typography>
          </ButtonContent>
        </Button>
      )}
    </FormContainer>
  );
};

export default AddPost;
