import React, { FC } from "react";
import { variantBounce } from "src/framer-motion/variants";
import { IButton } from "src/interfaces/button.interfaces";
import { ButtonMUI } from "./Button.style";

const Button: FC<IButton> = (props) => {
  return (
    <ButtonMUI
      variant="contained"
      variants={variantBounce}
      whileHover={"hover"}
      sx={props.sx}
    >
      {props.children}
    </ButtonMUI>
  );
};

export default Button;
