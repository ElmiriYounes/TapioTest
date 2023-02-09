import React from "react";
import { FC } from "react";
import { variantMode } from "src/framer-motion/variants";
import { IMode } from "src/interfaces/mode.interfaces";
import { DarkIcon, LightIcon, Switch, SwitchWrapper } from "./Mode.style";

const Mode: FC<IMode> = (props) => {
  return (
    <SwitchWrapper>
      <Switch
        variants={variantMode}
        initial={props.mode}
        animate={props.mode}
        onClick={() => {
          if (props.mode === "light") {
            props.setMode("dark");
            localStorage.setItem("mode", "dark");
          } else {
            props.setMode("light");
            localStorage.setItem("mode", "light");
          }
        }}
      >
        {props.mode === "light" ? <LightIcon /> : <DarkIcon />}
      </Switch>
    </SwitchWrapper>
  );
};

export default Mode;
