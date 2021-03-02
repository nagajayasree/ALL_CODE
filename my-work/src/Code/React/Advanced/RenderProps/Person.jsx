import React, { Component } from "react";

class Person extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "js",
    };
  }
  render() {
    return (
      <>
        {this.props.name},{this.props.nameFunc()},{this.props.nameFunc2()}
      </>
    );
  }
}

export default Person;
