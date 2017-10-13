// @flow
import * as React from "react";

import NavItem from "./NavItem";

type Props = {
  url?: string,
  children?: React.Node,
  props?: { [key: string]: any }
};

const NavBrand = ({ url, children, ...props }: Props) => {
  const itemProps = url ? { tag: "a", href: url } : {};
  return (
    <NavItem {...itemProps} {...props}>
      {children}
    </NavItem>
  );
};

export default NavBrand;
