import React, { Component } from "react";

class Styles extends Component {
  render() {
    const mystyle = {
      color: "red",
      backgroundColor: "blue",
      padding: "10px",
    };
    return (
      <div>
        {/* inline styling */}
        <h1 style={{ color: "red" }}>Hello Style!</h1>
        <p>Add a little color to life!</p>

        {/* using style object */}
        <h1 style={mystyle}>Hello Style!</h1>
        <p>Add a little color to life!</p>
      </div>
    );
  }
}
export default Styles;
