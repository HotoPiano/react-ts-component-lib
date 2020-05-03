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

const LinkText: React.FC<Props> = ({
  children,
  darkBackground,
  className,
  style,
  onClick,
  href,
}) => {
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
    <a
      href={href}
      className={
        (darkBackground ? "darkBackround" : "brightBackground") +
        (className ? " " + className : "")
      }
      onClick={onClick}
      style={style}
    >
      {children}
    </a>
  );
};

export default LinkText;
