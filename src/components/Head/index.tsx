import React from "react";
import "./index.less";

type Props = {};

const Head: React.FC<Props> = ({ children }) => {
  return <head>{children}</head>;
};

export default Head;
