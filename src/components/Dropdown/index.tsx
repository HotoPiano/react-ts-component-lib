import React, { useState, useEffect, useCallback, useRef } from "react";
import "./index.less";
import { DropdownToggleBright, DropdownToggleDark } from "./../../assets";

type Props = {
  buttonClassName?: string;
  buttonStyle?: React.CSSProperties | undefined;
  text: string;
  dropdownItems: DropdownItem[];
  onSelect: (value: string) => void;
  firstItemDefaultSelected?: boolean;
  darkBackground?: boolean;
  closeOnBlur?: boolean;
  closeOnEscape?: boolean;
  fitMinWidth?: boolean;
};

type DropdownItem = {
  text: string;
  value: string;
};

const Dropdown: React.FC<Props> = ({
  children,
  buttonClassName,
  buttonStyle,
  text,
  dropdownItems,
  onSelect,
  firstItemDefaultSelected,
  darkBackground,
  closeOnBlur,
  closeOnEscape,
  fitMinWidth,
}) => {
  const [showList, setShowList] = useState(false);
  const [selectedItem, setSelectedItem] = useState<DropdownItem | null>(
    firstItemDefaultSelected ? dropdownItems[0] : null
  );
  const inputRef: any = useRef(null);

  useEffect(() => {
    if (closeOnEscape) {
      window.addEventListener("keydown", handleUserKeyPress);

      return () => {
        window.removeEventListener("keydown", handleUserKeyPress);
      };
    }
  }, []);

  const handleUserKeyPress = useCallback((event: KeyboardEvent) => {
    if (event.code === "Escape") {
      setShowList(false);
    }
  }, []);

  const _className =
    "dropdown" +
    (darkBackground ? " darkBackground" : " brightBackground") +
    (buttonClassName != null ? " " + buttonClassName : "");

  return (
    <>
      <button
        ref={inputRef}
        onClick={() => setShowList(!showList)}
        className={_className}
        style={buttonStyle}
        onBlur={() => closeOnBlur && setShowList(false)}
      >
        {text}
        <img
          src={darkBackground ? DropdownToggleBright : DropdownToggleDark}
          alt=""
          style={{ marginTop: "3px", marginBottom: "-3px" }}
        />
      </button>

      {showList && (
        <ul
          className="dropdown-list"
          style={
            fitMinWidth
              ? {
                  left: inputRef.current.offsetLeft - 1,
                  top: inputRef.current.offsetTop + 10,
                  minWidth: inputRef.current.clientWidth,
                }
              : {
                  left: inputRef.current.offsetLeft,
                  top: inputRef.current.offsetTop + 10,
                }
          }
        >
          {dropdownItems.map((dropdownItem) => {
            return (
              <li key={`${dropdownItem.value} - ${dropdownItem.value}`}>
                <a
                  className={
                    "dropdown-option" +
                    (selectedItem != null &&
                    selectedItem.value === dropdownItem.value
                      ? " dropdown-option--selected"
                      : "")
                  }
                  onClick={() => {
                    setSelectedItem(dropdownItem);
                    setShowList(false);
                    onSelect(dropdownItem.value);
                  }}
                  onMouseDown={(event: any) => {
                    closeOnBlur && event.preventDefault();
                  }}
                >
                  {dropdownItem.text}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Dropdown;
