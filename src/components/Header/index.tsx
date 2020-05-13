import React from "react";
import "./index.less";

type Props = {
  className?: string;
  style?: React.CSSProperties | undefined;
};

const Header: React.FC<Props> = ({ children, className, style }) => {
  const _className = "header" + (className ? " " + className : "");
  return (
    <header className={_className} style={style}>
      {children}
    </header>
  );
};

export default Header;
