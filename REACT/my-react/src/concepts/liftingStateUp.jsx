import React, { Component } from "react";

function BoilingPoint(props) {
  if (props.celsius >= 100) {
    return <p>The water would boil</p>;
  }
  return <p>the water would not boil</p>;
}

class Calculate extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const temperature = this.state.temperature;
    return (
      <fieldset>
        <legend>Enter temperature in Celsius:</legend>
        <input value={temperature} onChange={this.handleChange} />
        <BoilingPoint celsius={parseFloat(temperature)}></BoilingPoint>
      </fieldset>
    );
  }
}

export default Calculate;
