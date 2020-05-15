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
  const buttonRef: any = useRef(null);

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
        ref={buttonRef}
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
        <div
          className="dropdown-listbox"
          style={{
            minWidth: buttonRef.current.clientWidth,
            left: buttonRef.current.offsetLeft,
            top: buttonRef.current.offsetTop + 10,
          }}
        >
          <ul
            className={`dropdown-list ${
              buttonRef.current.offsetLeft > 0
                ? "dropdown-list-right"
                : "dropdown-list-left"
            }`}
            style={
              fitMinWidth
                ? {
                    minWidth: buttonRef.current.clientWidth,
                  }
                : {}
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
        </div>
      )}
    </>
  );
};

export default Dropdown;
