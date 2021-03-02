import React, { Component } from "react";

class Child extends Component {
  state = {};
  render() {
    const { Name, func, hCount } = this.props;
    return (
      <div>
        {Name}
        <button onMouseOver={() => func("react")}>
          Hovered {hCount} times
        </button>
      </div>
    );
  }
}

export default Child;
