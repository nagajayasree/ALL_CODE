import React, { Component } from "react";
import ReactDOM from "react-dom";

class PortalComp extends Component {
  state = {};
  render() {
    return ReactDOM.createPortal(
      <h1>Portal Component</h1>,
      document.getElementById("portal-root")
    );
  }
}

export default PortalComp;
