import React from "react";
import "./index.less";

type Props = {
  className?: string;
  style?: React.CSSProperties | undefined;
};

const Footer: React.FC<Props> = ({ children, className, style }) => {
  return (
    <footer
      className={"footer" + (className ? " " + className : "")}
      style={style}
    >
      {children}
    </footer>
  );
};

export default Footer;
