import React from "react";
import "./index.less";

type Props = {};

const Header: React.FC<Props> = ({ children }) => {
  return <header className="header">{children}</header>;
};

export default Header;
