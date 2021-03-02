import React, { Component, Fragment } from "react";

class ErrorCheck extends Component {
  state = {
    pwd: "jayasree",
  };

  render() {
    if (this.state.pwd !== this.props.setPwd) {
      throw new Error("Invalid Login");
    }
    return <div>{this.props.children}</div>;
  }
}

export default ErrorCheck;
