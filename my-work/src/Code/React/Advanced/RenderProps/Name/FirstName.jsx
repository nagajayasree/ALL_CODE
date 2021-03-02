import React, { Component } from "react";

class FirstName extends Component {
  state = {
    greet: "Hello",
  };
  render() {
    const { first } = this.props;
    return (
      <>
        <p>
          {first.firstName}
          {/* {this.props.render(this.state)} */}
          {/* {this.props.name} */}
        </p>
      </>
    );
  }
}

export default FirstName;
