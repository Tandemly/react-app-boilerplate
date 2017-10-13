// @flow
import * as React from "react";
import cx from "classnames";

import Toggle from "../../containers/Toggle";
import OutsideClick from "../../containers/OutsideClick";
import NavItem from "./NavItem";
import NavLink from "./NavLink";

type Props = {
  text?: string,
  className?: string,
  showOnHover?: boolean,
  showOnClick?: boolean,
  children?: React.Node,
  props?: { [key: string]: any }
};

const NavDropDown = ({
  text,
  className,
  showOnHover = false,
  showOnClick = true,
  children,
  ...props
}: Props) => {
  const classes = cx(
    "navbar-item has-dropdown",
    { "is-hoverable": showOnHover && !showOnClick },
    className
  );
  return (
    <Toggle>
      {({ toggled, onToggle }) => (
        <OutsideClick
          onOutsideClick={() => {
            toggled && onToggle();
          }}
        >
          <NavItem className={cx(classes, { "is-active": toggled })} {...props}>
            <NavLink className="navbar-link" onClick={onToggle}>
              {text}
            </NavLink>
            <div className="navbar-dropdown is-boxed">{children}</div>
          </NavItem>
        </OutsideClick>
      )}
    </Toggle>
  );
};

export default NavDropDown;
