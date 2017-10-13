import React from "react";
import cx from "classnames";

import NavItem from "./NavItem";

const NavLink = ({ className, children, ...props }) => {
  const classes = cx(className);
  return (
    <NavItem tag="a" className={classes} {...props}>
      {children}
    </NavItem>
  );
};

export default NavLink;
