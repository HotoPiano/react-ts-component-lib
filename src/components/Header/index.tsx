import React from "react";
import "./index.less";

type Props = {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
  style?: React.CSSProperties | undefined;
};

const Header: React.FC<Props> = ({ children, type, className, style }) => {
  const defaultStyle: React.CSSProperties = {};
  return type === "h1" ? (
    <h1 className={className} style={{ ...style, ...defaultStyle }}>
      {children}
    </h1>
  ) : type === "h2" ? (
    <h2 className={className} style={{ ...style, ...defaultStyle }}>
      {children}
    </h2>
  ) : type === "h3" ? (
    <h3 className={className} style={{ ...style, ...defaultStyle }}>
      {children}
    </h3>
  ) : type === "h4" ? (
    <h4 className={className} style={{ ...style, ...defaultStyle }}>
      {children}
    </h4>
  ) : type === "h5" ? (
    <h5 className={className} style={{ ...style, ...defaultStyle }}>
      {children}
    </h5>
  ) : (
    <h6 className={className} style={{ ...style, ...defaultStyle }}>
      {children}
    </h6>
  );
};

export default Header;
