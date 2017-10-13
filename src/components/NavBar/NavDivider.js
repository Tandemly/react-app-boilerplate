// @flow
import React from "react";

type Props = { [key: string]: any };

const NavDivider = (props: Props) => (
  <hr className="navbar-divider" {...props} />
);

export default NavDivider;
