import React, { Component } from "react";
import UpdatedComp from "./HocCounter";

class BtnHover extends Component {
  render() {
    return (
      <div>
        {/* {this.props.name} */}
        <button onMouseOver={this.props.onClick}>
          Hovered {this.props.count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComp(BtnHover);
