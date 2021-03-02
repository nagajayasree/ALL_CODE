import React, { Component } from "react";

class RegularComp extends Component {
  state = {};
  render() {
    console.log("regular comp",this.props.Name);
    return <div>RegularComp {this.props.Name}</div>;
  }
}

export default RegularComp;
