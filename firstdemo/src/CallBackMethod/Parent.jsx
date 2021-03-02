import React, { Component } from "react";
import PersonalInfo from "./Child";

class DisplayInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "jay",
      age: 30,
    };
    this.setName = this.setName.bind(this);
  }

  setName() {
    this.setState({ name: this.state.name });
  }

  incrementAge(props) {
    this.setState({ age: this.state.age + props });
    // console.log(props);
  }

  decrementAge(props) {
    this.setState({ age: this.state.age - props });
  }

  render() {
    const { age } = this.state;
    return (
      <>
        {age >= 25 ? "" : alert("Invalid Age")}
        <div>
          <p>Data passed from child</p>
          <PersonalInfo
            ageIncrement={(props) => this.incrementAge(props)}
            ageDecrement={(props) => this.decrementAge(props)}
          >
            He is {age} years old.
          </PersonalInfo>
        </div>
      </>
    );
  }
}

export default DisplayInfo;
