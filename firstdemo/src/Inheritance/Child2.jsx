import React, { Component } from "react";
import Child3 from "./Child3";

class Child2 extends Component {
  state = {
    library: "React js",
  };
  handleLib = () => {
    this.setState({
      library: "Tool for building UI components",
    });
  };

  render() {
    return (
      <div>
        <div>Scripting Language:{this.props.scriptLang}</div>
        <button onClick={this.props.handleChange}>Click Here</button>
        <Child3 library={this.state.library} handleChange={this.handleLib} />
      </div>
    );
  }
}

export default Child2;
