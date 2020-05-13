import React from "react";
import "./index.less";

type Props = {
  type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  darkBackground?: boolean;
  className?: string;
  style?: React.CSSProperties | undefined;
};

const H: React.FC<Props> = ({
  children,
  type,
  darkBackground,
  className,
  style,
}) => {
  const defaultStyle: React.CSSProperties = {};
  const _className =
    type +
    (className ? " " + className : "") +
    (darkBackground ? " darkBackground" : " brightBackground");
  return type === "h1" ? (
    <h1 className={_className} style={{ ...style, ...defaultStyle }}>
      {children}
    </h1>
  ) : type === "h2" ? (
    <h2 className={_className} style={{ ...style, ...defaultStyle }}>
      {children}
    </h2>
  ) : type === "h3" ? (
    <h3 className={_className} style={{ ...style, ...defaultStyle }}>
      {children}
    </h3>
  ) : type === "h4" ? (
    <h4 className={_className} style={{ ...style, ...defaultStyle }}>
      {children}
    </h4>
  ) : type === "h5" ? (
    <h5 className={_className} style={{ ...style, ...defaultStyle }}>
      {children}
    </h5>
  ) : (
    <h6 className={_className} style={{ ...style, ...defaultStyle }}>
      {children}
    </h6>
  );
};

export default H;
