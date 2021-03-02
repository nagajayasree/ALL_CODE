import React, { Component } from "react";
import RegularComp from "./RegularComponent";
import PureComp from "./PureComp";

class ParentComp extends Component {
  state = {
    name: "",
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: "jayasree1" });
    }, 2000);
  }

  render() {
    console.log(".....................parent comp............",this.state.name);
    return (
      <div>
        <p>ParentComp {this.state.name}</p>
        <RegularComp Name={this.state.name} />
        <PureComp Name={this.state.name} />
      </div>
    );
  }
}

export default ParentComp;
