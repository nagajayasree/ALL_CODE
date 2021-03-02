import React, { Component } from "react";
import { UserConsumer } from "./UserContext";

class Child4 extends Component {
  state = {};
  render() {
    return (
      <div>
        Child4
        <UserConsumer>
          {(value) => {
            return <div>Hello {value}</div>;
          }}
        </UserConsumer>
      </div>
    );
  }
}

export default Child4;
