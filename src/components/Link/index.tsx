import React from "react";
import "./index.less";

type Props = {
  darkBackground?: boolean;
  className?: string;
  style?: React.CSSProperties | undefined;
  href?: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  disabled?: boolean;
};

const Link: React.FC<Props> = ({
  children,
  darkBackground,
  className,
  style,
  onClick,
  href,
}) => {
  const _className =
    "link " +
    (className ? className + " " : " ") +
    (darkBackground
      ? "darkBackground darkBackground-link"
      : "brightBackground brightBackground-link");

  /*
  const variantStyle: React.CSSProperties = darkBackground
    ? {
        color: "white",
      }
    : {};
  const defaultStyle: React.CSSProperties = { cursor: "pointer" };
  //style={{ ...style, ...defaultStyle, ...variantStyle }}
    */

  return (
    <a href={href} className={_className} onClick={onClick} style={style}>
      {children}
    </a>
  );
};

export default Link;
