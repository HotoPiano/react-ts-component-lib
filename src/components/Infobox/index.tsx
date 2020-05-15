import React from "react";
import "./index.less";

type Props = {
  style?: React.CSSProperties | undefined;
  rightSide?: boolean;
  href?: string;
  onClick?: (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  onMouseOver?: (
    event:
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
      | React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void;
  //darkBackground?: boolean;
};

const Infobox: React.FC<Props> = ({
  children,
  rightSide,
  href,
  onClick,
  onMouseOver,
  //darkbackground
}) => {
  return href != null ? (
    rightSide ? (
      <div className="infobox-wrapper">
        <div className="infobox-content-right">{children}</div>
        <a
          href={href}
          onClick={onClick}
          onMouseOver={onMouseOver}
          className="infobox infobox-right infobox__link"
          role="none"
        >
          i
        </a>
      </div>
    ) : (
      <div className="infobox-wrapper">
        <a
          href={href}
          onClick={onClick}
          onMouseOver={onMouseOver}
          className="infobox infobox-left infobox__link"
          role="none"
        >
          i
        </a>
        <div className="infobox-content-left">{children}</div>
      </div>
    )
  ) : onClick != null ? (
    rightSide ? (
      <div className="infobox-wrapper">
        <div className="infobox-content-right">{children}</div>
        <button
          onClick={onClick}
          onMouseOver={onMouseOver}
          className="infobox infobox-right infobox__button"
          role="none"
        >
          i
        </button>
      </div>
    ) : (
      <div className="infobox-wrapper">
        <button
          onClick={onClick}
          onMouseOver={onMouseOver}
          className="infobox infobox-left infobox__button"
          role="none"
        >
          i
        </button>
        <div className="infobox-content-left">{children}</div>
      </div>
    )
  ) : rightSide ? (
    <div className="infobox-wrapper">
      <div className="infobox-content-right">{children}</div>
      <div className="infobox infobox-right" role="none">
        i
      </div>
    </div>
  ) : (
    <div className="infobox-wrapper">
      <div className="infobox infobox-left" role="none">
        i
      </div>
      <div className="infobox-content-left">{children}</div>
    </div>
  );
};

export default Infobox;
