import React from "react";
import "./index.less";

type Props = {
  variant: "default" | "primary" | "secondary";
  className?: string;
  style?: React.CSSProperties | undefined;
  disabled?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseOver?: (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => void;
};

const Button: React.FC<Props> = ({
  children,
  variant,
  className,
  style,
  disabled,
  onClick,
  onMouseOver,
}) => {
  const _className =
    "button button__" +
    variant +
    (disabled ? " button--disabled " : " ") +
    (className ? " " + className : "");
  return (
    <button
      disabled={disabled}
      className={_className}
      onClick={onClick}
      style={style}
      onMouseOver={onMouseOver}
    >
      {children}
    </button>
  );
};

export default Button;
