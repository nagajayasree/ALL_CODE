import React, { Component } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markupLang: "HTML",
    };
  }
  handleMarkUp = () => {
    this.setState({ markupLang: "It uses tags to define elements" });
  };

  render() {
    return (
      <div>
        Inheritance in Components := Nesting of Components.This is every Parent
        Component contains Child Component.
        <Child1
          markupLang={this.state.markupLang} //passing state as props
          handleChange={this.handleMarkUp} //passing function as props
        />
      </div>
    );
  }
}

export default Parent;
