import React from "react";
import "./index.less";

type Props = {
  variant: "primary" | "secondary";
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
  return (
    <button
      disabled={disabled}
      className={
        variant +
        (disabled ? " disabled" : "") +
        (className ? " " + className : "")
      }
      onClick={onClick}
      style={style}
      onMouseOver={onMouseOver}
    >
      {children}
    </button>
  );
};

export default Button;
