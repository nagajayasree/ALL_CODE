import React, { Component } from "react";
import UpdatedComp from "./HocCounter";

class BtnClick extends Component {
  render() {
    return (
      <div>
        {/* {this.props.name} */}
        <button onClick={this.props.onClick}>
          Clicked {this.props.count} times
        </button>
      </div>
    );
  }
}

export default UpdatedComp(BtnClick);
