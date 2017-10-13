import React, { Component } from "react";
import { findDOMNode } from "react-dom";
import PropTypes from "prop-types";

//  Assert that an object is a stateless component
const isStatelessComponent = comp =>
  !!(!comp.prototype || !comp.prototype.render);

// Utility for capture outside clicks on it's single child node
class OutsideClick extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    onOutsideClick: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);
  }

  handleOutsideClick(e) {
    const { onOutsideClick, children: child } = this.props;
    // Allow this to work with valid Components, Elements & Stateless Components
    const wrapped = isStatelessComponent(child)
      ? findDOMNode(this)
      : findDOMNode(child);

    if (wrapped.contains(e.target)) return;
    onOutsideClick();
  }

  componentDidMount() {
    window.addEventListener("click", this.handleOutsideClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleOutsideClick);
  }

  render() {
    return this.props.children;
  }
}

export default OutsideClick;
