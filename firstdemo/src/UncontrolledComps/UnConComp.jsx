import React, { Component } from "react";

class Name extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.input = React.createRef();
  }

  handleSubmit = (event) => {
    event.preventDefault();
    alert("Submited name is:" + this.input.current.value);
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={this.input} defaultValue="Enter name" />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </>
    );
  }
}

export default Name;
