import React, { Component } from "react";

class Mounting extends Component {
  state = {};
  constructor() {
    super();
    console.log("constructor");
  }

  componentDidMount() {
    console.log("mounted");
  }

  render() {
    console.log("rendered");
    return 'Hello';
  }
}

export default Mounting;
