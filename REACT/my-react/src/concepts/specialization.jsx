import React, { Component } from "react";
class BgColor extends Component {
  render() {
    return (
      <div>
        {/* specialization */}
        {this.props.top}
        {this.props.bottom}
        {/* composition */}
        {this.props.children}
      </div>
    );
  }
}
function TopComponent() {
  return (
    <div
      className="green"
      style={({ color: "white" }, { backgroundColor: "green" })}
    >Hello</div>
  );
}
function BottomComponent() {
  return (
    <div
      className="blue"
      style={({ color: "white" }, { backgroundColor: "blue" })}
    >Good Day</div>
  );
}

export default BgColor;
