import React, { Component } from "react";
import Child4 from "./Child4";

class Child3 extends Component {
  state = {
    framework: "Angular js",
  };
  handleFrmwk = () => {
    this.setState({
      framework:
        "It is a platform for building mobile and desktop web applications",
    });
  };

  render() {
    return (
      <div>
        <div>JS Library :{this.props.library}</div>
        <button onClick={this.props.handleChange}>Click</button>
        <Child4
          framework={this.state.framework}
          handleChange={this.handleFrmwk}
        />
      </div>
    );
  }
}

export default Child3;
