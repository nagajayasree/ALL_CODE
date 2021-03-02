import React, { Component } from "react";

class Counter extends Component {
  render() {
    const myStyle = {
      color: "blue",
    };
    return (
      <div style={myStyle}>
        <h1>Counter : {this.props.count}</h1>
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter;
