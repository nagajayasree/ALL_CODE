import React, { Component } from "react";
class Time extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <h1>Time</h1>
        {this.state.time}
      </div>
    );
  }
}

export default Time;
