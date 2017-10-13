import React from "react";
import cx from "classnames";

const NavItem = ({ tag, className, children, ...props }) => {
  const Tag = /(a|div)/i.test(tag) ? tag.toLowerCase() : "div";
  const classes = cx("navbar-item", className);
  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};

export default NavItem;
