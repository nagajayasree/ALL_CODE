import React, { PureComponent } from "react";

class PureComp extends PureComponent {
  state = {};
  render() {
    console.log("pure comp",this.props.Name);
    return <div>PureComp {this.props.Name}</div>;
  }
}

export default PureComp;
