import React, { Component } from "react";

// Utility component for setting up toggle state/actions
class Toggle extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { toggled: props.defaultToggled || false };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState({ toggled: !this.state.toggled });
  }

  render() {
    return this.props.children({
      ...this.state,
      onToggle: this.handleToggle
    });
  }
}

export default Toggle;
