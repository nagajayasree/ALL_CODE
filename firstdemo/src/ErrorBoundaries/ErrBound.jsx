import React, { Component } from "react";
import ErrorImg from "./ErrorImg";

class ErrBound extends Component {
  state = {
    isError: false,
  };

  static getDerivedStateFromError(error) {
    return { isError: true };
  }

  componentDidCatch(error, info) {
    console.log(info);
    console.log(error);
  }

  render() {
    if (this.state.isError) {
      return <h4>Incorrect Password</h4>;
    }
    return <div>{this.props.children}</div>;
  }
}

export default ErrBound;
