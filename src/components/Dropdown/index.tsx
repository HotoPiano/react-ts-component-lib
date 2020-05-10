import React from "react";
import "./index.less";

type Props = {
  className?: string;
  style?: React.CSSProperties | undefined;
};

const Button: React.FC<Props> = ({ children, className, style }) => {
  return (
    <div className={"dropdown " + className} style={style}>
      {children}
    </div>
  );
};

export default Button;
