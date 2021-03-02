import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Jayasree", age: "" };
    // this.getAge = this.getAge.bind(this);
  }

  getAge = (Age) => {
    this.setState({ age: Age });
  };

  render() {
    return (
      <>
        <div>
          <h4>Data to Child from Parent Component</h4>
          <Child Name={this.state.name} ageHandler={(Age) => this.getAge(Age)}>
            <hr />
            <h4>Data from Child to Parent Component</h4>
            <p>In Parent Component</p>
            <p>Data from Child</p>
            <p>Age:{this.state.age}</p>
          </Child>
        </div>
      </>
    );
  }
}

export default Parent;
