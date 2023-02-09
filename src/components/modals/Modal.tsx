import React from "react";
import { FC } from "react";
import { ModalContainer, ModalFade } from "./Modal.style";
import { IModal } from "src/interfaces/modal.interfaces";
import AddPost from "../forms/AddPost";
import DeletePost from "../forms/DeletePost";
import Update from "../forms/Update";
import { variantModalApears } from "src/framer-motion/variants";

const Modal: FC<IModal> = (props) => {
  return (
    <ModalContainer open={props.open} onClose={props.onClose}>
      <ModalFade
        variants={variantModalApears}
        initial={"initial"}
        animate={"show"}
      >
        {props.action === "add" && <AddPost {...props} />}
        {props.action === "update" && <Update {...props} />}
        {props.action === "delete" && <DeletePost {...props} />}
      </ModalFade>
    </ModalContainer>
  );
};

export default Modal;
