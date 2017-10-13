// @flow
import * as React from "react";
import cx from "classnames";

import Toggle from "../../containers/Toggle";
import OutsideClick from "../../containers/OutsideClick";

type Props = {
  className?: string,
  renderBrand?: () => React.Node,
  renderLeft?: () => React.Node,
  renderRight?: () => React.Node,
  props?: { [key: string]: any }
};

const NavBar = ({
  className,
  renderBrand,
  renderLeft,
  renderRight,
  ...props
}: Props) => {
  const classes = cx("navbar", className);
  const collapsible = props.collapsible || true;
  return (
    <Toggle>
      {({ toggled, onToggle }) => (
        <OutsideClick onOutsideClick={() => toggled && onToggle()}>
          <div className={classes} {...props}>
            <div className="navbar-brand">
              {renderBrand && renderBrand()}

              {collapsible && (
                <div
                  className={cx("navbar-burger burger", {
                    "is-active": toggled
                  })}
                  onClick={onToggle}
                >
                  <span />
                  <span />
                  <span />
                </div>
              )}
            </div>

            <div className={cx("navbar-menu", { "is-active": toggled })}>
              {renderLeft && <div className="navbar-start">{renderLeft()}</div>}
              {renderRight && <div className="navbar-end">{renderRight()}</div>}
            </div>
          </div>
        </OutsideClick>
      )}
    </Toggle>
  );
};

export default NavBar;
