import React from "react";
import { FC } from "react";
import Error404Svg from "../svgs/Error404Svg";
import { Error404Wrap } from "./Error404.style";

const Error404: FC = () => {
  return (
    <Error404Wrap>
      <Error404Svg />
    </Error404Wrap>
  );
};

export default Error404;
