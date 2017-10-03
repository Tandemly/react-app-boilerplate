// @flow
import * as React from "react";
import cx from "classnames";
import styleable from "react-styleable";
import styles from "./styles.module.scss";

type Props = {
  /** the text label on the button */
  children?: React.Node,
  /** an alternate way to pass a label to display on the button (overrides `children`) */
  text?: string,
  /** classnames to add to the rendered component */
  className?: string,
  /** style object from react-styleable */
  css?: { [key: string]: any }
};

/**
 * A basic button component.
 */
const Button = ({ children, text, className, css }: Props) => (
  <button className={cx("button", css.button, className)}>
    { (text || children) && <span>{text || children}</span> }
  </button>
);

export default styleable(styles)(Button);
