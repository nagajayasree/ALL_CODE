import React, { Component } from "react";
import ReactDOM from "react-dom";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return ReactDOM.createPortal(
      this.props.children,
      document.getElementById("portal_root")
    );
  }
}

export default Modal;
