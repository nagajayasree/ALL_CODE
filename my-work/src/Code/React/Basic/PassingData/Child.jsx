import React, { Component } from "react";

class Child extends Component {
  state = {};

  render() {
    return (
      <>
        <p>In Child Component</p>
        Data from Parent:
        <div>
          <p>Name:{this.props.Name}</p> {this.props.children}
        </div>
        <button onClick={() => this.props.ageHandler(25)}>SetAge</button>
      </>
    );
  }
}

export default Child;
