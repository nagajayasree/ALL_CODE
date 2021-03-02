import React, { Component } from "react";
import Child from "./Child";

class ButtonClick extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      clickCount: 0,
      hoverCount: 0,
      name: "React js",
    };
  }
  buttonClick = () => {
    this.setState({ clickCount: this.state.clickCount + 1 });
  };

  buttonHover = () => {
    this.setState({ hoverCount: this.state.hoverCount + 1 });
  };

  addCount = () => {
    this.setState({ count: this.state.count + 5 });
  };

  render() {
    return (
      <div>
        <Child
          Name={this.state.name}
          func={this.buttonHover()}
          hCount={this.state.hoverCount}
        />
        <button onClick={this.buttonClick}>
          Clicked {this.state.clickCount} times
        </button>

        <button onMouseOver={this.addCount}>
          Add by hovering {this.state.count}
        </button>
      </div>
    );
  }
}

export default ButtonClick;
