import React, { Component } from "react";
import Child3 from "./Child3";

class Child2 extends Component {
  state = {};
  render() {
    return (
      <>
        Child2
        <Child3></Child3>
      </>
    );
  }
}

export default Child2;
